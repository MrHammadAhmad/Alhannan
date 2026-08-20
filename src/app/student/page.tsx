import React from "react";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { Video, Calendar, Clock, BookOpen } from "lucide-react";
import Link from "next/link";

export default async function StudentDashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return <div>Please log in</div>;
  }

  // Fetch student profile and registrations
  const student = await prisma.studentProfile.findUnique({
    where: { userId: session.user.id },
    include: {
      registrations: {
        include: {
          course: true,
          batch: {
            include: {
              teacher: {
                include: { user: true }
              }
            }
          }
        }
      }
    }
  });

  if (!student) {
    return <div className="p-8 text-center text-gray-500">Student profile not found. Please contact administration.</div>;
  }

  const activeRegistrations = student.registrations.filter(r => r.status === "ACTIVE");
  const pendingRegistrations = student.registrations.filter(r => r.status !== "ACTIVE");

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-navy-custom">Student Dashboard</h2>
        <p className="text-sm text-gray-500">Welcome back, {session.user.name}</p>
      </div>

      {activeRegistrations.length === 0 && pendingRegistrations.length === 0 && (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
           <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
           <h3 className="text-lg font-bold text-navy-custom">No Courses Yet</h3>
           <p className="text-gray-500 text-sm mt-2 mb-6">You haven't registered for any courses.</p>
           <Link href="/register" className="px-6 py-2.5 bg-emerald-custom text-white rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors">
              Browse Courses
           </Link>
        </div>
      )}

      {/* Active Courses */}
      {activeRegistrations.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-navy-custom flex items-center"><Video className="w-5 h-5 mr-2 text-emerald-custom" /> My Active Classes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeRegistrations.map(reg => (
              <div key={reg.id} className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2 h-full bg-emerald-custom"></div>
                
                <span className="text-[10px] font-bold text-emerald-custom-light uppercase tracking-widest">{reg.course.category}</span>
                <h4 className="text-xl font-bold text-navy-custom mt-1">{reg.course.name}</h4>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-2 text-gray-400" />
                    Teacher: <span className="font-semibold text-navy-custom ml-1">{reg.batch?.teacher.user.name || "TBD"}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                    Days: <span className="font-semibold text-navy-custom ml-1">{reg.batch?.daysOfWeek.join(", ") || "TBD"}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                    Time: <span className="font-semibold text-navy-custom ml-1">{reg.batch?.time || "TBD"}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400">Next Class: Today</span>
                  {reg.batch?.liveClassLink ? (
                    <a href={reg.batch.liveClassLink} target="_blank" rel="noreferrer" className="px-4 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg text-xs font-bold transition-colors">
                      Join Live
                    </a>
                  ) : (
                    <span className="px-4 py-2 bg-gray-50 text-gray-400 rounded-lg text-xs font-bold">
                      Link not available
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pending Registrations */}
      {pendingRegistrations.length > 0 && (
        <div className="space-y-4 mt-8">
          <h3 className="text-lg font-bold text-gray-500">Pending Registrations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pendingRegistrations.map(reg => (
              <div key={reg.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{reg.course.category}</span>
                <h4 className="text-lg font-bold text-gray-600 mt-1">{reg.course.name}</h4>
                <div className="mt-3 inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-amber-100/50 text-amber-700 text-[10px] font-bold tracking-wide">
                  <Clock className="w-3 h-3" />
                  <span>{reg.status.replace(/_/g, " ")}</span>
                </div>
                <p className="text-xs text-gray-400 mt-3">We are currently processing your enrollment. You will be notified once a batch is assigned.</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Ensure lucide icon User is imported correctly
import { User } from "lucide-react";

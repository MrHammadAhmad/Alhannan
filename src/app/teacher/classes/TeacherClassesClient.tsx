"use client";

import React, { useState } from "react";
import { updateLiveLink } from "@/app/actions/teacherActions";
import { Users, Clock, Calendar, Video, Edit2, CheckCircle } from "lucide-react";
import Link from "next/link";

export function TeacherClassesClient({ batches }: { batches: any[] }) {
  const [editingLink, setEditingLink] = useState<string | null>(null);
  const [linkInput, setLinkInput] = useState("");

  const handleSaveLink = async (batchId: string) => {
    await updateLiveLink(batchId, linkInput);
    setEditingLink(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-navy-custom">My Assigned Batches</h2>
        <p className="text-sm text-gray-500">Manage your classes, update live links, and mark attendance.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {batches.length === 0 && (
          <div className="col-span-2 bg-gray-50 rounded-2xl p-12 text-center border border-gray-100">
             <h3 className="text-lg font-bold text-gray-600">No assigned batches yet.</h3>
          </div>
        )}
        
        {batches.map((batch) => (
          <div key={batch.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
               <span className="text-[10px] font-bold text-emerald-custom-light uppercase tracking-widest">{batch.course.name}</span>
               <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase rounded-md">
                 Active
               </span>
            </div>
            
            <h3 className="text-xl font-bold text-navy-custom">{batch.name}</h3>
            
            <div className="mt-4 space-y-2 flex-grow">
               <div className="flex items-center text-sm">
                  <Calendar className="w-4 h-4 mr-3 text-emerald-custom" />
                  <span className="font-semibold text-gray-700 w-24">Days:</span> 
                  <span className="text-gray-600">{batch.daysOfWeek.join(", ")}</span>
               </div>
               <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-3 text-emerald-custom" />
                  <span className="font-semibold text-gray-700 w-24">Time:</span> 
                  <span className="text-gray-600">{batch.time} (UTC)</span>
               </div>
               <div className="flex items-center text-sm">
                  <Users className="w-4 h-4 mr-3 text-emerald-custom" />
                  <span className="font-semibold text-gray-700 w-24">Students:</span> 
                  <span className="text-gray-600">{batch._count.registrations} Enrolled</span>
               </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 space-y-4">
               {/* Live Link Section */}
               <div>
                  <label className="text-xs font-bold text-gray-400 uppercase block mb-2">Live Class Link</label>
                  {editingLink === batch.id ? (
                    <div className="flex space-x-2">
                       <input 
                         autoFocus
                         value={linkInput}
                         onChange={(e) => setLinkInput(e.target.value)}
                         className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none"
                         placeholder="https://zoom.us/j/..."
                       />
                       <button onClick={() => handleSaveLink(batch.id)} className="p-2 bg-emerald-custom hover:bg-emerald-600 text-white rounded-xl">
                          <CheckCircle className="w-4 h-4" />
                       </button>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                       <a href={batch.liveClassLink || "#"} target="_blank" className="flex items-center text-sm font-semibold text-navy-custom truncate max-w-[200px]">
                         <Video className="w-4 h-4 mr-2 text-gray-400" />
                         {batch.liveClassLink || "No link provided"}
                       </a>
                       <button onClick={() => {
                         setEditingLink(batch.id);
                         setLinkInput(batch.liveClassLink || "");
                       }} className="text-gray-400 hover:text-emerald-custom transition-colors">
                         <Edit2 className="w-4 h-4" />
                       </button>
                    </div>
                  )}
               </div>

               <Link href={`/teacher/classes/${batch.id}`} className="w-full py-2.5 bg-navy-custom hover:bg-navy-900 text-white font-bold text-sm rounded-xl transition-colors shadow-sm flex items-center justify-center space-x-2">
                 <span>Manage Students & Attendance</span>
               </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

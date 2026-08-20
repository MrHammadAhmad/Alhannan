"use client";

import React from "react";
import { deleteStudent } from "@/app/actions/studentsAdmin";
import { Trash2, Mail, Phone, MapPin, Calendar } from "lucide-react";

export function StudentsClient({ students }: { students: any[] }) {
  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this student and all their records?")) {
      await deleteStudent(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-navy-custom">Manage Students</h2>
          <p className="text-sm text-gray-500">View and manage registered students.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-50/50 text-xs uppercase text-gray-400 font-semibold border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Enrolled Courses</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {students.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-400">
                    No students registered yet.
                  </td>
                </tr>
              )}
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-navy-custom">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <div>{student.name}</div>
                        <div className="text-xs text-gray-400 font-normal">Age: {student.studentProfile?.age || "-"}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 space-y-1">
                    <div className="flex items-center text-xs"><Mail className="w-3 h-3 mr-1.5" /> {student.email}</div>
                    {student.phone && (
                      <div className="flex items-center text-xs"><Phone className="w-3 h-3 mr-1.5" /> {student.phone}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-xs">
                    {student.studentProfile?.country ? (
                      <div className="flex items-center text-xs"><MapPin className="w-3 h-3 mr-1.5 text-gray-400" /> {student.studentProfile.country}</div>
                    ) : "-"}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col space-y-1 text-xs font-semibold text-emerald-700">
                       {student.studentProfile?.registrations?.map((reg: any) => (
                         <span key={reg.id}>{reg.course.name} <span className="text-gray-400 font-normal">({reg.status})</span></span>
                       ))}
                       {(!student.studentProfile?.registrations || student.studentProfile.registrations.length === 0) && (
                         <span className="text-gray-400 font-normal">None</span>
                       )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => handleDelete(student.id)} className="p-2 hover:bg-red-50 text-red-500 hover:text-red-600 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

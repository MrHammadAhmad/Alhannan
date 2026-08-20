"use client";

import React, { useState } from "react";
import { markAttendance } from "@/app/actions/teacherActions";
import { Users, CheckCircle, XCircle, AlertCircle, Calendar } from "lucide-react";
import Link from "next/link";

export function AttendanceClient({ batch }: { batch: any }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Initialize state from existing today's attendance or default to PRESENT
  const initialAttendance = batch.registrations.map((reg: any) => {
    const existingRecord = batch.attendance.find((a: any) => a.studentId === reg.student.id);
    return {
      studentId: reg.student.id,
      name: reg.student.user.name,
      status: existingRecord ? existingRecord.status : "PRESENT"
    };
  });

  const [attendance, setAttendance] = useState(initialAttendance);
  const isAlreadyMarked = batch.attendance.length > 0;

  const handleStatusChange = (studentId: string, status: string) => {
    setAttendance((prev: any) => 
      prev.map((a: any) => a.studentId === studentId ? { ...a, status } : a)
    );
  };

  const handleSave = async () => {
    setIsSubmitting(true);
    setSuccess(false);
    const recordsToSave = attendance.map((a: any) => ({
      studentId: a.studentId,
      status: a.status
    }));
    await markAttendance(batch.id, recordsToSave);
    setIsSubmitting(false);
    setSuccess(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-2 text-sm text-gray-500">
        <Link href="/teacher/classes" className="hover:text-emerald-custom">My Classes</Link>
        <span>/</span>
        <span className="font-semibold text-navy-custom">{batch.name}</span>
      </div>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-navy-custom">Mark Attendance</h2>
          <p className="text-sm text-gray-500">Record attendance for today's session.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
          <div className="flex items-center space-x-3">
             <Calendar className="w-5 h-5 text-emerald-custom" />
             <span className="font-bold text-navy-custom">{new Date().toDateString()}</span>
          </div>
          {isAlreadyMarked && (
             <span className="text-xs font-bold bg-amber-50 text-amber-600 px-3 py-1 rounded-full uppercase tracking-wider">
               Already Marked
             </span>
          )}
        </div>
        
        <div className="p-6">
           {success && (
              <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl mb-6 flex items-center border border-emerald-100">
                <CheckCircle className="w-5 h-5 mr-3" />
                <span className="font-semibold text-sm">Attendance saved successfully!</span>
              </div>
           )}

           <div className="space-y-4">
              {attendance.length === 0 && (
                <div className="text-center py-8 text-gray-400">
                  No active students enrolled in this batch yet.
                </div>
              )}
              {attendance.map((record: any) => (
                <div key={record.studentId} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                   <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mr-3">
                        {record.name.charAt(0)}
                      </div>
                      <span className="font-bold text-navy-custom">{record.name}</span>
                   </div>
                   <div className="flex space-x-2 bg-white p-1 rounded-lg border border-gray-200">
                      <button 
                        onClick={() => handleStatusChange(record.studentId, "PRESENT")}
                        className={`px-4 py-1.5 rounded-md text-xs font-bold transition-colors ${record.status === "PRESENT" ? "bg-emerald-500 text-white shadow-sm" : "text-gray-500 hover:bg-gray-100"}`}
                      >
                        Present
                      </button>
                      <button 
                        onClick={() => handleStatusChange(record.studentId, "ABSENT")}
                        className={`px-4 py-1.5 rounded-md text-xs font-bold transition-colors ${record.status === "ABSENT" ? "bg-red-500 text-white shadow-sm" : "text-gray-500 hover:bg-gray-100"}`}
                      >
                        Absent
                      </button>
                      <button 
                        onClick={() => handleStatusChange(record.studentId, "LEAVE")}
                        className={`px-4 py-1.5 rounded-md text-xs font-bold transition-colors ${record.status === "LEAVE" ? "bg-amber-500 text-white shadow-sm" : "text-gray-500 hover:bg-gray-100"}`}
                      >
                        Leave
                      </button>
                   </div>
                </div>
              ))}
           </div>

           {attendance.length > 0 && (
             <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                <button 
                  onClick={handleSave}
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-navy-custom hover:bg-navy-900 text-white font-bold text-sm rounded-xl shadow-lg transition-colors flex items-center space-x-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>{isSubmitting ? "Saving..." : (isAlreadyMarked ? "Update Attendance" : "Save Attendance")}</span>
                </button>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  Users, 
  Calendar, 
  FileText, 
  CheckCircle, 
  Clock, 
  BookOpen,
  Send,
  PlusCircle,
  Video
} from "lucide-react";

export default function TeacherDashboardPage() {
  const sidebarItems = [
    { name: "Teacher Overview", path: "/dashboard/teacher?tab=overview", icon: BookOpen },
    { name: "My Active Students", path: "/dashboard/teacher?tab=students", icon: Users },
    { name: "Timetable Schedule", path: "/dashboard/teacher?tab=schedule", icon: Calendar },
    { name: "Grading & Evaluations", path: "/dashboard/teacher?tab=grading", icon: FileText }
  ];

  const todayClasses = [
    { id: 1, student: "Zainab Mahmood", age: 11, course: "Quran Recitation with Tajweed", time: "05:30 PM - 06:00 PM", status: "Upcoming", room: "/classroom" },
    { id: 2, student: "Omar Siddique", age: 8, course: "Noorani Qaida Basics", time: "06:15 PM - 06:45 PM", status: "Upcoming", room: "/classroom" },
    { id: 3, student: "Bilal Malik", age: 15, course: "Hifz Quran Memorization", time: "07:00 PM - 07:45 PM", status: "Upcoming", room: "/classroom" }
  ];

  const activeStudents = [
    { id: 101, name: "Zainab Mahmood", age: 11, country: "United Kingdom", course: "Quran Recitation with Tajweed", progress: "42%", lastTopic: "Ikhfa Rules" },
    { id: 102, name: "Omar Siddique", age: 8, country: "Canada", course: "Noorani Qaida Basics", progress: "75%", lastTopic: "Joining 4-letter words" },
    { id: 103, name: "Bilal Malik", age: 15, country: "United States", course: "Hifz Quran Memorization", progress: "5 Juz", lastTopic: "Surah Al-Mulk revision" }
  ];

  const [evaluation, setEvaluation] = useState({
    studentId: "101",
    attendance: "Present",
    grade: "Excellent",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmitEvaluation = (e: React.FormEvent) => {
    e.preventDefault();
    if (evaluation.notes.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEvaluation({ ...evaluation, notes: "" });
      }, 3000);
    }
  };

  return (
    <DashboardLayout
      title="Teacher Management Portal"
      role="teacher"
      sidebarItems={sidebarItems}
    >
      <div className="space-y-8">
        {/* Top Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-xl border border-gray-150 shadow-sm flex items-center justify-between">
            <div>
              <span className="block text-[10px] font-bold text-gray-400 uppercase">Assigned Students</span>
              <span className="block text-xl font-black text-navy-custom mt-1">12 Active</span>
              <span className="block text-[10px] text-emerald-custom font-semibold mt-1">Goal: Maintain 1-on-1 focus</span>
            </div>
            <div className="p-3 bg-emerald-custom/5 text-emerald-custom rounded-lg">
              <Users className="h-6 w-6 text-emerald-custom" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-150 shadow-sm flex items-center justify-between">
            <div>
              <span className="block text-[10px] font-bold text-gray-400 uppercase">Classes Today</span>
              <span className="block text-xl font-black text-navy-custom mt-1">3 Sessions</span>
              <span className="block text-[10px] text-gray-400 font-semibold mt-1">Total time: 2 hours</span>
            </div>
            <div className="p-3 bg-emerald-custom/5 text-emerald-custom rounded-lg">
              <Calendar className="h-6 w-6 text-emerald-custom" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-150 shadow-sm flex items-center justify-between">
            <div>
              <span className="block text-[10px] font-bold text-gray-400 uppercase">Pending Homework Review</span>
              <span className="block text-xl font-black text-amber-600 mt-1">2 Submissions</span>
              <span className="block text-[10px] text-red-500 font-semibold mt-1">Check recordings</span>
            </div>
            <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
              <FileText className="h-6 w-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-150 shadow-sm flex items-center justify-between">
            <div>
              <span className="block text-[10px] font-bold text-gray-400 uppercase">Classes Completed</span>
              <span className="block text-xl font-black text-navy-custom mt-1">428 Hours</span>
              <span className="block text-[10px] text-gray-400 font-semibold mt-1">This Academic Year</span>
            </div>
            <div className="p-3 bg-emerald-custom/5 text-emerald-custom rounded-lg">
              <CheckCircle className="h-6 w-6 text-emerald-custom" />
            </div>
          </div>
        </div>

        {/* Core grids split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Today's Schedule (Col-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-xl border border-gray-150 p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-navy-custom border-b border-gray-100 pb-3 uppercase tracking-wider">
                Today's Class Timetable
              </h3>

              <div className="space-y-4 text-xs font-semibold">
                {todayClasses.map((c) => (
                  <div key={c.id} className="p-4 bg-gray-50 border border-gray-150 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-extrabold text-navy-custom">{c.student}</span>
                        <span className="text-[10px] text-gray-400 font-semibold">(Age: {c.age})</span>
                      </div>
                      <span className="block text-[10px] text-emerald-custom uppercase font-bold">{c.course}</span>
                      <div className="flex items-center space-x-1 text-gray-400 text-[10px]">
                        <Clock className="h-3.5 w-3.5 text-gold-custom" />
                        <span>{c.time}</span>
                      </div>
                    </div>
                    <div>
                      <a
                        href={c.room}
                        className="inline-flex items-center space-x-1.5 px-4 py-2 bg-emerald-custom hover:bg-emerald-900 text-white rounded text-[10px] font-bold shadow-sm"
                      >
                        <Video className="h-3.5 w-3.5 text-gold-custom-light animate-pulse" />
                        <span>Join Session</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* List of active students roster table */}
            <div className="bg-white rounded-xl border border-gray-150 p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-navy-custom border-b border-gray-100 pb-3 uppercase tracking-wider">
                Assigned Student Profiles
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-semibold text-gray-600">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-400">
                      <th className="pb-3">Name</th>
                      <th className="pb-3">Course</th>
                      <th className="pb-3">Progress</th>
                      <th className="pb-3">Last Topic</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeStudents.map((s) => (
                      <tr key={s.id} className="border-b border-gray-50 last:border-b-0">
                        <td className="py-3">
                          <span className="block font-bold text-navy-custom">{s.name}</span>
                          <span className="block text-[10px] text-gray-400 font-medium">{s.country}</span>
                        </td>
                        <td className="py-3">{s.course}</td>
                        <td className="py-3 text-emerald-custom font-bold">{s.progress}</td>
                        <td className="py-3 text-gray-400">{s.lastTopic}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Student Evaluation Form (Col-5) */}
          <div className="lg:col-span-5 bg-white border border-gray-150 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <form onSubmit={handleSubmitEvaluation} className="space-y-4 text-xs font-semibold">
              <h3 className="text-sm font-bold text-navy-custom border-b border-gray-100 pb-3 uppercase tracking-wider">
                Submit Class Progress Report
              </h3>

              {submitted && (
                <div className="p-3 bg-emerald-50 text-emerald-custom border border-emerald-200 rounded-lg text-center font-bold">
                  Evaluation Report Submitted!
                </div>
              )}

              {/* Student Select */}
              <div className="space-y-1">
                <label className="text-gray-400">Select Student</label>
                <select
                  value={evaluation.studentId}
                  onChange={(e) => setEvaluation({ ...evaluation, studentId: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-emerald-custom bg-white cursor-pointer"
                >
                  <option value="101">Zainab Mahmood</option>
                  <option value="102">Omar Siddique</option>
                  <option value="103">Bilal Malik</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Attendance */}
                <div className="space-y-1">
                  <label className="text-gray-400">Attendance Status</label>
                  <select
                    value={evaluation.attendance}
                    onChange={(e) => setEvaluation({ ...evaluation, attendance: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-emerald-custom bg-white cursor-pointer"
                  >
                    <option value="Present">Present</option>
                    <option value="Late">Late</option>
                    <option value="Excused Absence">Excused Absence</option>
                    <option value="Unexcused Absence">Unexcused Absence</option>
                  </select>
                </div>

                {/* Grade */}
                <div className="space-y-1">
                  <label className="text-gray-400">Tajweed Performance</label>
                  <select
                    value={evaluation.grade}
                    onChange={(e) => setEvaluation({ ...evaluation, grade: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-emerald-custom bg-white cursor-pointer"
                  >
                    <option value="Excellent">Excellent</option>
                    <option value="Good Progress">Good Progress</option>
                    <option value="Needs Practice">Needs Practice</option>
                  </select>
                </div>
              </div>

              {/* Evaluation Notes */}
              <div className="space-y-1">
                <label className="text-gray-400">Lesson Progress / Surah recited & Homework Notes</label>
                <textarea
                  rows={4}
                  value={evaluation.notes}
                  onChange={(e) => setEvaluation({ ...evaluation, notes: e.target.value })}
                  placeholder="Describe Surah and verses covered, mistakes to practice, and homework for next session..."
                  className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-emerald-custom"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-2.5 rounded bg-emerald-custom hover:bg-emerald-900 text-white font-bold flex items-center justify-center space-x-1 cursor-pointer"
              >
                <Send className="h-4 w-4 text-gold-custom-light" />
                <span>Submit Report Card</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

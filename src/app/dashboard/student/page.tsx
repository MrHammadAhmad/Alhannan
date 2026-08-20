"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Award, 
  CheckCircle, 
  AlertCircle, 
  GraduationCap, 
  FileText,
  Bookmark,
  TrendingUp,
  Download,
  Eye,
  QrCode,
  User
} from "lucide-react";

export default function StudentDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const sidebarItems = [
    { name: "Portal Overview", path: "/dashboard/student?tab=overview", icon: Bookmark },
    { name: "My Classes Schedule", path: "/dashboard/student?tab=classes", icon: Calendar },
    { name: "Homework & Notes", path: "/dashboard/student?tab=homework", icon: FileText },
    { name: "Syllabus Progress", path: "/dashboard/student?tab=progress", icon: TrendingUp },
    { name: "Graduation Certificates", path: "/dashboard/student?tab=certificates", icon: Award }
  ];

  const studentBadges = [
    { id: 1, name: "Regular Reciter", desc: "10 classes attended continuously", icon: CheckCircle, color: "bg-emerald-50 text-emerald-custom" },
    { id: 2, name: "Tajweed Star", desc: "Perfect pronunciation of Heavy letters", icon: Award, color: "bg-gold-custom/10 text-gold-custom" },
    { id: 3, name: "Hifz Starter", desc: "Memorized Surah Al-Mulk successfully", icon: GraduationCap, color: "bg-blue-50 text-blue-700" }
  ];

  const currentClass = {
    title: "Quran Recitation with Tajweed",
    teacher: "Qari Ahmad Raza",
    time: "05:30 PM - 06:00 PM (Today)",
    room: "/classroom",
    topic: "Noon Sakinah & Tanween: Rule of Ikhfa"
  };

  const completedCourses = [
    {
      id: "qaida-basics",
      name: "Noorani Qaida Basics",
      completedDate: "May 12, 2026",
      certNumber: "HC-QA-2026-9031",
      leadTeacher: "Mufti Muhammad Ibrahim"
    }
  ];

  return (
    <DashboardLayout
      title="Student Academy Portal"
      role="student"
      sidebarItems={sidebarItems}
    >
      <div className="space-y-8">
        {/* Main Stats widgets Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-xl border border-gray-150 shadow-sm flex items-center justify-between">
            <div>
              <span className="block text-[10px] font-bold text-gray-400 uppercase">Class Attendance</span>
              <span className="block text-xl font-black text-navy-custom mt-1">96%</span>
              <span className="block text-[10px] text-emerald-custom font-semibold mt-1">Goal: Above 90%</span>
            </div>
            <div className="p-3 bg-emerald-custom/5 text-emerald-custom rounded-lg">
              <CheckCircle className="h-6 w-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-150 shadow-sm flex items-center justify-between">
            <div>
              <span className="block text-[10px] font-bold text-gray-400 uppercase">Syllabus Progress</span>
              <span className="block text-xl font-black text-navy-custom mt-1">42%</span>
              <span className="block text-[10px] text-gray-400 font-semibold mt-1">Noorani Qaida Level 2</span>
            </div>
            <div className="p-3 bg-emerald-custom/5 text-emerald-custom rounded-lg">
              <TrendingUp className="h-6 w-6 text-emerald-custom" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-150 shadow-sm flex items-center justify-between">
            <div>
              <span className="block text-[10px] font-bold text-gray-400 uppercase">Pending Homework</span>
              <span className="block text-xl font-black text-amber-600 mt-1">1 Assignment</span>
              <span className="block text-[10px] text-red-500 font-semibold mt-1">Due: Tomorrow</span>
            </div>
            <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
              <FileText className="h-6 w-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-150 shadow-sm flex items-center justify-between">
            <div>
              <span className="block text-[10px] font-bold text-gray-400 uppercase">Earned Certificates</span>
              <span className="block text-xl font-black text-gold-custom mt-1">1 Verified</span>
              <span className="block text-[10px] text-gray-400 font-semibold mt-1">Noorani Qaida Graduate</span>
            </div>
            <div className="p-3 bg-gold-custom/10 text-gold-custom rounded-lg">
              <Award className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Dashboard Grid blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Live class and schedule (Col-8) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Live Class Panel */}
            <div className="bg-white rounded-xl border border-gray-150 p-6 shadow-sm space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-custom animate-pulse"></span>
                  <span className="text-xs font-bold text-navy-custom uppercase">Next Scheduled Session</span>
                </div>
                <span className="text-[10px] bg-emerald-50 text-emerald-custom font-bold px-2 py-0.5 rounded">Scheduled</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div className="space-y-2">
                  <h3 className="text-base font-extrabold text-navy-custom">{currentClass.title}</h3>
                  <div className="space-y-1 text-xs text-gray-500 font-semibold">
                    <div className="flex items-center space-x-1.5"><User className="h-3.5 w-3.5 text-emerald-custom" /> <span>Tutor: {currentClass.teacher}</span></div>
                    <div className="flex items-center space-x-1.5"><Clock className="h-3.5 w-3.5 text-emerald-custom" /> <span>Time: {currentClass.time}</span></div>
                    <div className="flex items-center space-x-1.5"><BookOpen className="h-3.5 w-3.5 text-emerald-custom" /> <span>Topic: {currentClass.topic}</span></div>
                  </div>
                </div>

                <div className="text-right">
                  <a
                    href={currentClass.room}
                    className="inline-block w-full sm:w-auto px-6 py-3 rounded-lg bg-emerald-custom hover:bg-emerald-900 text-white font-bold text-xs shadow-md transition-colors text-center"
                  >
                    Enter Live Class Portal
                  </a>
                </div>
              </div>
            </div>

            {/* Homework and comments */}
            <div className="bg-white rounded-xl border border-gray-150 p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-navy-custom border-b border-gray-100 pb-3 uppercase tracking-wider">
                Pending Assignments & Teacher Notes
              </h3>

              <div className="space-y-4 text-xs font-semibold">
                <div className="p-4 bg-amber-50/50 border border-amber-200/50 rounded-xl space-y-2">
                  <div className="flex justify-between items-center text-amber-800">
                    <h4 className="font-bold">Homework 4: Pronunciation Drill of Heavy Letters</h4>
                    <span>Pending Submission</span>
                  </div>
                  <p className="text-gray-500 font-medium">
                    Please record your recitation of Surah Al-Ala verses 1-5, paying special attention to heavy letters (Kha, Ghayn, Qaf). Upload recording file in this portal.
                  </p>
                  <div className="pt-2">
                    <button className="px-4 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded text-[10px]">
                      Upload Audio File
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50/30 border border-emerald-100/50 rounded-xl space-y-2">
                  <div className="flex justify-between items-center text-emerald-800">
                    <h4 className="font-bold">Homework 3: Noon Sakinah Rules</h4>
                    <span className="text-emerald-600">Graded: Excellent (9.5/10)</span>
                  </div>
                  <p className="text-gray-500 font-medium">
                    "Very good recitation of Surah Al-Mulk verses 1-10. Your Ikhfa pronunciation has improved. Keep practicing the stretching limits." — Qari Ahmad Raza
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Badges and Certificates (Col-4) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Achievements Badges */}
            <div className="bg-white rounded-xl border border-gray-150 p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-navy-custom border-b border-gray-100 pb-3 uppercase tracking-wider">
                Earned Badges
              </h3>
              <div className="space-y-3">
                {studentBadges.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div key={badge.id} className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className={`p-2.5 rounded-lg ${badge.color} shrink-0`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-navy-custom">{badge.name}</span>
                        <span className="block text-[10px] text-gray-400 font-medium">{badge.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Certifications download mockup */}
            <div className="bg-white rounded-xl border border-gray-150 p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-navy-custom border-b border-gray-100 pb-3 uppercase tracking-wider">
                Course Certifications
              </h3>

              <div className="space-y-4 text-xs font-semibold">
                {completedCourses.map((c) => (
                  <div key={c.id} className="p-4 bg-gray-50 border border-gray-150 rounded-xl space-y-3">
                    <div className="flex items-center space-x-3">
                      <QrCode className="h-10 w-10 text-navy-custom shrink-0" />
                      <div>
                        <h4 className="font-extrabold text-navy-custom">{c.name}</h4>
                        <span className="block text-[10px] text-gray-400">Ver ID: {c.certNumber}</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-gray-500 space-y-1">
                      <div>Date Completed: <span className="font-bold text-navy-custom">{c.completedDate}</span></div>
                      <div>Lead Scholar: <span className="font-bold text-navy-custom">{c.leadTeacher}</span></div>
                    </div>
                    <div className="flex gap-2 pt-1">
                      <button className="flex-1 py-1.5 rounded bg-emerald-custom hover:bg-emerald-900 text-white text-[10px] font-bold flex items-center justify-center space-x-1 cursor-pointer">
                        <Eye className="h-3 w-3" /> <span>View</span>
                      </button>
                      <button className="flex-1 py-1.5 rounded border border-gray-200 hover:border-emerald-custom text-navy-custom hover:text-emerald-custom text-[10px] font-bold flex items-center justify-center space-x-1 cursor-pointer">
                        <Download className="h-3 w-3" /> <span>Download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

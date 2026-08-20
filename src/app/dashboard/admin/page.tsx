"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  Users, 
  UserCheck, 
  BookOpen, 
  DollarSign, 
  Calendar, 
  TrendingUp, 
  Shield, 
  AlertCircle,
  PlusCircle,
  Search,
  CheckCircle,
  XCircle
} from "lucide-react";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("students");
  const [modalOpen, setModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    course: "quran-tajweed",
    teacher: "Qari Ahmad Raza"
  });

  const sidebarItems = [
    { name: "Overview Analytics", path: "/dashboard/admin?tab=overview", icon: Shield },
    { name: "Manage Students", path: "/dashboard/admin?tab=students", icon: Users },
    { name: "Manage Tutors", path: "/dashboard/admin?tab=tutors", icon: UserCheck },
    { name: "Financial Invoices", path: "/dashboard/admin?tab=payments", icon: DollarSign }
  ];

  const adminStats = [
    { label: "Total Students", value: "1,248", change: "+12% this mo", icon: Users, color: "bg-emerald-50 text-emerald-custom" },
    { label: "Active Scholars", value: "54", change: "+4 pending", icon: UserCheck, color: "bg-blue-50 text-blue-700" },
    { label: "Syllabus Courses", value: "12 Programs", change: "2 new draft", icon: BookOpen, color: "bg-purple-50 text-purple-700" },
    { label: "Monthly Revenue", value: "$4,850", change: "+8% this mo", icon: DollarSign, color: "bg-gold-custom/10 text-gold-custom" }
  ];

  const studentRegistries = [
    { id: "S-1049", name: "Zainab Mahmood", email: "zainab@example.uk", course: "Quran Recitation with Tajweed", teacher: "Qari Ahmad Raza", status: "Active" },
    { id: "S-1050", name: "Omar Siddique", email: "omar@example.ca", course: "Noorani Qaida Basics", teacher: "Ustadha Fatima Noor", status: "Active" },
    { id: "S-1051", name: "Bilal Malik", email: "bilal@example.us", course: "Hifz Quran Memorization", teacher: "Hafiz Muhammad Abdullah", status: "Active" },
    { id: "S-1052", name: "Sara Khan", email: "sara@example.pk", course: "Arabic Language Grammar", teacher: "Ustadha Fatima Noor", status: "Pending Trial" }
  ];

  const paymentInvoices = [
    { inv: "INV-8021", student: "Zainab Mahmood", amount: "$45.00", date: "Aug 12, 2026", status: "Paid" },
    { inv: "INV-8022", student: "Omar Siddique", amount: "$35.00", date: "Aug 11, 2026", status: "Paid" },
    { inv: "INV-8023", student: "Bilal Malik", amount: "$60.00", date: "Aug 09, 2026", status: "Overdue" },
    { inv: "INV-8024", student: "Sara Khan", amount: "$50.00", date: "Aug 08, 2026", status: "Refunded" }
  ];

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (newStudent.name && newStudent.email) {
      setModalOpen(false);
      setNewStudent({ name: "", email: "", course: "quran-tajweed", teacher: "Qari Ahmad Raza" });
    }
  };

  return (
    <DashboardLayout
      title="Admin Control Panel"
      role="admin"
      sidebarItems={sidebarItems}
    >
      <div className="space-y-8">
        {/* Analytics row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {adminStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white p-5 rounded-xl border border-gray-150 shadow-sm flex items-center justify-between">
                <div>
                  <span className="block text-[10px] font-bold text-gray-400 uppercase">{stat.label}</span>
                  <span className="block text-xl font-black text-navy-custom mt-1">{stat.value}</span>
                  <span className="block text-[10px] text-emerald-custom font-semibold mt-1">{stat.change}</span>
                </div>
                <div className={`p-3 rounded-lg ${stat.color} shrink-0`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic List grids */}
        <div className="bg-white rounded-xl border border-gray-150 p-6 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-100 pb-4">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab("students")}
                className={`px-4 py-2 rounded text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "students" ? "bg-emerald-custom text-white" : "bg-gray-50 text-navy-custom hover:bg-gray-100"
                }`}
              >
                Students Registry
              </button>
              <button
                onClick={() => setActiveTab("payments")}
                className={`px-4 py-2 rounded text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "payments" ? "bg-emerald-custom text-white" : "bg-gray-50 text-navy-custom hover:bg-gray-100"
                }`}
              >
                Billing & Payments
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center space-x-1 px-4 py-2 bg-emerald-custom hover:bg-emerald-900 text-white rounded text-xs font-bold shadow-sm cursor-pointer"
              >
                <PlusCircle className="h-4 w-4 text-gold-custom-light" />
                <span>Register Student</span>
              </button>
            </div>
          </div>

          {/* Tab Render: Students Table */}
          {activeTab === "students" && (
            <div className="overflow-x-auto animate-fade-in">
              <table className="w-full text-left text-xs font-semibold text-gray-600">
                <thead>
                  <tr className="border-b border-gray-100 text-gray-400">
                    <th className="pb-3">ID</th>
                    <th className="pb-3">Name</th>
                    <th className="pb-3">Course / Curriculums</th>
                    <th className="pb-3">Assigned Scholar</th>
                    <th className="pb-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {studentRegistries.map((s) => (
                    <tr key={s.id} className="border-b border-gray-50 last:border-b-0">
                      <td className="py-3.5 font-bold text-navy-custom">{s.id}</td>
                      <td className="py-3.5">
                        <span className="block font-black text-navy-custom">{s.name}</span>
                        <span className="block text-[10px] text-gray-400 font-medium">{s.email}</span>
                      </td>
                      <td className="py-3.5">{s.course}</td>
                      <td className="py-3.5 font-bold text-navy-custom">{s.teacher}</td>
                      <td className="py-3.5">
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase ${
                          s.status === "Active" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"
                        }`}>
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Tab Render: Payments Invoices */}
          {activeTab === "payments" && (
            <div className="overflow-x-auto animate-fade-in">
              <table className="w-full text-left text-xs font-semibold text-gray-600">
                <thead>
                  <tr className="border-b border-gray-100 text-gray-400">
                    <th className="pb-3">Invoice</th>
                    <th className="pb-3">Student name</th>
                    <th className="pb-3">Date</th>
                    <th className="pb-3">Amount Due</th>
                    <th className="pb-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentInvoices.map((p) => (
                    <tr key={p.inv} className="border-b border-gray-50 last:border-b-0">
                      <td className="py-3.5 font-bold text-navy-custom">{p.inv}</td>
                      <td className="py-3.5 font-bold text-navy-custom">{p.student}</td>
                      <td className="py-3.5 font-medium text-gray-400">{p.date}</td>
                      <td className="py-3.5 font-black text-emerald-custom">{p.amount}</td>
                      <td className="py-3.5">
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase ${
                          p.status === "Paid" ? "bg-green-50 text-green-700" : p.status === "Overdue" ? "bg-red-50 text-red-700" : "bg-gray-100 text-gray-500"
                        }`}>
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Add Student Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60" onClick={() => setModalOpen(false)} />
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative z-10 shadow-2xl space-y-6">
            <h3 className="text-sm font-bold text-navy-custom border-b border-gray-100 pb-3 uppercase tracking-wider">
              Register New Student
            </h3>
            
            <form onSubmit={handleAddStudent} className="space-y-4 text-xs font-semibold">
              <div className="space-y-1">
                <label className="text-gray-400">Student Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Abdullah Khan"
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-emerald-custom"
                />
              </div>

              <div className="space-y-1">
                <label className="text-gray-400">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={newStudent.email}
                  onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-emerald-custom"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-gray-400">Course Syllabus</label>
                  <select
                    value={newStudent.course}
                    onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded bg-white focus:outline-none focus:border-emerald-custom cursor-pointer"
                  >
                    <option value="quran-tajweed">Quran with Tajweed</option>
                    <option value="noorani-qaida">Noorani Qaida Basics</option>
                    <option value="hifz-quran">Hifz Memorization</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-gray-400">Assign Scholar</label>
                  <select
                    value={newStudent.teacher}
                    onChange={(e) => setNewStudent({ ...newStudent, teacher: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded bg-white focus:outline-none focus:border-emerald-custom cursor-pointer"
                  >
                    <option value="Qari Ahmad Raza">Qari Ahmad Raza</option>
                    <option value="Ustadha Fatima Noor">Ustadha Fatima Noor</option>
                    <option value="Hafiz Abdullah">Hafiz Abdullah</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="flex-1 py-2.5 rounded border border-gray-200 hover:bg-gray-50 text-navy-custom cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded bg-emerald-custom hover:bg-emerald-900 text-white cursor-pointer"
                >
                  Confirm Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

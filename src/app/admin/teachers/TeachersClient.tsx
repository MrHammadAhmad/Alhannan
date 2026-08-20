"use client";

import React, { useState } from "react";
import { createTeacher, deleteTeacher } from "@/app/actions/teachers";
import { UserPlus, Trash2, Mail, Phone, BookOpen, AlertCircle } from "lucide-react";

export function TeachersClient({ teachers }: { teachers: any[] }) {
  const [isAdding, setIsAdding] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    const formData = new FormData(e.currentTarget);
    const res = await createTeacher(formData);
    if (res.error) {
      setError(res.error);
    } else {
      setIsAdding(false);
    }
    setIsSubmitting(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this teacher?")) {
      await deleteTeacher(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-navy-custom">Manage Teachers</h2>
          <p className="text-sm text-gray-500">Add, remove, and manage teacher accounts.</p>
        </div>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="px-4 py-2 bg-emerald-custom hover:bg-emerald-600 text-white font-bold text-sm rounded-xl transition-colors shadow-sm flex items-center space-x-2"
        >
          <UserPlus className="w-4 h-4" />
          <span>{isAdding ? "Cancel" : "Add Teacher"}</span>
        </button>
      </div>

      {isAdding && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8 animate-in fade-in slide-in-from-top-4">
          <h3 className="text-lg font-bold text-navy-custom mb-4">Add New Teacher</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
             {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center space-x-2 border border-red-100">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase block mb-1">Name</label>
                <input name="name" required placeholder="Full Name" className="w-full bg-gray-50 border border-gray-200 focus:border-emerald-custom focus:ring-1 focus:ring-emerald-custom rounded-xl py-2.5 px-4 text-sm outline-none transition-all" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase block mb-1">Email</label>
                <input name="email" type="email" required placeholder="teacher@quranacademy.com" className="w-full bg-gray-50 border border-gray-200 focus:border-emerald-custom focus:ring-1 focus:ring-emerald-custom rounded-xl py-2.5 px-4 text-sm outline-none transition-all" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase block mb-1">Password</label>
                <input name="password" type="password" required placeholder="Initial Password" minLength={6} className="w-full bg-gray-50 border border-gray-200 focus:border-emerald-custom focus:ring-1 focus:ring-emerald-custom rounded-xl py-2.5 px-4 text-sm outline-none transition-all" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase block mb-1">Phone</label>
                <input name="phone" placeholder="Optional Phone Number" className="w-full bg-gray-50 border border-gray-200 focus:border-emerald-custom focus:ring-1 focus:ring-emerald-custom rounded-xl py-2.5 px-4 text-sm outline-none transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-bold text-gray-400 uppercase block mb-1">Bio / Specialties</label>
                <input name="bio" placeholder="E.g. Certified in Tajweed, 10 years experience" className="w-full bg-gray-50 border border-gray-200 focus:border-emerald-custom focus:ring-1 focus:ring-emerald-custom rounded-xl py-2.5 px-4 text-sm outline-none transition-all" />
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button disabled={isSubmitting} type="submit" className="px-6 py-2.5 bg-navy-custom hover:bg-navy-900 text-white font-bold text-sm rounded-xl transition-colors">
                {isSubmitting ? "Saving..." : "Save Teacher"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-50/50 text-xs uppercase text-gray-400 font-semibold border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Teacher Info</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Bio</th>
                <th className="px-6 py-4">Assigned Batches</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {teachers.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-400">
                    No teachers found.
                  </td>
                </tr>
              )}
              {teachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-navy-custom">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                        {teacher.name.charAt(0)}
                      </div>
                      <span>{teacher.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 space-y-1">
                    <div className="flex items-center text-xs"><Mail className="w-3 h-3 mr-1.5" /> {teacher.email}</div>
                    {teacher.teacherProfile?.phone && (
                      <div className="flex items-center text-xs"><Phone className="w-3 h-3 mr-1.5" /> {teacher.teacherProfile.phone}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-xs max-w-[200px] truncate" title={teacher.teacherProfile?.bio}>
                    {teacher.teacherProfile?.bio || "-"}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1.5 font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md w-fit">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{teacher.teacherProfile?.batches?.length || 0} Batches</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => handleDelete(teacher.id)} className="p-2 hover:bg-red-50 text-red-500 hover:text-red-600 rounded-lg transition-colors">
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

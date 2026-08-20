"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, Mail, User, GraduationCap } from "lucide-react";

export default function TeacherRegisterPage() {
  const [qualification, setQualification] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!qualification || !firstName || !lastName || !email || !password) return;
    
    setIsSubmitting(true);
    // Simulate successful registration
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/dashboard/teacher");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-white flex flex-col md:flex-row">
      {/* Left side Form Column */}
      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-24 z-10 overflow-y-auto">
        {/* Back Link */}
        <Link
          href="/register"
          className="inline-flex items-center space-x-2 text-xs text-gray-400 hover:text-white transition-colors"
        >
          <span>← Back</span>
        </Link>

        {/* Core Form Container */}
        <div className="space-y-8 max-w-md w-full my-auto pt-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gold-custom-light uppercase tracking-widest">
              Scholars & Teachers
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Set up your account
            </h1>
            <p className="text-sm text-gray-400 font-medium">
              Create your professional account to start taking bookings and teaching.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Qualification / Specialty */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                Academic Qualification / Specialty
              </label>
              <div className="relative">
                <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Alimiyah Degree / Hafiz-ul-Quran / Tajweed Ijazah"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-850 hover:border-stone-800 focus:border-gold-custom-light focus:ring-1 focus:ring-gold-custom-light rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-650 transition-all outline-none"
                />
              </div>
            </div>

            {/* First and Last Name Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    type="text"
                    required
                    placeholder="Jane"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-850 hover:border-stone-800 focus:border-gold-custom-light focus:ring-1 focus:ring-gold-custom-light rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-650 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    type="text"
                    required
                    placeholder="Smith"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-850 hover:border-stone-800 focus:border-gold-custom-light focus:ring-1 focus:ring-gold-custom-light rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-650 transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type="email"
                  required
                  placeholder="jane.smith@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-850 hover:border-stone-800 focus:border-gold-custom-light focus:ring-1 focus:ring-gold-custom-light rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-650 transition-all outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-850 hover:border-stone-800 focus:border-gold-custom-light focus:ring-1 focus:ring-gold-custom-light rounded-xl py-3 pl-10 pr-10 text-sm text-white placeholder-gray-650 transition-all outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white hover:bg-gray-100 text-stone-950 font-bold text-sm py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 pt-4 cursor-pointer"
            >
              <span>{isSubmitting ? "Creating account..." : "Create account"}</span>
            </button>
          </form>

          {/* Switch to Student Registration */}
          <div className="space-y-2 pt-4">
            <p className="text-xs text-gray-400 font-semibold">
              Signing up as a student?{" "}
              <Link
                href="/register/student"
                className="text-gold-custom-light hover:underline font-bold"
              >
                Switch to student
              </Link>
            </p>
            <p className="text-xs text-gray-400 font-semibold">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-gold-custom-light hover:underline font-bold"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-[10px] text-gray-500 mt-8">
          © 2026 Al-Hannan Quran Institute. All rights reserved.
        </p>
      </div>

      {/* Right side Visual Column */}
      <div className="hidden md:flex flex-1 relative overflow-hidden border-l border-stone-900">
        <img
          src="https://i.pinimg.com/736x/d6/0b/64/d60b64962c79859c6b3a02eade1dc714.jpg"
          alt="Al-Quran Al-Kareem Calligraphy"
          className="absolute inset-0 w-full h-full object-cover select-none"
        />
        <div className="absolute inset-0 bg-stone-950/20 mix-blend-multiply z-10" />
      </div>
    </div>
  );
}

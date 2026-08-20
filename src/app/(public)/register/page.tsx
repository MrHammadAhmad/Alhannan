"use client";

import React from "react";
import Link from "next/link";
import { User, Award, ArrowRight } from "lucide-react";

export default function RegisterOptionsPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-white flex flex-col md:flex-row">
      {/* Left side Form Column */}
      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-24 z-10">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs text-gray-400 hover:text-white transition-colors"
        >
          <span>← Back</span>
        </Link>

        {/* Core Content */}
        <div className="space-y-8 max-w-md w-full my-auto pt-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-custom-light uppercase tracking-widest">
              Al-Hannan Quran Institute
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Create your account
            </h1>
            <p className="text-sm text-gray-400 font-medium">
              Choose how you'd like to use Al-Hannan Quran Institute.
            </p>
          </div>

          <div className="space-y-4">
            {/* Student Registration Option */}
            <Link
              href="/register/student"
              className="flex items-center justify-between p-5 rounded-2xl bg-stone-900 border border-stone-800 hover:border-emerald-custom/50 hover:bg-stone-850/50 transition-all group cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-emerald-custom/10 text-emerald-custom-light rounded-xl group-hover:bg-emerald-custom/25 transition-all">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Al-Hannan for Students</h4>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">
                    Book sessions, view progress, and learn Tajweed.
                  </p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-emerald-custom-light transition-all" />
            </Link>

            {/* Teacher Registration Option */}
            <Link
              href="/register/teacher"
              className="flex items-center justify-between p-5 rounded-2xl bg-stone-900 border border-stone-800 hover:border-emerald-custom/50 hover:bg-stone-850/50 transition-all group cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-amber-500/10 text-gold-custom-light rounded-xl group-hover:bg-amber-500/25 transition-all">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Al-Hannan for Scholars</h4>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">
                    Manage bookings, teach students, and track schedules.
                  </p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-gold-custom-light transition-all" />
            </Link>
          </div>

          {/* Already have an account */}
          <p className="text-xs text-gray-400 font-semibold pt-4">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-emerald-custom-light hover:underline font-bold"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Footer info */}
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
        {/* Subtle dark overlay mix-blend to match layout color tones */}
        <div className="absolute inset-0 bg-stone-950/20 mix-blend-multiply z-10" />
      </div>
    </div>
  );
}

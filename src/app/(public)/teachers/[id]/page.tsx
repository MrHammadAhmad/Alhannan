"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { Star, GraduationCap, Globe, Clock, Award, Calendar, CheckCircle } from "lucide-react";

interface TeacherDetails {
  name: string;
  title: string;
  gender: string;
  specialties: string[];
  qualifications: string;
  experience: string;
  languages: string[];
  rating: number;
  students: number;
  avatarColor: string;
  bio: string;
  academicBackground: string[];
  schedule: string[];
  reviews: {
    student: string;
    date: string;
    text: string;
    rating: number;
  }[];
}

const mockTeacherData: Record<string, TeacherDetails> = {
  "qari-ahmad": {
    name: "Qari Ahmad Raza",
    title: "Senior Tajweed Reciter & Qari",
    gender: "Male",
    specialties: ["Quran Reading", "Tajweed Recitation", "Hifz Quran"],
    qualifications: "Ten Qira'at Certification (Ijazah) with Isnaad, Al-Azhar graduate",
    experience: "8 Years",
    languages: ["English", "Arabic", "Urdu"],
    rating: 4.9,
    students: 120,
    avatarColor: "bg-emerald-700",
    bio: "Qari Ahmad Raza is a highly qualified Quran reciter with a deep passion for teaching. He holds multiple Ijazahs in the narration of Hafs 'an 'Asim and Warsh 'an Nafi'. Over the past 8 years, Qari Ahmad has trained hundreds of students from the UK, USA, and Canada, helping them achieve correct pronunciation (Makharij) and acquire beautiful modulation of voice (Tarteel).",
    academicBackground: [
      "Bachelor's Degree in Islamic Theology & Quranic Sciences — Al-Azhar University, Cairo.",
      "Ijazah with Isnaad (Chain of Narration) reaching the Prophet Muhammad (PBUH) in Quran Recitation.",
      "Advanced Certificate in Arabic Linguistics & Phonetics."
    ],
    schedule: ["Monday - Friday: 2:00 PM - 10:00 PM UTC", "Saturday: 9:00 AM - 3:00 PM UTC"],
    reviews: [
      {
        student: "Siddique Khan",
        date: "July 2026",
        text: "Qari Ahmad has an amazing recitation. His correction points on Makharij are very precise. My recitation has improved immensely in 3 months.",
        rating: 5
      },
      {
        student: "Zayd Mahmood",
        date: "June 2026",
        text: "Extremely patient and encouraging teacher. Highly recommend him for Tajweed.",
        rating: 5
      }
    ]
  },
  "ustadha-fatima": {
    name: "Ustadha Fatima Noor",
    title: "Arabic Grammar Scholar & Arabic Native",
    gender: "Female",
    specialties: ["Classical Arabic Grammar", "Quran Tafseer", "Islamic Studies"],
    qualifications: "MA in Arabic Linguistics & Semiotics, Damascus University",
    experience: "12 Years",
    languages: ["English", "Arabic"],
    rating: 5.0,
    students: 95,
    avatarColor: "bg-teal-700",
    bio: "Ustadha Fatima Noor is a native Arabic speaker who specializes in teaching Quranic Arabic grammar and Tafseer. With over 12 years of experience in formal classrooms and online platforms, she helps intermediate students translate and understand the Holy Quran directly. She is also a popular instructor for female students and kids.",
    academicBackground: [
      "Master's Degree in Arabic Literature & Grammatical Analysis — Damascus University.",
      "Certified Ijazah in Tafseer and Hadith Studies.",
      "Diploma in Online Pedagogy & Curriculum Design."
    ],
    schedule: ["Monday - Thursday: 8:00 AM - 4:00 PM UTC", "Sunday: 10:00 AM - 4:00 PM UTC"],
    reviews: [
      {
        student: "Mariam Ali",
        date: "August 2026",
        text: "Ustadha Fatima makes Arabic grammar so easy to comprehend. She breaks down compound Quranic verbs step by step. Jazakallah!",
        rating: 5
      }
    ]
  }
};

export default function TeacherProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const teacher = mockTeacherData[id] || mockTeacherData["qari-ahmad"];

  return (
    <div className="space-y-16 pb-20">
      {/* Profile Header */}
      <section className="bg-emerald-custom py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center opacity-20 pointer-events-none mix-blend-overlay" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar Circle */}
            <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-2xl ${teacher.avatarColor} text-white flex items-center justify-center font-black text-4xl sm:text-5xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 shrink-0`}>
              {teacher.name.charAt(0)}
            </div>

            {/* Title / Meta */}
            <div className="space-y-4 text-center md:text-left rtl:md:text-right flex-grow">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-white/20 text-white text-[10px] uppercase font-extrabold tracking-wide">
                  Certified {teacher.gender} Scholar
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">
                  {teacher.name}
                </h1>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs font-bold text-gray-600">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-gold-custom text-gold-custom" />
                  <span>{teacher.rating} rating</span>
                </div>
                <div>Students: <span className="text-navy-custom">{teacher.students}+ Active</span></div>
                <div>Experience: <span className="text-navy-custom">{teacher.experience}</span></div>
                <div>Languages: <span className="text-navy-custom">{teacher.languages.join(", ")}</span></div>
              </div>
            </div>

            {/* Trial CTA button */}
            <div className="shrink-0 pt-4 md:pt-0">
              <Link
                href={`/register/student?teacher=${encodeURIComponent(teacher.name)}`}
                className="block w-full sm:w-auto px-8 py-3 rounded-xl bg-emerald-custom hover:bg-emerald-900 text-white font-bold text-sm shadow-md hover-lift text-center"
              >
                Book Free Class With {teacher.name.split(" ")[0]}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-10">
            {/* Bio */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-navy-custom">Biography</h2>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                {teacher.bio}
              </p>
            </div>

            {/* Academic Background */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-navy-custom">Academic & Islamic Background</h2>
              <ul className="space-y-3">
                {teacher.academicBackground.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-xs text-gray-500 font-semibold">
                    <CheckCircle className="h-4 w-4 text-emerald-custom shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialties & Subjects */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-navy-custom">Subjects Taught</h2>
              <div className="flex flex-wrap gap-2">
                {teacher.specialties.map((spec) => (
                  <span
                    key={spec}
                    className="px-3.5 py-1.5 rounded-full bg-emerald-custom/5 text-emerald-custom text-xs font-bold border border-emerald-custom/10"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Student Reviews */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-navy-custom">Student Feedbacks</h2>
              <div className="space-y-4">
                {teacher.reviews.map((rev, idx) => (
                  <div key={idx} className="bg-gray-50 p-5 rounded-xl border border-gray-100 space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-navy-custom">{rev.student}</h4>
                        <span className="text-[10px] text-gray-400 font-semibold">{rev.date}</span>
                      </div>
                      <div className="flex space-x-0.5">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-gold-custom text-gold-custom" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-500 leading-relaxed font-semibold">{rev.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Schedule Sidebar info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-xl border border-gray-150 p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-navy-custom border-b border-gray-100 pb-3 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-emerald-custom" />
                <span>Teaching Schedule Availability</span>
              </h3>
              <ul className="space-y-3 text-xs text-gray-500 font-semibold">
                {teacher.schedule.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Clock className="h-4 w-4 text-gold-custom shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-3 text-[10px] text-gray-400">
                <p>Note: Tutors accommodate class timings across GMT, EST, PST, AST, and PKT timezones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

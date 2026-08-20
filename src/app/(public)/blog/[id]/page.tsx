"use client";

import React, { use } from "react";
import Link from "next/link";
import { Calendar, User, Clock, ArrowLeft, Heart, MessageCircle, Share2, BookOpen } from "lucide-react";

interface BlogPostDetails {
  title: string;
  category: string;
  desc: string;
  date: string;
  author: string;
  readTime: string;
  content: string[];
  authorBio: string;
}

const mockBlogPostData: Record<string, BlogPostDetails> = {
  "tajweed-basics-rules": {
    title: "5 Essential Tajweed Rules Every Beginner Must Learn First",
    category: "Tajweed Basics",
    desc: "An introductory guide covering articulation points (Makharij), heavy letters, and Noon Sakinah rules to refine your Quran recitation.",
    date: "August 15, 2026",
    author: "Qari Ahmad Raza",
    readTime: "5 min read",
    content: [
      "Reciting the Holy Quran beautifully and correctly is an obligation for every Muslim. The science of doing so is called Tajweed, which literally translates to 'beautification' or 'refinement'. Under the rules of Tajweed, each Arabic letter must be articulated from its correct physical location (Makhraj) and given its proper attributes (Sifaat).",
      "If you are just starting, memorizing dozens of rules can feel overwhelming. To make your journey smooth, here are the top 5 essential Tajweed rules you should focus on first:",
      "1. Makharij al-Haroof (Articulation Points): Before learning how to stretch or merge letters, you must learn how to pronounce each individual letter correctly. Arabic has letters like Kha (خ), Ghayn (غ), and Qaf (ق) which require specific throat contraction. Drills with a native scholar will correct your mouth positioning.",
      "2. Haroof al-Isti'la (Heavy Letters): Seven letters are always pronounced with a heavy, thick voice by raising the back of the tongue. These are grouped in the phrase 'Khussa Dagtin Qidh' (خ، ص، ض، غ، ط، ق، ظ). Reciting them with a light voice can alter word meanings.",
      "3. Noon Sakinah & Tanween: When a Noon with no vowel (Noon Sakinah) or double vowels (Tanween) is followed by other letters, the sound changes. It can be merged (Idgham), read clearly (Izhar), flipped into a 'Meem' sound (Iqlab), or hidden with a nasal hum (Ikhfa). This rule appears in almost every verse of the Quran.",
      "4. Rules of Madd (Prolongation): The letters Alif, Waw, and Ya act as stretching indicators. Depending on whether they are followed by a Hamzah or a Sukoon, you must stretch the vowel for 2, 4, or 6 counts. This gives Quranic recitation its beautiful, rhythmic cadence.",
      "5. Qalqalah (The Echo Sound): There are five letters—grouped in the phrase 'Qutb Jaddin' (ق، ط، ب، ج، د)—that produce a distinct echoing, bouncing, or rebounding sound when they carry a Sukoon (resting sign). This creates clean syllable transitions.",
      "Conclusive Advice: Tajweed cannot be self-taught simply by reading books. Because it relies heavily on auditory imitation, practicing 1-on-1 with a qualified teacher who holds a verified chain of transmission (Isnaad) is the only way to ensure your mistakes are corrected."
    ],
    authorBio: "Qari Ahmad Raza is a certified Quran scholar holding a golden Ijazah in Tajweed. He teaches intermediate recitation classes at Hannan Consultants Academy."
  }
};

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  // Fallback to tajweed-basics-rules if custom id doesn't exist
  const post = mockBlogPostData[id] || mockBlogPostData["tajweed-basics-rules"];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Back button */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-custom hover:text-emerald-950 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Blog Center</span>
        </Link>
      </div>

      {/* Main post layout */}
      <article className="space-y-6">
        <span className="px-3 py-1 rounded-full bg-emerald-custom/10 text-emerald-custom text-xs font-bold uppercase tracking-wider">
          {post.category}
        </span>
        
        <h1 className="text-2xl sm:text-4xl font-black text-navy-custom leading-tight">
          {post.title}
        </h1>

        <p className="text-sm sm:text-base text-gray-500 font-medium italic border-l-4 border-gold-custom pl-4 py-1 leading-relaxed">
          "{post.desc}"
        </p>

        {/* Metadata line */}
        <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400 font-semibold border-y border-gray-100 py-3">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4 text-emerald-custom" />
            <span>Published: {post.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4 text-emerald-custom" />
            <span>Written by: {post.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4 text-emerald-custom" />
            <span>Read duration: {post.readTime}</span>
          </div>
        </div>

        {/* Content body paragraphs */}
        <div className="space-y-6 pt-4 text-sm sm:text-base text-navy-custom/90 leading-relaxed font-medium">
          {post.content.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </article>

      {/* Social likes/comments bar */}
      <div className="flex items-center justify-between border-y border-gray-100 py-4 text-xs font-bold text-gray-400">
        <div className="flex space-x-4">
          <button className="flex items-center space-x-1 hover:text-red-500">
            <Heart className="h-4 w-4" />
            <span>42 Likes</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-emerald-custom">
            <MessageCircle className="h-4 w-4" />
            <span>5 Comments</span>
          </button>
        </div>
        <button className="flex items-center space-x-1 hover:text-navy-custom">
          <Share2 className="h-4 w-4" />
          <span>Share Post</span>
        </button>
      </div>

      {/* Author Bio Widget */}
      <div className="bg-emerald-custom/5 border border-emerald-custom/10 p-6 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div className="w-14 h-14 rounded-full bg-emerald-custom text-white flex items-center justify-center font-bold text-xl uppercase shrink-0">
          {post.author.charAt(0)}
        </div>
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-sm font-bold text-navy-custom">About the Author: {post.author}</h4>
          <p className="text-xs text-gray-500 font-semibold leading-relaxed">
            {post.authorBio}
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Search, Calendar, User, Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const categories = [
    "All",
    "Quran",
    "Tajweed",
    "Islamic Education",
    "Parenting",
    "Hifz",
    "Arabic"
  ];

  const blogPosts = [
    {
      id: "tajweed-basics-rules",
      title: "5 Essential Tajweed Rules Every Beginner Must Learn First",
      category: "Tajweed",
      desc: "An introductory guide covering articulation points (Makharij), heavy letters, and Noon Sakinah rules to refine your Quran recitation.",
      date: "August 15, 2026",
      author: "Qari Ahmad Raza",
      readTime: "5 min read",
      imageBg: "bg-emerald-50 text-emerald-custom",
    },
    {
      id: "quranic-parenting-tips",
      title: "How to Encourage Your Kids to Read Quran Daily Without Pressure",
      category: "Parenting",
      desc: "Practical tips for parents to build a consistent, love-filled Quran routine at home using positive reinforcement and gamified trackers.",
      date: "July 28, 2026",
      author: "Ustadha Ayesha Siddiqua",
      readTime: "7 min read",
      imageBg: "bg-rose-50 text-rose-700",
    },
    {
      id: "hifz-memorization-techniques",
      title: "Scientific Memorization Techniques for Quran Hifz Students",
      category: "Hifz",
      desc: "Explore active recall, spaced repetition, and optimal times of day to memorize Surahs efficiently and retain them permanently.",
      date: "June 12, 2026",
      author: "Hafiz Muhammad Abdullah",
      readTime: "8 min read",
      imageBg: "bg-amber-50 text-amber-700",
    },
    {
      id: "importance-of-arabic-grammar",
      title: "Why Learning Classical Arabic Grammar is Essential for Quranic Understanding",
      category: "Arabic",
      desc: "How basic Nahw (syntax) and Sarf (morphology) rules help you direct translate verses and connect deeply with the message.",
      date: "May 20, 2026",
      author: "Ustadha Fatima Noor",
      readTime: "6 min read",
      imageBg: "bg-blue-50 text-blue-700",
    },
    {
      id: "daily-sunnah-supplications",
      title: "10 Daily Sunnah Supplications (Duas) for Children and Families",
      category: "Islamic Education",
      desc: "A compilation of simple, authentic prophetic supplications for morning, sleeping, eating, and traveling, complete with translation.",
      date: "April 18, 2026",
      author: "Dr. Sajid Rehman",
      readTime: "4 min read",
      imageBg: "bg-purple-50 text-purple-700",
    }
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCat =
      selectedCat === "All" ||
      post.category.toLowerCase() === selectedCat.toLowerCase();

    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-emerald-custom py-12 text-center space-y-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center opacity-20 pointer-events-none mix-blend-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            Quranic Knowledge Center
          </h1>
          <p className="text-xs sm:text-sm text-emerald-50 font-semibold uppercase tracking-wide">
            Insights, tajweed tips, and spiritual reminders from our certified scholars.
          </p>
        </div>
      </section>

      {/* Toolbar filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between pb-6 border-b border-gray-100">
          {/* Category selection */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCat === cat
                    ? "bg-emerald-custom text-white shadow-md"
                    : "bg-gray-100 hover:bg-gray-200 text-navy-custom"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search query */}
          <div className="relative w-full md:w-64">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 pointer-events-none">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-full border border-gray-200 focus:outline-none focus:border-emerald-custom bg-white"
            />
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between hover-lift"
              >
                <div>
                  {/* Photo Frame representation */}
                  <div className={`p-8 ${post.imageBg} relative overflow-hidden flex flex-col justify-between min-h-[140px]`}>
                    <span className="px-3 py-1 rounded-full bg-white/70 text-[10px] font-extrabold uppercase w-fit tracking-wide shadow-sm">
                      {post.category}
                    </span>
                    <h2 className="text-lg font-extrabold text-navy-custom mt-4 leading-tight">
                      {post.title}
                    </h2>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs text-gray-500 font-semibold leading-relaxed line-clamp-3">
                      {post.desc}
                    </p>

                    {/* Metadata line */}
                    <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold border-t border-gray-50 pt-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-3.5 w-3.5" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-50/50 mt-4 flex items-center justify-end">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-xs font-bold text-emerald-custom hover:text-emerald-900 flex items-center space-x-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-sm font-bold text-gray-400">
            No articles found matching your query.
          </div>
        )}
      </section>
    </div>
  );
}

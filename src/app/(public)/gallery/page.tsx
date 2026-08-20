"use client";

import React, { useState } from "react";
import { ShieldCheck, Calendar, Award, Camera } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Classes", "Students", "Events", "Certificates", "Workshops"];

  const items = [
    {
      id: 1,
      title: "Interactive Live Lesson",
      category: "Classes",
      desc: "Daily 1-on-1 Quran reading classes using our virtual whiteboard.",
      icon: Camera,
    },
    {
      id: 2,
      title: "Hifz Graduation Ceremony",
      category: "Events",
      desc: "Celebrating students who completed the complete memorization of the Quran.",
      icon: Award,
    },
    {
      id: 3,
      title: "Tajweed Workshop",
      category: "Workshops",
      desc: "Online seminar discussing articulation points of letters for adults.",
      icon: Calendar,
    },
    {
      id: 4,
      title: "Annual Achievement Awards",
      category: "Students",
      desc: "Rewarding children for regular attendance and high homework scores.",
      icon: ShieldCheck,
    },
    {
      id: 5,
      title: "Verified Student Certificate",
      category: "Certificates",
      desc: "Sample certificate displaying secure QR code for verification.",
      icon: Award,
    },
    {
      id: 6,
      title: "Teacher Training Program",
      category: "Workshops",
      desc: "Seminars on online teaching methodologies and kids psychology.",
      icon: Calendar,
    },
  ];

  const filteredItems = activeCategory === "All"
    ? items
    : items.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-emerald-custom/5 py-12 text-center space-y-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/hero.png')", opacity: 0.2, mixBlendMode: 'multiply', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <h1 className="text-3xl sm:text-5xl font-black text-navy-custom">
            Academy Gallery
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 font-semibold uppercase tracking-wide">
            A visual overview of our online classes, graduation events, and certificates.
          </p>
        </div>
      </section>

      {/* Grid view & filter toolbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Toggles */}
        <div className="flex flex-wrap gap-2 justify-center pb-6 border-b border-gray-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-emerald-custom text-white shadow-sm"
                  : "bg-gray-100 hover:bg-gray-200 text-navy-custom"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-150 shadow-sm overflow-hidden flex flex-col justify-between hover-lift p-6"
              >
                <div className="space-y-4">
                  {/* Photo Mockup Frame */}
                  <div className="h-44 bg-navy-custom/95 rounded-xl flex items-center justify-center text-center p-6 relative overflow-hidden">
                    {/* Geometric pattern background */}
                    <div className="absolute inset-0 bg-islamic-pattern opacity-5" />
                    
                    <div className="space-y-2 relative z-10 text-white">
                      <ItemIcon className="h-8 w-8 text-gold-custom-light mx-auto" />
                      <span className="block text-xs font-bold tracking-wider uppercase opacity-80">{item.category}</span>
                      <span className="block text-sm font-black">{item.title}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

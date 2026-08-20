"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle, Info, PhoneCall, Gift, ShieldCheck } from "lucide-react";

export default function FeePage() {
  const [currency, setCurrency] = useState<"USD" | "GBP" | "PKR">("USD");

  const exchangeRates = {
    USD: { symbol: "$", scale: 1 },
    GBP: { symbol: "£", scale: 0.8 },
    PKR: { symbol: "Rs.", scale: 280 }
  };

  const packages = [
    {
      name: "Starter Plan",
      classesPerWeek: 2,
      totalClasses: 8,
      basePrice: 35,
      desc: "Perfect for young kids or busy adults starting their foundation studies (e.g. Noorani Qaida).",
      features: [
        "1-on-1 Personalized Classes",
        "30 Minutes Class Duration",
        "Male & Female Certified Scholars",
        "Flexible Portal Scheduling",
        "Monthly Progress Reports",
        "No Obligation / Cancel Anytime"
      ],
      popular: false
    },
    {
      name: "Standard Plan",
      classesPerWeek: 3,
      totalClasses: 12,
      basePrice: 45,
      desc: "Recommended for steady progress in Tajweed, Hifz, or Arabic translation.",
      features: [
        "Everything in Starter Plan",
        "Recitation Certificate Eligibility",
        "24/7 Scheduling Adaptability",
        "Complimentary Virtual Portals access",
        "Quarterly Live Supervisor Audits",
        "Priority Support Assistance"
      ],
      popular: true
    },
    {
      name: "Intensive Plan",
      classesPerWeek: 5,
      totalClasses: 20,
      basePrice: 65,
      desc: "Designed for serious students focusing on fast-track Hifz-ul-Quran (memorization).",
      features: [
        "Everything in Standard Plan",
        "Accelerated Learning Tracker",
        "Direct Line to Academy Scholars",
        "Custom Course Modules Plan",
        "Personalized Tajweed Correction Audits",
        "Annual Ijazah Evaluation Track"
      ],
      popular: false
    }
  ];

  const getPrice = (basePrice: number) => {
    const { symbol, scale } = exchangeRates[currency];
    const computedPrice = Math.round(basePrice * scale);
    if (currency === "PKR") {
      return `${symbol} ${computedPrice.toLocaleString()}`;
    }
    return `${symbol}${computedPrice}`;
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Header banner */}
      <section className="bg-emerald-custom/5 py-16 text-center space-y-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/hero.png')", opacity: 0.4, mixBlendMode: 'multiply', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 relative z-10">
          <span className="text-xs font-bold text-emerald-custom uppercase tracking-widest bg-emerald-custom/10 px-3.5 py-1 rounded-full">
            Transparent Tuition Hadya
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-navy-custom leading-tight">
            Hadya & Fee Structures
          </h1>
          <p className="text-sm sm:text-base text-gray-500 font-medium max-w-xl mx-auto">
            Affordable monthly packages for 1-on-1 live classes. Start with our 3-Class Free Trial. No contracts, cancel anytime.
          </p>
        </div>
      </section>

      {/* Main pricing structure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Currency Switcher */}
        <div className="flex justify-center items-center space-x-3 rtl:space-x-reverse">
          <span className="text-xs font-bold text-navy-custom uppercase tracking-wide">Select Currency:</span>
          <div className="bg-gray-100 p-1 rounded-full inline-flex border border-gray-200">
            {(["USD", "GBP", "PKR"] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  currency === curr
                    ? "bg-emerald-custom text-white shadow-md"
                    : "text-navy-custom/70 hover:text-navy-custom"
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 bg-white border flex flex-col justify-between transition-all ${
                pkg.popular
                  ? "border-emerald-custom shadow-xl scale-102 ring-4 ring-emerald-custom/5"
                  : "border-gray-200 hover:border-emerald-custom/20 hover:shadow-lg"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-custom text-white text-[10px] uppercase font-bold tracking-widest">
                  Most Popular
                </span>
              )}
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-navy-custom">{pkg.name}</h3>
                  <p className="text-xs text-gray-400 font-semibold mt-1">{pkg.desc}</p>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-black text-emerald-custom">{getPrice(pkg.basePrice)}</span>
                    <span className="text-xs text-gray-500 font-semibold">/ month</span>
                  </div>
                  <span className="text-[10px] text-gray-400 block mt-1">
                    {pkg.classesPerWeek} Classes per week ({pkg.totalClasses} sessions monthly)
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 border-t border-gray-100 pt-6">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2.5 text-xs text-navy-custom/90 font-medium">
                      <CheckCircle className="h-4.5 w-4.5 text-gold-custom shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-gray-100 space-y-3">
                <Link
                  href="/register"
                  className={`block w-full text-center py-3 rounded-full text-xs font-bold transition-all ${
                    pkg.popular
                      ? "bg-emerald-custom text-white hover:bg-emerald-950 shadow-md hover:shadow-lg"
                      : "bg-navy-custom text-white hover:bg-navy-900"
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sibling & Family Discounts Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-custom/10 to-teal-custom/5 rounded-3xl p-8 sm:p-10 border border-emerald-custom/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-emerald-custom bg-emerald-custom/10 px-3 py-1 rounded-full text-xs font-bold">
              <Gift className="h-4.5 w-4.5" />
              <span>Family Hadya Discount Packages</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-navy-custom">
              Enrolling multiple family members? Save 10% to 15%!
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
              We encourage homes that learn together. We apply a **10% sibling discount** for the 2nd student and a **15% family discount** for the 3rd or more concurrent students.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-navy-custom text-white font-bold text-xs hover:bg-navy-950 shadow-md transition-all shrink-0"
          >
            Request Family Quote
          </Link>
        </div>
      </section>

      {/* Safety & Guarantee items */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start space-x-4">
          <div className="p-3 bg-emerald-50 rounded-xl text-emerald-custom shrink-0">
            <ShieldCheck className="h-5 w-5 text-gold-custom" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-navy-custom">100% Satisfaction Guarantee</h4>
            <p className="text-xs text-gray-500 font-semibold leading-relaxed">
              If you are not satisfied with your assigned Quran teacher, we change the tutor immediately or refund any remaining fee.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-150/80 flex items-start space-x-4">
          <div className="p-3 bg-emerald-50 rounded-xl text-emerald-custom shrink-0">
            <Info className="h-5 w-5 text-gold-custom" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-navy-custom">No Hidden Charges</h4>
            <p className="text-xs text-gray-500 font-semibold leading-relaxed">
              Your billing fee covers all course textbooks, virtual materials, final evaluation tests, and digital certificates.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-150/80 flex items-start space-x-4">
          <div className="p-3 bg-emerald-50 rounded-xl text-emerald-custom shrink-0">
            <PhoneCall className="h-5 w-5 text-gold-custom" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-navy-custom">Custom Study Hours</h4>
            <p className="text-xs text-gray-500 font-semibold leading-relaxed">
              Need custom days (e.g. weekend-only) or longer sessions? Contact our admissions board for a bespoke billing quotation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

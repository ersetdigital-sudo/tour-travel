"use client";

import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";

export function MobileHero() {
  return (
    <section className="px-5 pt-2 pb-6">
      <p className="text-sm text-[#6B7280] mb-1">Hi, Explorer! 👋</p>
      <h1 className="text-2xl font-bold text-[#1A1A2E] leading-tight mb-5">
        Mau ke mana petualanganmu hari ini?
      </h1>

      <div className="flex items-center gap-3">
        <div className="flex-1 flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 border border-gray-100 shadow-sm">
          <Search size={18} className="text-[#6B7280] shrink-0" />
          <input
            type="text"
            placeholder="Cari destinasi, negara, atau tour..."
            className="flex-1 text-sm text-[#1A1A2E] placeholder:text-[#6B7280] bg-transparent outline-none"
          />
        </div>
        <button className="w-12 h-12 bg-[#1A6FE8] rounded-2xl flex items-center justify-center shrink-0 active:scale-95 transition-transform shadow-lg shadow-blue-200">
          <SlidersHorizontal size={18} className="text-white" />
        </button>
      </div>
    </section>
  );
}

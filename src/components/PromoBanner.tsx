"use client";

import React from "react";
import { promos } from "@/data/promos";
import { Tag, Copy } from "lucide-react";

export function PromoBanner() {
  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <section id="promo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Promo Spesial</h2>
          <p className="text-gray-500">Gunakan kode promo untuk diskon lebih besar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${promo.bgColor} p-6 text-white`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-8 -translate-x-8" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Tag size={18} />
                  <span className="text-sm font-medium opacity-90">{promo.title}</span>
                </div>

                <div className="text-4xl font-extrabold mb-2">
                  {promo.discount} <span className="text-lg font-medium">OFF</span>
                </div>

                <p className="text-sm opacity-90 mb-4">{promo.description}</p>

                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-center font-mono font-bold tracking-wider">
                    {promo.code}
                  </div>
                  <button
                    onClick={() => copyCode(promo.code)}
                    className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <Copy size={18} />
                  </button>
                </div>

                <p className="text-xs opacity-70 mt-3">Berlaku sampai {promo.validUntil}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

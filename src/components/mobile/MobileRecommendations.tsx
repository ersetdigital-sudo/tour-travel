"use client";

import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { getPopularDestinations } from "@/data/destinations";

export function MobileRecommendations() {
  const destinations = getPopularDestinations().slice(0, 5);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(price);

  return (
    <section className="pb-24">
      {/* Section Header */}
      <div className="flex items-center justify-between px-5 mb-4">
        <h2 className="text-lg font-semibold text-[#1A1A2E]">Rekomendasi untukmu</h2>
        <Link href="/#destinations" className="text-xs font-medium text-[#1A6FE8]">
          Lihat semua
        </Link>
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="flex gap-4 overflow-x-auto px-5 pb-3 snap-x snap-mandatory scrollbar-hide">
        {destinations.map((dest) => (
          <Link key={dest.id} href={`/destinasi/${dest.slug}`} className="snap-start shrink-0 w-[200px]">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 active:scale-[0.98] transition-transform">
              <div className="relative h-[130px]">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3.5">
                <h3 className="text-sm font-semibold text-[#1A1A2E] truncate">{dest.location}</h3>
                <p className="text-[11px] text-[#6B7280] mb-2">{dest.province}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-[#1A6FE8]">{formatPrice(dest.price)}</p>
                  <div className="flex items-center gap-0.5">
                    <Star size={11} className="fill-amber-400 text-amber-400" />
                    <span className="text-[10px] font-medium text-[#6B7280]">
                      {dest.rating} ({dest.reviewCount})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

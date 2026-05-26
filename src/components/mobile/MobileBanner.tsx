"use client";

import React, { useState } from "react";

const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    badge: "Diskon Spesial",
    title: "Bali, Indonesia",
    subtitle: "Hingga 30% untuk pemesanan sebelum 30 Juni!",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800&q=80",
    badge: "Promo Terbatas",
    title: "Raja Ampat",
    subtitle: "Diskon 25% untuk paket snorkeling & diving!",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?w=800&q=80",
    badge: "Hot Deal",
    title: "Labuan Bajo",
    subtitle: "Paket komplit mulai dari Rp 3.9jt/orang!",
  },
];

export function MobileBanner() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-5 pb-6">
      <div className="relative rounded-3xl overflow-hidden h-[200px] shadow-lg">
        <img
          src={banners[active].image}
          alt={banners[active].title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-[#1A6FE8] text-white text-[11px] font-semibold rounded-full">
            {banners[active].badge}
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-5 left-5 right-5">
          <h2 className="text-xl font-bold text-white mb-1">{banners[active].title}</h2>
          <p className="text-xs text-white/80 mb-3">{banners[active].subtitle}</p>
          <button className="px-5 py-2 bg-white text-[#1A1A2E] text-xs font-semibold rounded-full active:scale-95 transition-transform">
            Lihat Promo
          </button>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 ${
              i === active
                ? "w-6 h-2.5 bg-[#1A6FE8]"
                : "w-2.5 h-2.5 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

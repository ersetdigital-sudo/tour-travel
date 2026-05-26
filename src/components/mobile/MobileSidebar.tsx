"use client";

import React from "react";
import { X, MapPin, CreditCard, ShieldCheck, Plane } from "lucide-react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    icon: MapPin,
    iconBg: "bg-[#DBEAFE]",
    iconColor: "text-[#1A6FE8]",
    title: "Destinasi Terbaik",
    desc: "Temukan destinasi menakjubkan di seluruh dunia",
  },
  {
    icon: CreditCard,
    iconBg: "bg-[#EDE9FE]",
    iconColor: "text-[#8B5CF6]",
    title: "Pemesanan Mudah",
    desc: "Pesan tour dengan mudah dan aman",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-[#DCFCE7]",
    iconColor: "text-[#22C55E]",
    title: "Aman & Terpercaya",
    desc: "Layanan terpercaya untuk perjalanan tanpa khawatir",
  },
];

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <>
      {/* Overlay - fade in opacity 0 to 0.5 */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar - slide from left, 80% width */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[80%] max-w-[320px] bg-[#FFFFFF] z-50 flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button - pojok kanan atas, bg abu muda rounded-full */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-[#F3F4F6] active:scale-90 transition-transform z-10"
        >
          <X size={16} className="text-[#374151]" />
        </button>

        {/* Top Section - Logo & Branding */}
        <div className="px-6 pt-8 pb-4">
          <div className="flex items-center gap-3 mb-1.5">
            {/* Icon logo: kotak biru #1A6FE8 border-radius 12px, icon pesawat putih */}
            <div className="w-11 h-11 bg-[#1A6FE8] rounded-[12px] flex items-center justify-center">
              <Plane size={20} className="text-white" />
            </div>
            {/* Teks "octafkreasi" font bold 20px hitam */}
            <span className="text-[20px] font-bold text-black">octafkreasi</span>
          </div>
          {/* Tagline italic abu-abu di bawah nama */}
          <p className="text-[13px] text-[#9CA3AF] italic ml-[56px]">
            Explore the world, create your story.
          </p>
        </div>

        {/* Menu Items - jarak antar item ~32px */}
        <div className="flex-1 px-6 pt-6 space-y-[32px]">
          {menuItems.map((item) => (
            <button
              key={item.title}
              className="w-full flex items-start gap-4 text-left active:opacity-70 transition-opacity"
            >
              {/* Icon kotak rounded */}
              <div className={`w-12 h-12 ${item.iconBg} rounded-[12px] flex items-center justify-center shrink-0`}>
                <item.icon size={22} className={item.iconColor} />
              </div>
              <div className="pt-0.5">
                <p className="text-[15px] font-bold text-[#1A1A2E] leading-tight">{item.title}</p>
                <p className="text-[12px] text-[#6B7280] leading-relaxed mt-1.5">{item.desc}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom CTA Card - fixed/absolute bawah */}
        <div className="px-5 pb-8">
          <div className="relative bg-[#EEF4FF] rounded-[16px] p-[16px] overflow-hidden">
            {/* Dekorasi lingkaran biru muda transparan pojok kanan bawah */}
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-[#1A6FE8]/10 rounded-full" />

            {/* Emoji 🧳 pojok kiri bawah */}
            <span className="absolute bottom-3 left-4 text-[28px]">🧳</span>
            {/* Emoji 🌴 pojok kanan atas */}
            <span className="absolute top-3 right-4 text-[22px]">🌴</span>

            {/* Text content */}
            <div className="relative z-10 pr-10 pb-6">
              <p className="text-[14px] font-bold text-[#1A1A2E] mb-1">Siap untuk petualangan?</p>
              <p className="text-[11px] text-[#6B7280]">Jelajahi dunia bersama kami!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

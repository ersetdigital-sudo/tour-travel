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
    iconBg: "bg-blue-100",
    iconColor: "text-[#1A6FE8]",
    title: "Destinasi Terbaik",
    desc: "Temukan destinasi menakjubkan di seluruh dunia",
  },
  {
    icon: CreditCard,
    iconBg: "bg-purple-100",
    iconColor: "text-[#8B5CF6]",
    title: "Pemesanan Mudah",
    desc: "Pesan tour dengan mudah dan aman",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-green-100",
    iconColor: "text-[#22C55E]",
    title: "Aman & Terpercaya",
    desc: "Layanan terpercaya untuk perjalanan tanpa khawatir",
  },
];

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-white z-50 flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 active:scale-90 transition-transform"
        >
          <X size={16} className="text-[#1A1A2E]" />
        </button>

        {/* Logo */}
        <div className="px-6 pt-8 pb-6">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-9 h-9 bg-gradient-to-br from-[#1A6FE8] to-cyan-500 rounded-xl flex items-center justify-center">
              <Plane size={16} className="text-white" />
            </div>
            <span className="text-lg font-black text-[#1A1A2E]">octafkreasi</span>
          </div>
          <p className="text-xs text-[#6B7280] italic">Explore the world, create your story.</p>
        </div>

        {/* Menu Items */}
        <div className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.title}
              className="w-full flex items-start gap-3.5 p-4 rounded-2xl hover:bg-[#F0F4FF] transition-colors text-left active:scale-[0.98]"
            >
              <div className={`w-10 h-10 ${item.iconBg} rounded-xl flex items-center justify-center shrink-0`}>
                <item.icon size={18} className={item.iconColor} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A1A2E]">{item.title}</p>
                <p className="text-[11px] text-[#6B7280] leading-relaxed mt-0.5">{item.desc}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Illustration */}
        <div className="px-6 pb-8 pt-4">
          <div className="relative bg-gradient-to-br from-[#F0F4FF] to-blue-50 rounded-2xl p-5 overflow-hidden">
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-blue-200/30 rounded-full" />
            <div className="absolute top-2 right-4 text-2xl">🌴</div>
            <div className="text-4xl mb-2">🧳</div>
            <p className="text-xs font-medium text-[#1A1A2E]">Siap untuk petualangan?</p>
            <p className="text-[10px] text-[#6B7280]">Jelajahi dunia bersama kami!</p>
          </div>
        </div>
      </div>
    </>
  );
}

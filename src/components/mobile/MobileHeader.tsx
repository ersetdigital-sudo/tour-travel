"use client";

import React from "react";
import { Menu, Bell } from "lucide-react";

interface MobileHeaderProps {
  onMenuOpen: () => void;
}

export function MobileHeader({ onMenuOpen }: MobileHeaderProps) {
  return (
    <header className="flex items-center justify-between px-5 py-4 bg-white sticky top-0 z-40">
      <button
        onClick={onMenuOpen}
        className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F0F4FF] active:scale-95 transition-transform"
      >
        <Menu size={20} className="text-[#1A1A2E]" />
      </button>

      <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F0F4FF] relative active:scale-95 transition-transform">
        <Bell size={20} className="text-[#1A1A2E]" />
        <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
      </button>
    </header>
  );
}

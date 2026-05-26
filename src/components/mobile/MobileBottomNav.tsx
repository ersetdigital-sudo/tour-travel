"use client";

import React, { useState } from "react";
import { Home, Compass, CalendarDays, Heart, User } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: Compass, label: "Destinasi" },
  { icon: CalendarDays, label: "Booking" },
  { icon: Heart, label: "Favorit" },
  { icon: User, label: "Profil" },
];

export function MobileBottomNav() {
  const [active, setActive] = useState(0);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 px-2 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item, i) => (
          <button
            key={item.label}
            onClick={() => setActive(i)}
            className="flex flex-col items-center gap-1 py-1.5 px-3 rounded-xl transition-colors active:scale-90"
          >
            <item.icon
              size={20}
              className={i === active ? "text-[#1A6FE8]" : "text-[#6B7280]"}
              fill={i === active ? "currentColor" : "none"}
            />
            <span
              className={`text-[10px] font-medium ${
                i === active ? "text-[#1A6FE8]" : "text-[#6B7280]"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

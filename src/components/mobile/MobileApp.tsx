"use client";

import React, { useState } from "react";
import { MobileHeader } from "./MobileHeader";
import { MobileHero } from "./MobileHero";
import { MobileBanner } from "./MobileBanner";
import { MobileRecommendations } from "./MobileRecommendations";
import { MobileSidebar } from "./MobileSidebar";
import { MobileBottomNav } from "./MobileBottomNav";

export function MobileApp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F4FF]">
      <MobileHeader onMenuOpen={() => setSidebarOpen(true)} />
      <MobileHero />
      <MobileBanner />
      <MobileRecommendations />
      <MobileBottomNav />
      <MobileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
}

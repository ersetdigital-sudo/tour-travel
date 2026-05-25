"use client";

import React from "react";
import { Search, MapPin, Calendar, Users, Sparkles } from "lucide-react";
import { Button } from "./ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with mesh gradient */}
      <div className="absolute inset-0 bg-[#0a0f1a]" />
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-violet-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] bg-cyan-500/15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-10 shadow-[0_0_15px_rgba(56,189,248,0.1)]">
          <Sparkles size={14} className="text-amber-400" />
          <span className="text-white/80 text-sm font-medium tracking-wide">Liburan Murah Liburan Ceria</span>
          <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold rounded-full uppercase tracking-wider">New</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight">
          <span className="block">Explore</span>
          <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            Nusantara
          </span>
          <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white/60">
            Tanpa Batas.
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/50 mb-12 max-w-xl mx-auto leading-relaxed font-light">
          Destinasi premium, harga yang bersahabat. 
          <span className="text-white/80 font-medium"> Mulai petualanganmu sekarang.</span>
        </p>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 p-5 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 px-4 py-3.5 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 transition-colors cursor-pointer group">
              <MapPin className="text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" size={20} />
              <div className="text-left">
                <p className="text-[10px] text-white/40 uppercase tracking-wider font-medium">Destinasi</p>
                <p className="text-sm font-medium text-white/80">Mau kemana?</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3.5 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 transition-colors cursor-pointer group">
              <Calendar className="text-violet-400 shrink-0 group-hover:scale-110 transition-transform" size={20} />
              <div className="text-left">
                <p className="text-[10px] text-white/40 uppercase tracking-wider font-medium">Tanggal</p>
                <p className="text-sm font-medium text-white/80">Pilih tanggal</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3.5 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 transition-colors cursor-pointer group">
              <Users className="text-amber-400 shrink-0 group-hover:scale-110 transition-transform" size={20} />
              <div className="text-left">
                <p className="text-[10px] text-white/40 uppercase tracking-wider font-medium">Peserta</p>
                <p className="text-sm font-medium text-white/80">2 orang</p>
              </div>
            </div>

            <Button className="w-full gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border-0 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] rounded-2xl" size="lg">
              <Search size={18} />
              Cari
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 sm:gap-16 mt-16">
          {[
            { value: "500+", label: "Destinasi" },
            { value: "50K+", label: "Traveler Happy" },
            { value: "4.9", label: "Rating" },
            { value: "100%", label: "Terpercaya" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-4xl font-black text-white tracking-tight">{stat.value}</p>
              <p className="text-xs sm:text-sm text-white/40 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

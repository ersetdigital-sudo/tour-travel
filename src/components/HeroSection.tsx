"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Users, Plane, Sparkles } from "lucide-react";
import { Button } from "./ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/40 to-cyan-200/40 animate-blob opacity-60" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-violet-200/30 to-pink-200/30 animate-blob opacity-50" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-gradient-to-bl from-amber-100/40 to-orange-100/30 animate-blob opacity-40" style={{ animationDelay: "4s" }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[8%] sm:left-[15%] w-14 h-14 bg-white rounded-2xl shadow-lg shadow-blue-100 flex items-center justify-center"
        >
          <Plane className="text-blue-500" size={24} />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] right-[8%] sm:right-[12%] w-12 h-12 bg-white rounded-2xl shadow-lg shadow-emerald-100 flex items-center justify-center"
        >
          <span className="text-2xl">🏝️</span>
        </motion.div>
        <motion.div
          animate={{ y: [-8, 12, -8], rotate: [0, 3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[25%] left-[5%] sm:left-[10%] w-11 h-11 bg-white rounded-xl shadow-lg shadow-amber-100 flex items-center justify-center"
        >
          <span className="text-xl">⛰️</span>
        </motion.div>
        <motion.div
          animate={{ y: [5, -15, 5], rotate: [0, -3, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[30%] right-[5%] sm:right-[8%] w-12 h-12 bg-white rounded-2xl shadow-lg shadow-pink-100 flex items-center justify-center"
        >
          <span className="text-2xl">🌊</span>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center pt-20 pb-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 mb-8 shadow-sm"
        >
          <Sparkles size={14} className="text-amber-500" />
          <span className="text-blue-700 text-sm font-semibold">Liburan Murah Liburan Ceria</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
            2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-[1] tracking-tight"
        >
          <span className="block">Jelajahi</span>
          <span className="block mt-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
            Keajaiban
          </span>
          <span className="block mt-1">Nusantara</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed"
        >
          Destinasi premium dengan harga terjangkau.
          <span className="text-gray-800 font-semibold"> Mulai petualanganmu hari ini!</span>
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-blue-100/50 border border-gray-100 p-3 sm:p-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="flex items-center gap-3 px-4 py-3.5 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors cursor-pointer group">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <MapPin className="text-blue-600" size={18} />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Destinasi</p>
                <p className="text-sm font-semibold text-gray-700">Mau kemana?</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3.5 bg-gray-50 rounded-2xl hover:bg-violet-50 transition-colors cursor-pointer group">
              <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center group-hover:bg-violet-200 transition-colors">
                <Calendar className="text-violet-600" size={18} />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Tanggal</p>
                <p className="text-sm font-semibold text-gray-700">Pilih tanggal</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3.5 bg-gray-50 rounded-2xl hover:bg-amber-50 transition-colors cursor-pointer group">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                <Users className="text-amber-600" size={18} />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Peserta</p>
                <p className="text-sm font-semibold text-gray-700">2 orang</p>
              </div>
            </div>

            <Button className="w-full gap-2 rounded-2xl shadow-lg shadow-blue-200/50 hover:shadow-blue-300/60 hover:scale-[1.02] active:scale-[0.98] transition-all" size="lg">
              <Search size={18} />
              Cari Trip
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-14"
        >
          {[
            { value: "500+", label: "Destinasi", emoji: "📍" },
            { value: "50K+", label: "Traveler Happy", emoji: "😍" },
            { value: "4.9", label: "Rating", emoji: "⭐" },
            { value: "100%", label: "Terpercaya", emoji: "🛡️" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
              className="text-center bg-white/60 backdrop-blur-sm px-5 py-3 rounded-2xl border border-gray-100"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-base">{stat.emoji}</span>
                <p className="text-xl sm:text-2xl font-black text-gray-900">{stat.value}</p>
              </div>
              <p className="text-xs text-gray-500 mt-0.5 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

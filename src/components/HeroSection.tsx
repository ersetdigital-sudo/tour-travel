"use client";

import React from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "./ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium">Liburan Murah Liburan Ceria</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Jelajahi Keindahan
          <br />
          <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
            Indonesia
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Temukan destinasi impianmu dengan harga terjangkau. Dari pantai eksotis hingga
          gunung megah, semua ada di sini.
        </p>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
              <MapPin className="text-blue-600 shrink-0" size={20} />
              <div className="text-left">
                <p className="text-xs text-gray-500">Destinasi</p>
                <p className="text-sm font-medium text-gray-700">Mau kemana?</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
              <Calendar className="text-blue-600 shrink-0" size={20} />
              <div className="text-left">
                <p className="text-xs text-gray-500">Tanggal</p>
                <p className="text-sm font-medium text-gray-700">Pilih tanggal</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
              <Users className="text-blue-600 shrink-0" size={20} />
              <div className="text-left">
                <p className="text-xs text-gray-500">Peserta</p>
                <p className="text-sm font-medium text-gray-700">2 orang</p>
              </div>
            </div>

            <Button className="w-full gap-2" size="lg">
              <Search size={18} />
              Cari
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {[
            { value: "500+", label: "Destinasi" },
            { value: "50K+", label: "Traveler Happy" },
            { value: "4.9", label: "Rating" },
            { value: "100%", label: "Aman & Terpercaya" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-blue-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

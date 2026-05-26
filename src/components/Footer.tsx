"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                <MapPin className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="text-xl font-black text-white">octafkreasi</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-sm">
              Platform booking wisata terpercaya di Indonesia
              dengan harga terbaik dan pelayanan profesional.
            </p>
            <div className="flex items-center gap-3">
              {[Globe, Phone, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Destinasi</h4>
            <ul className="space-y-2.5 text-sm">
              {["Bali", "Raja Ampat", "Labuan Bajo", "Yogyakarta", "Bromo"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white hover:pl-1 transition-all">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-blue-400" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-blue-400" />
                <span>hello@octafkreasi.id</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-blue-400 mt-0.5" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-gray-500">
          <p className="flex items-center gap-1">
            &copy; 2026 octafkreasi. Made with <Heart size={12} className="text-red-400 fill-red-400" /> in Indonesia.
          </p>
          <p className="text-gray-600">Explore Nusantara</p>
        </div>
      </div>
    </footer>
  );
}

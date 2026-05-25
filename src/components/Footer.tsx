import React from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">octafkreasi</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-md">
              Liburan Murah Liburan Ceria. Platform booking wisata terpercaya di Indonesia
              dengan harga terbaik dan pelayanan profesional.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Phone size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Destinasi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Bali</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Raja Ampat</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Labuan Bajo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Yogyakarta</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bromo</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <span>hello@octafkreasi.id</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2026 octafkreasi. All rights reserved. Liburan Murah Liburan Ceria.</p>
        </div>
      </div>
    </footer>
  );
}

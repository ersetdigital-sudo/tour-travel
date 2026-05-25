"use client";

import React from "react";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";

export function CategoryIcons() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            Kategori Wisata
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">Pilih jenis liburan yang kamu inginkan</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.id}
              href={`/#${cat.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-2xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-100"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                {cat.icon}
              </div>
              <div className="text-center">
                <p className="text-xs sm:text-sm font-bold text-gray-700">
                  {cat.name}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">{cat.count} paket</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

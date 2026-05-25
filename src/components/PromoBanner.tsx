"use client";

import React from "react";
import { motion } from "framer-motion";
import { promos } from "@/data/promos";
import { Tag, Copy, CheckCircle2 } from "lucide-react";

export function PromoBanner() {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="promo" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            Promo Spesial 🎉
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">Gunakan kode promo untuk diskon lebih besar</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {promos.map((promo, i) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${promo.bgColor} p-6 sm:p-7 text-white shadow-xl cursor-pointer`}
            >
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-12 translate-x-12" />
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full translate-y-10 -translate-x-10" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Tag size={16} />
                  </div>
                  <span className="text-sm font-semibold opacity-90">{promo.title}</span>
                </div>

                <div className="text-5xl sm:text-6xl font-black mb-1">
                  {promo.discount}
                </div>
                <p className="text-sm font-medium opacity-80 uppercase tracking-wide mb-4">Discount</p>

                <p className="text-sm opacity-80 mb-5">{promo.description}</p>

                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2.5 text-center font-mono font-bold tracking-widest text-sm">
                    {promo.code}
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => copyCode(promo.code)}
                    className="p-2.5 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
                  >
                    {copied === promo.code ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                  </motion.button>
                </div>

                <p className="text-[11px] opacity-60 mt-4">Berlaku sampai {promo.validUntil}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

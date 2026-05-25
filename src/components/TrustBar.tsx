"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Headphones, CreditCard, RefreshCw } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Terjamin Aman",
    description: "Data & transaksi terenkripsi SSL",
    color: "bg-emerald-50 text-emerald-600",
    iconBg: "bg-emerald-100",
  },
  {
    icon: Headphones,
    title: "CS 24/7",
    description: "Siap bantu kapan saja",
    color: "bg-blue-50 text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    icon: CreditCard,
    title: "Bayar Mudah",
    description: "Banyak metode pembayaran",
    color: "bg-violet-50 text-violet-600",
    iconBg: "bg-violet-100",
  },
  {
    icon: RefreshCw,
    title: "Refund Cepat",
    description: "Proses refund mudah & transparan",
    color: "bg-amber-50 text-amber-600",
    iconBg: "bg-amber-100",
  },
];

export function TrustBar() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="flex items-start gap-4 p-5 sm:p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300"
            >
              <div className={`w-12 h-12 ${item.iconBg} rounded-2xl flex items-center justify-center shrink-0`}>
                <item.icon className={`w-5 h-5 ${item.color.split(" ")[1]}`} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

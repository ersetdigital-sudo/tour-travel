"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, Star, ArrowRight } from "lucide-react";
import { getPopularDestinations } from "@/data/destinations";
import { Badge } from "./ui/Badge";

export function PopularDestinations() {
  const destinations = getPopularDestinations();

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(price);

  return (
    <section id="destinations" className="py-16 sm:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              Destinasi Populer 🔥
            </h2>
            <p className="text-gray-500 text-base sm:text-lg">Pilihan terbaik dari traveler Indonesia</p>
          </div>
          <Link
            href="/#destinations"
            className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all mt-4 sm:mt-0"
          >
            Lihat Semua <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/destinasi/${dest.slug}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-100/40 overflow-hidden transition-shadow duration-300 group border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-52 sm:h-56 overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="danger">
                        -{Math.round(((dest.originalPrice - dest.price) / dest.originalPrice) * 100)}%
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-xl shadow-sm">
                      <Star size={13} className="fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold text-gray-800">{dest.rating}</span>
                    </div>
                    {/* Duration chip */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-sm">
                      <Clock size={12} className="text-gray-600" />
                      <span className="text-xs font-semibold text-gray-700">{dest.duration}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-2">
                      <MapPin size={12} />
                      <span>{dest.location}, {dest.province}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-5 line-clamp-2 leading-relaxed">{dest.description}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      <div>
                        <p className="text-xs text-gray-400 line-through">{formatPrice(dest.originalPrice)}</p>
                        <p className="text-lg sm:text-xl font-black text-blue-600">{formatPrice(dest.price)}</p>
                        <p className="text-[10px] text-gray-400 font-medium">/orang</p>
                      </div>
                      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-700 group-hover:scale-110 transition-all shadow-lg shadow-blue-200">
                        <ArrowRight size={18} className="text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

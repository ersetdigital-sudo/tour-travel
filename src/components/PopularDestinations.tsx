import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Star } from "lucide-react";
import { getPopularDestinations } from "@/data/destinations";
import { Badge } from "./ui/Badge";

export function PopularDestinations() {
  const destinations = getPopularDestinations();

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(price);

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Destinasi Populer</h2>
            <p className="text-gray-500">Pilihan terbaik dari traveler Indonesia</p>
          </div>
          <Link
            href="/#destinations"
            className="text-blue-600 font-semibold text-sm hover:underline mt-4 sm:mt-0"
          >
            Lihat Semua →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link key={dest.id} href={`/destinasi/${dest.slug}`}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="danger">
                      Hemat {Math.round(((dest.originalPrice - dest.price) / dest.originalPrice) * 100)}%
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                    <Star size={14} className="fill-amber-400 text-amber-400" />
                    <span className="text-sm font-semibold">{dest.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
                    <MapPin size={14} />
                    <span>{dest.location}, {dest.province}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{dest.description}</p>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Clock size={14} />
                    <span>{dest.duration}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-400 line-through">{formatPrice(dest.originalPrice)}</p>
                      <p className="text-lg font-bold text-blue-600">{formatPrice(dest.price)}</p>
                      <p className="text-xs text-gray-400">/orang</p>
                    </div>
                    <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors">
                      Booking
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

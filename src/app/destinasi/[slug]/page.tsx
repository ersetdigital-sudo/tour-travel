import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Star, Users, CheckCircle2, XCircle, ArrowLeft } from "lucide-react";
import { destinations, getDestinationBySlug } from "@/data/destinations";
import { getReviewsByDestination } from "@/data/reviews";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);

  if (!dest) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Destinasi tidak ditemukan</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  const reviews = getReviewsByDestination(dest.id);
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(price);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Gallery */}
      <section className="pt-16">
        <div className="relative h-[50vh] sm:h-[60vh]">
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <div className="max-w-7xl mx-auto">
              <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 text-sm">
                <ArrowLeft size={16} />
                Kembali
              </Link>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">{dest.name}</h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>{dest.location}, {dest.province}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-amber-400 text-amber-400" />
                  <span className="font-semibold">{dest.rating}</span>
                  <span className="text-white/70">({dest.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{dest.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Thumbnails */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {dest.gallery.map((img, i) => (
            <div key={i} className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 ring-2 ring-white shadow-md">
              <Image src={img} alt={`${dest.name} ${i + 1}`} fill className="object-cover" sizes="128px" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Destinasi</h2>
              <p className="text-gray-600 leading-relaxed">{dest.longDescription}</p>

              {/* Highlights */}
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Highlights</h3>
                <div className="flex flex-wrap gap-2">
                  {dest.highlights.map((h) => (
                    <Badge key={h} variant="info">{h}</Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Itinerary</h2>
              <div className="space-y-6">
                {dest.itinerary.map((item) => (
                  <div key={item.day} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                        D{item.day}
                      </div>
                      {item.day < dest.itinerary.length && (
                        <div className="w-0.5 h-full bg-blue-100 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Includes/Excludes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-600" size={20} />
                  Termasuk
                </h3>
                <ul className="space-y-2">
                  {dest.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <XCircle className="text-red-500" size={20} />
                  Tidak Termasuk
                </h3>
                <ul className="space-y-2">
                  {dest.excludes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <XCircle size={14} className="text-red-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Ulasan ({dest.reviewCount})
              </h2>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="flex gap-4 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        <span className="text-xs text-gray-400">{review.date}</span>
                      </div>
                      <StarRating rating={review.rating} size={14} showValue={false} />
                      <p className="text-sm text-gray-600 mt-2">{review.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="mb-4">
                <p className="text-sm text-gray-400 line-through">{formatPrice(dest.originalPrice)}</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-extrabold text-blue-600">{formatPrice(dest.price)}</p>
                  <span className="text-sm text-gray-500">/orang</span>
                </div>
                <Badge variant="danger" className="mt-2">
                  Hemat {formatPrice(dest.originalPrice - dest.price)}
                </Badge>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Clock size={18} className="text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Durasi</p>
                    <p className="text-sm font-medium">{dest.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Users size={18} className="text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Peserta</p>
                    <p className="text-sm font-medium">Min. 2 orang</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Star size={18} className="text-amber-400 fill-amber-400" />
                  <div>
                    <p className="text-xs text-gray-500">Rating</p>
                    <p className="text-sm font-medium">{dest.rating} / 5.0</p>
                  </div>
                </div>
              </div>

              <Link
                href={`/booking/1?dest=${dest.slug}`}
                className="block w-full py-4 bg-blue-600 text-white text-center font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
              >
                Booking Sekarang
              </Link>

              <p className="text-xs text-center text-gray-400 mt-3">
                Gratis pembatalan hingga 7 hari sebelum keberangkatan
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

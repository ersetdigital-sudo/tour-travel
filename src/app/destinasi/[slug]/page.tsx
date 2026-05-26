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
      {/* Desktop Header - hidden on mobile */}
      <div className="hidden md:block">
        <Header />
      </div>

      {/* Mobile Header - shown only on mobile */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F0F4FF] active:scale-95 transition-transform">
          <ArrowLeft size={20} className="text-[#1A1A2E]" />
        </Link>
        <h1 className="text-sm font-semibold text-[#1A1A2E] truncate max-w-[200px]">{dest.name}</h1>
        <div className="w-10" /> {/* Spacer for centering */}
      </header>

      {/* Hero Gallery */}
      <section className="pt-14 md:pt-16">
        <div className="relative h-[40vh] md:h-[60vh]">
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-10">
            <div className="max-w-7xl mx-auto">
              <Link href="/" className="hidden md:inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 text-sm">
                <ArrowLeft size={16} />
                Kembali
              </Link>
              <h1 className="text-2xl md:text-5xl font-extrabold text-white mb-2 md:mb-3">{dest.name}</h1>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base text-white/90">
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{dest.location}, {dest.province}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span className="font-semibold">{dest.rating}</span>
                  <span className="text-white/70">({dest.reviewCount})</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{dest.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Thumbnails */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">
        <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {dest.gallery.map((img, i) => (
            <div key={i} className="relative w-20 h-20 md:w-32 md:h-32 rounded-xl overflow-hidden shrink-0 ring-2 ring-white shadow-md">
              <Image src={img} alt={`${dest.name} ${i + 1}`} fill className="object-cover" sizes="128px" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-10 pb-28 md:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Description */}
            <div className="bg-white rounded-2xl p-5 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Tentang Destinasi</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{dest.longDescription}</p>

              {/* Highlights */}
              <div className="mt-5 md:mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Highlights</h3>
                <div className="flex flex-wrap gap-2">
                  {dest.highlights.map((h) => (
                    <Badge key={h} variant="info">{h}</Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl p-5 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Itinerary</h2>
              <div className="space-y-5 md:space-y-6">
                {dest.itinerary.map((item) => (
                  <div key={item.day} className="flex gap-3 md:gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs md:text-sm">
                        D{item.day}
                      </div>
                      {item.day < dest.itinerary.length && (
                        <div className="w-0.5 h-full bg-blue-100 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-4 md:pb-6">
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">{item.title}</h4>
                      <p className="text-xs md:text-sm text-gray-500 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Includes/Excludes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                  <CheckCircle2 className="text-emerald-600" size={18} />
                  Termasuk
                </h3>
                <ul className="space-y-2">
                  {dest.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                      <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                  <XCircle className="text-red-500" size={18} />
                  Tidak Termasuk
                </h3>
                <ul className="space-y-2">
                  {dest.excludes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                      <XCircle size={12} className="text-red-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl p-5 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Ulasan ({dest.reviewCount})
              </h2>
              <div className="space-y-5 md:space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="flex gap-3 md:gap-4 pb-5 md:pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="w-9 h-9 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xs md:text-sm shrink-0">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900 text-sm md:text-base">{review.name}</h4>
                        <span className="text-[10px] md:text-xs text-gray-400">{review.date}</span>
                      </div>
                      <StarRating rating={review.rating} size={14} showValue={false} />
                      <p className="text-xs md:text-sm text-gray-600 mt-2">{review.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar - HIDDEN on mobile, shown on lg+ */}
          <div className="hidden lg:block lg:col-span-1">
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

      {/* Mobile Sticky Bottom Booking Bar - shown only on mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-between gap-3 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-gray-400 line-through">{formatPrice(dest.originalPrice)}</p>
          <div className="flex items-baseline gap-1">
            <p className="text-lg font-extrabold text-blue-600">{formatPrice(dest.price)}</p>
            <span className="text-[10px] text-gray-500">/orang</span>
          </div>
        </div>
        <Link
          href={`/booking/1?dest=${dest.slug}`}
          className="px-6 py-3 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-600/25"
        >
          Booking Sekarang
        </Link>
      </div>

      {/* Footer - hidden on mobile for cleaner look */}
      <div className="hidden md:block">
        <Footer />
      </div>
    </main>
  );
}

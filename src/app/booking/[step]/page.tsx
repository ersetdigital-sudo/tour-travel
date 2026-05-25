"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Users, Calendar, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/Button";
import { destinations } from "@/data/destinations";

const steps = [
  { id: 1, label: "Jadwal & Paket" },
  { id: 2, label: "Data Peserta" },
  { id: 3, label: "Konfirmasi" },
];

function BookingContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const currentStep = parseInt(params.step as string) || 1;
  const destSlug = searchParams.get("dest") || "raja-ampat";
  const dest = destinations.find((d) => d.slug === destSlug) || destinations[0];

  const [formData, setFormData] = useState({
    date: "",
    guests: 2,
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(price);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-24 pb-16 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Back */}
        <Link href={`/destinasi/${dest.slug}`} className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 text-sm mb-8">
          <ArrowLeft size={16} />
          Kembali ke {dest.name}
        </Link>

        {/* Progress Stepper */}
        <div className="flex items-center justify-center mb-10">
          {steps.map((step, i) => (
            <React.Fragment key={step.id}>
              <div className="flex items-center gap-2">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${
                    currentStep > step.id
                      ? "bg-emerald-500 text-white"
                      : currentStep === step.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {currentStep > step.id ? <CheckCircle2 size={18} /> : step.id}
                </div>
                <span
                  className={`text-sm font-medium hidden sm:inline ${
                    currentStep >= step.id ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`w-12 sm:w-20 h-0.5 mx-2 ${
                    currentStep > step.id ? "bg-emerald-500" : "bg-gray-200"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Pilih Jadwal & Paket</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar size={16} className="inline mr-2" />
                      Tanggal Keberangkatan
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users size={16} className="inline mr-2" />
                      Jumlah Peserta
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setFormData({ ...formData, guests: Math.max(1, formData.guests - 1) })}
                        className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 text-lg font-bold"
                      >
                        -
                      </button>
                      <span className="text-xl font-bold w-12 text-center">{formData.guests}</span>
                      <button
                        onClick={() => setFormData({ ...formData, guests: Math.min(20, formData.guests + 1) })}
                        className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 text-lg font-bold"
                      >
                        +
                      </button>
                      <span className="text-sm text-gray-500">orang</span>
                    </div>
                  </div>

                  {/* Package Info */}
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <h3 className="font-semibold text-blue-900 mb-2">Paket {dest.name}</h3>
                    <p className="text-sm text-blue-700 mb-2">{dest.duration}</p>
                    <ul className="text-sm text-blue-600 space-y-1">
                      {dest.includes.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 size={14} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <Link href={`/booking/2?dest=${dest.slug}`}>
                    <Button className="gap-2">
                      Lanjut
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Data Peserta</h2>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Masukkan nama lengkap"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@contoh.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="08xxxxxxxxxx"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Catatan Khusus (opsional)</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Misal: alergi makanan, kebutuhan khusus, dll"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Link href={`/booking/1?dest=${dest.slug}`}>
                    <Button variant="outline" className="gap-2">
                      <ArrowLeft size={16} />
                      Kembali
                    </Button>
                  </Link>
                  <Link href={`/booking/3?dest=${dest.slug}`}>
                    <Button className="gap-2">
                      Lanjut
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Konfirmasi Booking</h2>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                      <MapPin size={14} />
                      Destinasi
                    </div>
                    <p className="font-semibold text-gray-900">{dest.name}</p>
                    <p className="text-sm text-gray-500">{dest.location}, {dest.province}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-sm text-gray-500 mb-1">Durasi</p>
                      <p className="font-semibold">{dest.duration}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-sm text-gray-500 mb-1">Peserta</p>
                      <p className="font-semibold">{formData.guests} orang</p>
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Total Pembayaran</span>
                      <span className="text-2xl font-extrabold text-emerald-600">
                        {formatPrice(dest.price * formData.guests)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Link href={`/booking/2?dest=${dest.slug}`}>
                    <Button variant="outline" className="gap-2">
                      <ArrowLeft size={16} />
                      Kembali
                    </Button>
                  </Link>
                  <Link href={`/pembayaran?dest=${dest.slug}&guests=${formData.guests}`}>
                    <Button variant="secondary" className="gap-2" size="lg">
                      Bayar Sekarang
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Ringkasan Booking</h3>

              <div className="w-full h-32 relative rounded-xl overflow-hidden mb-4">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
              </div>

              <h4 className="font-semibold text-gray-900">{dest.name}</h4>
              <p className="text-sm text-gray-500 mb-4">{dest.location}</p>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Durasi</span>
                  <span className="font-medium">{dest.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Harga/orang</span>
                  <span className="font-medium">{formatPrice(dest.price)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Peserta</span>
                  <span className="font-medium">{formData.guests} orang</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-bold text-blue-600">{formatPrice(dest.price * formData.guests)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
      <BookingContent />
    </Suspense>
  );
}

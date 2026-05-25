"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Clock, ShieldCheck, CheckCircle2, CreditCard, Landmark } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { destinations } from "@/data/destinations";
import { paymentMethods } from "@/data/payment-methods";

function PaymentContent() {
  const searchParams = useSearchParams();
  const destSlug = searchParams.get("dest") || "raja-ampat";
  const guests = parseInt(searchParams.get("guests") || "2");
  const dest = destinations.find((d) => d.slug === destSlug) || destinations[0];

  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(price);

  const totalPrice = dest.price * guests;
  const selectedPayment = paymentMethods.find((m) => m.id === selectedMethod);

  const bankTransfers = paymentMethods.filter((m) => m.type === "bank_transfer");
  const ewallets = paymentMethods.filter((m) => m.type === "ewallet");

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-24 pb-16 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Countdown */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-5 text-white mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Clock size={24} />
            <div>
              <p className="font-bold">Selesaikan pembayaran dalam</p>
              <p className="text-sm opacity-90">Booking akan otomatis dibatalkan setelah waktu habis</p>
            </div>
          </div>
          <div className="text-3xl font-mono font-extrabold bg-white/20 px-5 py-2 rounded-xl">
            {formatTime(timeLeft)}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Methods */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bank Transfer */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Landmark size={20} className="text-blue-600" />
                Transfer Bank
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {bankTransfers.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      selectedMethod === method.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-100 hover:border-blue-200"
                    }`}
                  >
                    <div className="text-xl mb-1">{method.icon}</div>
                    <p className="text-sm font-semibold text-gray-900">{method.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* E-Wallet */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CreditCard size={20} className="text-purple-600" />
                E-Wallet
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {ewallets.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      selectedMethod === method.id
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-100 hover:border-purple-200"
                    }`}
                  >
                    <div className="text-xl mb-1">{method.icon}</div>
                    <p className="text-sm font-semibold text-gray-900">{method.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Instructions */}
            {selectedPayment && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-blue-100">
                <h3 className="font-bold text-gray-900 mb-4">
                  Cara Pembayaran - {selectedPayment.name}
                </h3>
                <ol className="space-y-3">
                  {selectedPayment.instructions.map((inst, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600 shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-sm text-gray-600">{inst}</p>
                    </li>
                  ))}
                </ol>

                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">Total yang harus dibayar:</p>
                  <p className="text-2xl font-extrabold text-blue-600">{formatPrice(totalPrice)}</p>
                </div>

                <Button className="w-full mt-6" size="lg">
                  Konfirmasi Pembayaran
                </Button>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Ringkasan Pesanan</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Destinasi</span>
                    <span className="font-medium text-right">{dest.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Durasi</span>
                    <span className="font-medium">{dest.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Peserta</span>
                    <span className="font-medium">{guests} orang</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Harga/orang</span>
                    <span className="font-medium">{formatPrice(dest.price)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span className="font-bold text-gray-900">Total</span>
                      <span className="font-extrabold text-blue-600 text-lg">{formatPrice(totalPrice)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck size={20} className="text-emerald-600" />
                  <span className="text-sm font-semibold text-gray-700">Transaksi Aman</span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Data terenkripsi SSL 256-bit",
                    "Refund 100% jika dibatalkan",
                    "Customer service 24/7",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
      <PaymentContent />
    </Suspense>
  );
}

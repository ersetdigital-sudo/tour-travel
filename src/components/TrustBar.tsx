import React from "react";
import { ShieldCheck, Headphones, CreditCard, RefreshCw } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Terjamin Aman",
    description: "Data & transaksi terenkripsi",
  },
  {
    icon: Headphones,
    title: "CS 24/7",
    description: "Siap bantu kapan saja",
  },
  {
    icon: CreditCard,
    title: "Pembayaran Mudah",
    description: "Banyak metode pembayaran",
  },
  {
    icon: RefreshCw,
    title: "Refund Mudah",
    description: "Proses refund cepat & mudah",
  },
];

export function TrustBar() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

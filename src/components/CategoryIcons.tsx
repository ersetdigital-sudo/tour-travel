import React from "react";
import { categories } from "@/data/categories";

export function CategoryIcons() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Kategori Wisata</h2>
          <p className="text-gray-500">Pilih jenis liburan yang kamu inginkan</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/#${cat.id}`}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-blue-50 hover:shadow-md transition-all duration-200 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-gray-50 group-hover:bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:shadow-md transition-all">
                {cat.icon}
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-600">
                  {cat.name}
                </p>
                <p className="text-xs text-gray-400">{cat.count} paket</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

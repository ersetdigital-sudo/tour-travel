export interface Destination {
  id: string;
  slug: string;
  name: string;
  location: string;
  province: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  category: string;
  highlights: string[];
  duration: string;
  includes: string[];
  excludes: string[];
  itinerary: { day: number; title: string; description: string }[];
  mapUrl: string;
  popular: boolean;
}

export const destinations: Destination[] = [
  {
    id: "1",
    slug: "raja-ampat",
    name: "Raja Ampat Paradise",
    location: "Raja Ampat",
    province: "Papua Barat",
    description: "Surga bawah laut dengan keindahan terumbu karang terbaik di dunia",
    longDescription: "Raja Ampat adalah kepulauan yang terdiri dari empat pulau besar yaitu Waigeo, Batanta, Salawati, dan Misool. Terkenal dengan keanekaragaman hayati laut tertinggi di dunia dengan lebih dari 1.500 spesies ikan dan 600 spesies karang.",
    price: 4500000,
    originalPrice: 6000000,
    rating: 4.9,
    reviewCount: 328,
    image: "https://images.unsplash.com/photo-1570789210967-2cac24571b5b?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1570789210967-2cac24571b5b?w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80",
    ],
    category: "pantai",
    highlights: ["Snorkeling", "Diving", "Island Hopping", "Sunset View"],
    duration: "4 Hari 3 Malam",
    includes: ["Hotel Bintang 4", "Transportasi", "Guide Lokal", "Makan 3x Sehari", "Alat Snorkeling"],
    excludes: ["Tiket Pesawat", "Pengeluaran Pribadi", "Tips Guide"],
    itinerary: [
      { day: 1, title: "Kedatangan & Check-in", description: "Penjemputan di bandara, transfer ke resort, free time" },
      { day: 2, title: "Island Hopping", description: "Mengunjungi Pianemo, Teluk Kabui, dan spot snorkeling" },
      { day: 3, title: "Diving & Snorkeling", description: "Eksplorasi bawah laut di Manta Point dan Arborek" },
      { day: 4, title: "Sunrise & Departure", description: "Sunrise di Piaynemo, sarapan, transfer ke bandara" },
    ],
    mapUrl: "https://maps.google.com/?q=Raja+Ampat",
    popular: true,
  },
  {
    id: "2",
    slug: "bali-ubud",
    name: "Bali Ubud Cultural Tour",
    location: "Ubud, Bali",
    province: "Bali",
    description: "Eksplorasi budaya dan alam Ubud yang memukau dengan sawah terasering",
    longDescription: "Ubud adalah jantung budaya Bali, dikelilingi oleh sawah terasering hijau, hutan monyet, dan galeri seni. Nikmati ketenangan dan keindahan spiritual Bali yang sesungguhnya.",
    price: 2800000,
    originalPrice: 3500000,
    rating: 4.8,
    reviewCount: 512,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
      "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=800&q=80",
    ],
    category: "budaya",
    highlights: ["Tegallalang Rice Terrace", "Monkey Forest", "Pura Tirta Empul", "Art Market"],
    duration: "3 Hari 2 Malam",
    includes: ["Villa Private Pool", "Transportasi", "Guide Lokal", "Makan 2x Sehari"],
    excludes: ["Tiket Pesawat", "Tiket Masuk Wisata", "Pengeluaran Pribadi"],
    itinerary: [
      { day: 1, title: "Kedatangan & Ubud Center", description: "Check-in villa, eksplorasi Ubud Market & Monkey Forest" },
      { day: 2, title: "Rice Terrace & Temple", description: "Tegallalang, Tirta Empul, Kintamani Volcano View" },
      { day: 3, title: "Sunrise & Departure", description: "Yoga pagi, brunch, transfer ke bandara" },
    ],
    mapUrl: "https://maps.google.com/?q=Ubud+Bali",
    popular: true,
  },
  {
    id: "3",
    slug: "bromo-midnight",
    name: "Bromo Midnight Tour",
    location: "Probolinggo",
    province: "Jawa Timur",
    description: "Saksikan sunrise legendaris dari puncak Gunung Bromo",
    longDescription: "Gunung Bromo adalah salah satu destinasi wisata alam paling ikonik di Indonesia. Dengan ketinggian 2.329 mdpl, Bromo menawarkan pemandangan sunrise yang spektakuler dan lautan pasir yang luas.",
    price: 1200000,
    originalPrice: 1800000,
    rating: 4.7,
    reviewCount: 891,
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&q=80",
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80",
    ],
    category: "gunung",
    highlights: ["Sunrise Point", "Kawah Bromo", "Bukit Teletubbies", "Padang Savana"],
    duration: "2 Hari 1 Malam",
    includes: ["Jeep 4x4", "Guide Lokal", "Homestay", "Makan 2x"],
    excludes: ["Tiket Pesawat/Kereta", "Tiket Masuk Wisata", "Pengeluaran Pribadi"],
    itinerary: [
      { day: 1, title: "Perjalanan Malam", description: "Berkumpul jam 11 malam, perjalanan ke viewpoint" },
      { day: 2, title: "Sunrise & Eksplorasi", description: "Sunrise, kawah Bromo, savana, Bukit Teletubbies" },
    ],
    mapUrl: "https://maps.google.com/?q=Gunung+Bromo",
    popular: true,
  },
  {
    id: "4",
    slug: "labuan-bajo",
    name: "Labuan Bajo & Komodo",
    location: "Labuan Bajo",
    province: "NTT",
    description: "Petualangan ke habitat asli Komodo dan pantai-pantai eksotis",
    longDescription: "Labuan Bajo adalah gerbang menuju Taman Nasional Komodo. Nikmati pemandangan bukit-bukit yang indah, pantai pink yang langka, dan tentu saja bertemu langsung dengan komodo di habitat aslinya.",
    price: 5200000,
    originalPrice: 7000000,
    rating: 4.8,
    reviewCount: 267,
    image: "https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?w=800&q=80",
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80",
    ],
    category: "pantai",
    highlights: ["Komodo Island", "Pink Beach", "Padar Island", "Manta Point"],
    duration: "4 Hari 3 Malam",
    includes: ["Hotel Bintang 3", "Boat Trip", "Guide Ranger", "Makan 3x Sehari", "Alat Snorkeling"],
    excludes: ["Tiket Pesawat", "Pengeluaran Pribadi"],
    itinerary: [
      { day: 1, title: "Kedatangan", description: "Penjemputan, check-in hotel, free time" },
      { day: 2, title: "Pulau Komodo & Pink Beach", description: "Trekking dengan ranger, snorkeling di Pink Beach" },
      { day: 3, title: "Padar Island & Manta Point", description: "Hiking Padar sunrise, snorkeling Manta Point" },
      { day: 4, title: "Departure", description: "Sarapan, transfer ke bandara" },
    ],
    mapUrl: "https://maps.google.com/?q=Labuan+Bajo",
    popular: true,
  },
  {
    id: "5",
    slug: "yogyakarta-heritage",
    name: "Yogyakarta Heritage Trip",
    location: "Yogyakarta",
    province: "DI Yogyakarta",
    description: "Jelajahi warisan budaya dan kuliner legendaris Jogja",
    longDescription: "Yogyakarta adalah kota budaya yang kaya akan sejarah, seni, dan kuliner. Dari megahnya Candi Borobudur hingga keramaian Malioboro, Jogja menawarkan pengalaman tak terlupakan.",
    price: 1500000,
    originalPrice: 2000000,
    rating: 4.6,
    reviewCount: 1203,
    image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&q=80",
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80",
    ],
    category: "budaya",
    highlights: ["Borobudur", "Prambanan", "Malioboro", "Taman Sari"],
    duration: "3 Hari 2 Malam",
    includes: ["Hotel Bintang 3", "Transportasi", "Guide", "Makan 2x Sehari"],
    excludes: ["Tiket Pesawat/Kereta", "Tiket Masuk Wisata", "Pengeluaran Pribadi"],
    itinerary: [
      { day: 1, title: "Kedatangan & City Tour", description: "Check-in, Malioboro, Taman Sari, Kraton" },
      { day: 2, title: "Candi Tour", description: "Sunrise Borobudur, Prambanan sore hari" },
      { day: 3, title: "Kuliner & Departure", description: "Sarapan gudeg, oleh-oleh, transfer" },
    ],
    mapUrl: "https://maps.google.com/?q=Yogyakarta",
    popular: true,
  },
  {
    id: "6",
    slug: "nusa-penida",
    name: "Nusa Penida Adventure",
    location: "Nusa Penida",
    province: "Bali",
    description: "Pantai tersembunyi dan tebing dramatis di pulau eksotis",
    longDescription: "Nusa Penida menawarkan keindahan alam yang masih alami dengan tebing-tebing dramatis, pantai tersembunyi, dan spot foto instagramable yang menakjubkan.",
    price: 1800000,
    originalPrice: 2500000,
    rating: 4.7,
    reviewCount: 445,
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    ],
    category: "pantai",
    highlights: ["Kelingking Beach", "Angel Billabong", "Broken Beach", "Crystal Bay"],
    duration: "2 Hari 1 Malam",
    includes: ["Fast Boat", "Penginapan", "Motor + Driver", "Makan 2x"],
    excludes: ["Tiket Pesawat ke Bali", "Pengeluaran Pribadi"],
    itinerary: [
      { day: 1, title: "West Tour", description: "Kelingking Beach, Angel Billabong, Broken Beach, Crystal Bay" },
      { day: 2, title: "East Tour & Return", description: "Diamond Beach, Atuh Beach, Treehouse, return ke Bali" },
    ],
    mapUrl: "https://maps.google.com/?q=Nusa+Penida",
    popular: false,
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getPopularDestinations(): Destination[] {
  return destinations.filter((d) => d.popular);
}

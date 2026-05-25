export interface Review {
  id: string;
  destinationId: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export const reviews: Review[] = [
  {
    id: "1",
    destinationId: "1",
    name: "Budi Santoso",
    avatar: "BS",
    rating: 5,
    comment: "Pengalaman luar biasa! Raja Ampat memang surga dunia. Guide sangat ramah dan profesional. Pasti balik lagi!",
    date: "2026-03-15",
    helpful: 24,
  },
  {
    id: "2",
    destinationId: "1",
    name: "Sari Dewi",
    avatar: "SD",
    rating: 5,
    comment: "Worth every penny! Terumbu karangnya masih sangat indah. Foto-fotonya luar biasa semua. Recommended banget!",
    date: "2026-02-28",
    helpful: 18,
  },
  {
    id: "3",
    destinationId: "2",
    name: "Ahmad Rizki",
    avatar: "AR",
    rating: 4,
    comment: "Ubud memang cocok untuk healing. Villa-nya bagus, pemandangan sawah langsung dari balkon. Guide-nya juga asyik.",
    date: "2026-04-02",
    helpful: 12,
  },
  {
    id: "4",
    destinationId: "3",
    name: "Rina Marlina",
    avatar: "RM",
    rating: 5,
    comment: "Sunrise di Bromo itu emang beda. Walaupun dingin banget, tapi worth it! Jeepnya seru dan driver-nya berpengalaman.",
    date: "2026-01-20",
    helpful: 31,
  },
  {
    id: "5",
    destinationId: "4",
    name: "Dimas Pratama",
    avatar: "DP",
    rating: 5,
    comment: "Komodo keren banget! Snorkeling di Pink Beach airnya jernih. Ikan manta-nya juga keliatan. Amazing experience!",
    date: "2026-03-10",
    helpful: 27,
  },
  {
    id: "6",
    destinationId: "5",
    name: "Putri Ayu",
    avatar: "PA",
    rating: 4,
    comment: "Jogja selalu punya tempat di hati. Borobudur sunrise itu magical. Kulinernya juga juara semua!",
    date: "2026-04-15",
    helpful: 9,
  },
];

export function getReviewsByDestination(destinationId: string): Review[] {
  return reviews.filter((r) => r.destinationId === destinationId);
}

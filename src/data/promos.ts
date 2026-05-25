export interface Promo {
  id: string;
  title: string;
  description: string;
  discount: string;
  code: string;
  validUntil: string;
  bgColor: string;
}

export const promos: Promo[] = [
  {
    id: "1",
    title: "Early Bird Discount",
    description: "Booking 30 hari sebelum keberangkatan",
    discount: "25%",
    code: "EARLYBIRD25",
    validUntil: "2026-12-31",
    bgColor: "from-blue-600 to-cyan-500",
  },
  {
    id: "2",
    title: "Weekend Getaway",
    description: "Untuk paket weekend trip semua destinasi",
    discount: "15%",
    code: "WEEKEND15",
    validUntil: "2026-08-31",
    bgColor: "from-purple-600 to-pink-500",
  },
  {
    id: "3",
    title: "Group Discount",
    description: "Minimal 5 orang dalam 1 booking",
    discount: "30%",
    code: "GROUP30",
    validUntil: "2026-12-31",
    bgColor: "from-orange-500 to-red-500",
  },
];

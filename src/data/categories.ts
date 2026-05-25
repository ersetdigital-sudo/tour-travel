export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const categories: Category[] = [
  { id: "pantai", name: "Pantai", icon: "🏖️", count: 24 },
  { id: "gunung", name: "Gunung", icon: "⛰️", count: 18 },
  { id: "budaya", name: "Budaya", icon: "🏛️", count: 15 },
  { id: "kuliner", name: "Kuliner", icon: "🍜", count: 32 },
  { id: "adventure", name: "Adventure", icon: "🏄", count: 21 },
  { id: "religi", name: "Religi", icon: "🕌", count: 12 },
  { id: "diving", name: "Diving", icon: "🤿", count: 9 },
  { id: "camping", name: "Camping", icon: "⛺", count: 14 },
];

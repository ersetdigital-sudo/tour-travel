export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Destinasi", href: "/#destinations" },
  { label: "Promo", href: "/#promo" },
  { label: "Tentang Kami", href: "/#about" },
  { label: "Kontak", href: "/#contact" },
];

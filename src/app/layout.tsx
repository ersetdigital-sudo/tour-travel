import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "octafkreasi - Jelajahi Keajaiban Nusantara",
  description:
    "Platform booking wisata terpercaya di Indonesia. Temukan destinasi impianmu dengan harga terjangkau.",
  keywords: "travel, wisata, liburan, Indonesia, booking, tour",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

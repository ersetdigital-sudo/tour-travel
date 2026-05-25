import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoryIcons } from "@/components/CategoryIcons";
import { PopularDestinations } from "@/components/PopularDestinations";
import { PromoBanner } from "@/components/PromoBanner";
import { TrustBar } from "@/components/TrustBar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CategoryIcons />
      <PopularDestinations />
      <PromoBanner />
      <TrustBar />
      <Footer />
    </main>
  );
}

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoryIcons } from "@/components/CategoryIcons";
import { PopularDestinations } from "@/components/PopularDestinations";
import { PromoBanner } from "@/components/PromoBanner";
import { TrustBar } from "@/components/TrustBar";
import { Footer } from "@/components/Footer";
import { MobileApp } from "@/components/mobile/MobileApp";

export default function Home() {
  return (
    <>
      {/* Mobile Layout - only visible on screens <= 768px */}
      <div className="block md:hidden">
        <MobileApp />
      </div>

      {/* Desktop Layout - only visible on screens > 768px */}
      <main className="hidden md:block min-h-screen">
        <Header />
        <HeroSection />
        <CategoryIcons />
        <PopularDestinations />
        <PromoBanner />
        <TrustBar />
        <Footer />
      </main>
    </>
  );
}

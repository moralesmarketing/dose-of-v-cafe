import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FanFavorites from "@/components/FanFavorites";
import StorySplit from "@/components/StorySplit";
import LovedByEveryone from "@/components/LovedByEveryone";
import OrderSection from "@/components/OrderSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FanFavorites />
        <StorySplit />
        <LovedByEveryone />
        <OrderSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}

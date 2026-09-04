import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoStrip from "@/components/InfoStrip";
import About from "@/components/About";
import OrderSection from "@/components/OrderSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <InfoStrip />
        <About />
        <OrderSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}

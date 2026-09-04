import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuList from "@/components/MenuList";
import Reveal from "@/components/Reveal";
import { business, signatureLattes, fallMenu } from "@/lib/business";

export const metadata: Metadata = {
  title: "Menu | Dose of V Cafe",
  description: "Signature lattes and seasonal fall menu — Dose of V Cafe, Glendale, CA.",
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="px-6 pb-16 pt-20 text-center">
          <Reveal>
            <p className="eyebrow">Dose of V Cafe</p>
            <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">
              The Menu
            </h1>
            <p className="mx-auto mt-6 max-w-md text-ink-soft">
              {business.pricing}
            </p>
            <p className="mt-2 text-sm tracking-[0.08em] text-ink-soft">
              Milk options: {business.milkOptions.join(" · ")}
            </p>
          </Reveal>
        </section>

        <section className="px-6 pb-24">
          <Reveal className="text-center">
            <p className="eyebrow">Signature Lattes</p>
          </Reveal>
          <div className="mt-10">
            <MenuList items={signatureLattes} />
          </div>
        </section>

        <section className="bg-cream px-6 py-24">
          <Reveal className="text-center">
            <p className="eyebrow">Seasonal</p>
            <h2 className="mt-4 font-display text-4xl">Fall Menu</h2>
          </Reveal>
          <div className="mt-10">
            <MenuList items={fallMenu} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

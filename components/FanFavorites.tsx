import Image from "next/image";
import { business, fanFavorites } from "@/lib/business";
import Reveal from "./Reveal";

export default function FanFavorites() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="text-center">
        <p className="eyebrow">Signature Pours</p>
        <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
          Fan Favorites
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3">
        {fanFavorites.map((item, i) => (
          <Reveal key={item.name} delay={i * 100}>
            <div className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                {item.photo && (
                  <Image
                    src={item.photo}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <h3 className="mt-4 font-display text-xl">{item.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 text-center">
        <p className="eyebrow">{business.pricing}</p>
      </Reveal>
    </section>
  );
}

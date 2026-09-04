import { business, lovedByEveryoneClips } from "@/lib/business";
import Reveal from "./Reveal";

export default function LovedByEveryone() {
  return (
    <section id="loved" className="bg-espresso py-24 text-white">
      <Reveal className="text-center">
        <p className="eyebrow text-gold-soft">From Our Instagram</p>
        <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
          Loved by <span className="italic">everyone.</span>
        </h2>
      </Reveal>

      <Reveal delay={150} className="mx-auto mt-14 max-w-5xl px-6">
        <div className="columns-2 gap-4 sm:columns-3 [column-fill:_balance]">
          {lovedByEveryoneClips.map((src) => (
            <video
              key={src}
              className="mb-4 w-full break-inside-avoid align-top"
              src={src}
              autoPlay
              muted
              loop
              playsInline
            />
          ))}
        </div>
      </Reveal>

      <Reveal delay={300} className="mt-14 text-center">
        <a
          href={business.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn border-white/70 text-white hover:bg-white hover:text-ink"
        >
          Follow {business.instagram.handle} on Instagram
        </a>
      </Reveal>
    </section>
  );
}

import { business } from "@/lib/business";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">
        About the Cafe
      </p>
      <h2 className="mt-4 font-display text-3xl leading-tight text-espresso sm:text-4xl">
        A small cup, poured with care.
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
        {business.description}
      </p>
    </section>
  );
}

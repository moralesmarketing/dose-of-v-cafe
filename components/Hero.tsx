import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden bg-espresso pt-24 text-cream"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(184,97,63,0.35), transparent 45%), radial-gradient(circle at 85% 80%, rgba(243,230,213,0.15), transparent 50%)",
        }}
      />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-start px-6">
        <span className="mb-6 rounded-full border border-cream/25 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cream/80">
          {business.locationLabel}
        </span>
        <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Specialty coffee,
          <br />
          <span className="italic text-terracotta">made to order.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/75">
          {business.description}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#order"
            className="rounded-full bg-terracotta px-7 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-cream hover:text-espresso"
          >
            DM to Place an Order
          </a>
          <a
            href="#location"
            className="rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium tracking-wide text-cream/90 transition-colors hover:border-cream hover:text-cream"
          >
            Pickup in Glendale
          </a>
        </div>
      </div>
    </section>
  );
}

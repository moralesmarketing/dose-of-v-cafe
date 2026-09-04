import { business } from "@/lib/business";

export default function LocationSection() {
  return (
    <section id="location" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">
        Pickup Location
      </p>
      <h2 className="mt-4 font-display text-3xl leading-tight text-espresso sm:text-4xl">
        {business.locationLabel}
      </h2>
      <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-soft">
        The exact pickup spot is shared once your order and payment are
        confirmed by DM. {business.order.fulfillment} — no delivery.
      </p>
      <a
        href="#order"
        className="mt-8 inline-block rounded-full bg-espresso px-7 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-terracotta"
      >
        DM to Place an Order
      </a>
    </section>
  );
}

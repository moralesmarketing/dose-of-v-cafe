import { business } from "@/lib/business";
import Reveal from "./Reveal";

export default function LocationSection() {
  return (
    <section className="bg-cream px-6 py-24 text-center">
      <Reveal>
        <p className="eyebrow">Pickup Location</p>
        <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
          {business.locationLabel}
        </h2>
        <p className="mx-auto mt-6 max-w-md text-ink-soft leading-relaxed">
          The exact pickup spot is shared once your order and payment are
          confirmed by DM. {business.order.fulfillment} — no delivery.
        </p>
        <a
          href="#order"
          className="btn mt-8 border-ink text-ink hover:bg-ink hover:text-background"
        >
          DM to Place an Order
        </a>
      </Reveal>
    </section>
  );
}

import { business } from "@/lib/business";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Send a DM",
    body: "Message the cafe directly on Instagram to place your order — no app, no account, just a conversation.",
  },
  {
    n: "02",
    title: "Pay by Zelle or Cash",
    body: `Payment is simple: ${business.order.payment.join(" or ")}, confirmed before pickup.`,
  },
  {
    n: "03",
    title: "Pick It Up",
    body: `${business.order.fulfillment} in Glendale, CA — no delivery.`,
  },
];

export default function OrderSection() {
  return (
    <section id="order" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="text-center">
        <p className="eyebrow">How to Order</p>
        <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
          Ordering is simple.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-12 sm:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.n} delay={i * 120} className="text-center">
            <p className="font-display text-5xl text-gold">{step.n}</p>
            <h3 className="mt-4 font-display text-2xl">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {step.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

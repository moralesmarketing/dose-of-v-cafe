import { business } from "@/lib/business";

const steps = [
  {
    title: "1. Send a DM",
    body: "Message the cafe directly to place your order — no app, no account, just a conversation.",
  },
  {
    title: "2. Pay by Zelle or Cash",
    body: `Payment is simple: ${business.order.payment.join(" or ")}, confirmed before pickup.`,
  },
  {
    title: "3. Pick It Up",
    body: `${business.order.fulfillment} in ${business.locationLabel} — no delivery.`,
  },
];

export default function OrderSection() {
  return (
    <section id="order" className="bg-espresso py-24 text-cream">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">
            How to Order
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
            Ordering is simple.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-cream/15 bg-cream/5 p-7"
            >
              <h3 className="font-display text-xl text-cream">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { business } from "@/lib/business";

const items = [
  { label: "Location", value: business.locationLabel },
  { label: "Ordering", value: business.order.method },
  { label: "Payment", value: business.order.payment.join(" / ") },
  { label: "Fulfillment", value: business.order.fulfillment },
];

export default function InfoStrip() {
  return (
    <section className="border-b border-line bg-cream/60">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-8 px-6 py-10 sm:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="text-center sm:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-terracotta">
              {item.label}
            </p>
            <p className="mt-1.5 font-display text-lg text-espresso">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

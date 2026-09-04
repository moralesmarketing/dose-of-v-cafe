import { business } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-background py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-center">
        <p className="font-display text-lg text-espresso">{business.name}</p>
        <p className="text-sm text-ink-soft">
          {business.locationLabel} · {business.order.method} ·{" "}
          {business.order.payment.join(" / ")} · {business.order.fulfillment}
        </p>
        <p className="mt-4 text-xs text-ink-soft/70">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

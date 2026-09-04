import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-background py-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center">
        <Image
          src="/logo/logo-transparent.png"
          alt={business.name}
          width={56}
          height={56}
          className="h-14 w-14"
        />
        <p className="font-display text-xl">{business.name}</p>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm tracking-[0.08em]">
          <Link href="/menu" className="hover:text-gold transition-colors">
            Menu
          </Link>
          <a href="#order" className="hover:text-gold transition-colors">
            How to Order
          </a>
          <a
            href={business.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            {business.instagram.handle}
          </a>
        </nav>
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

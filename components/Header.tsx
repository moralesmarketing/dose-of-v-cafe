import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <nav className="hidden flex-1 items-center gap-8 text-sm tracking-[0.08em] sm:flex">
          <Link href="/menu" className="hover:text-gold transition-colors">
            Menu
          </Link>
          <Link href="/#loved" className="hover:text-gold transition-colors">
            Loved by Everyone
          </Link>
          <Link href="/#order" className="hover:text-gold transition-colors">
            How to Order
          </Link>
        </nav>

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/logo-transparent.png"
            alt={business.name}
            width={40}
            height={40}
            className="h-10 w-10"
            priority
          />
          <span className="font-display text-xl tracking-wide text-ink">
            Dose of V <span className="italic text-gold">Café</span>
          </span>
        </Link>

        <div className="flex flex-1 items-center justify-end gap-5">
          <a
            href={business.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm tracking-[0.08em] hover:text-gold transition-colors sm:inline"
          >
            Instagram
          </a>
          <a
            href={business.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-ink hover:bg-ink hover:text-background"
          >
            DM to Order
          </a>
        </div>
      </div>
    </header>
  );
}

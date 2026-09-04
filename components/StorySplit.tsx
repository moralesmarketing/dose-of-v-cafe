import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function StorySplit() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <Reveal className="relative aspect-[4/5] md:aspect-auto">
        <Image
          src="/photos/pumpkin-dose.jpg"
          alt="A Dose of V Cafe latte, poured to order"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </Reveal>

      <Reveal
        delay={150}
        className="flex flex-col items-start justify-center gap-6 bg-cream px-8 py-20 sm:px-16"
      >
        <p className="eyebrow">Small Batch, Made to Order</p>
        <h2 className="font-display text-4xl leading-tight sm:text-5xl">
          Every cup, poured
          <br />
          <span className="italic">just for you.</span>
        </h2>
        <p className="max-w-md text-ink-soft leading-relaxed">
          Dose of V Cafe is a small-batch specialty coffee shop pouring
          carefully sourced, thoughtfully brewed coffee in Glendale,
          California. There&rsquo;s no storefront and no app — every order
          starts with a DM and ends with a genuine cup made to order, ready
          for pickup.
        </p>
        <Link
          href="/menu"
          className="btn border-ink text-ink hover:bg-ink hover:text-background"
        >
          View Full Menu
        </Link>
      </Reveal>
    </section>
  );
}

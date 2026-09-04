import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-espresso">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/hero.mp4"
        poster="/video/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50" />

      <div className="relative flex flex-col items-center px-6 text-center text-white">
        <span className="eyebrow mb-6 text-white/80">Glendale, California</span>
        <h1 className="font-display text-[15vw] uppercase leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          Dose of V
          <br />
          <span className="italic normal-case text-gold-soft">Café</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-white/85">
          Small-batch specialty coffee, made to order. DM us, and pick it up
          fresh in Glendale.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#order"
            className="btn border-white bg-background text-ink hover:bg-transparent hover:text-white"
          >
            DM to Order
          </Link>
          <Link
            href="/menu"
            className="btn border-white/70 text-white hover:bg-white hover:text-ink"
          >
            View the Menu
          </Link>
        </div>
      </div>
    </section>
  );
}

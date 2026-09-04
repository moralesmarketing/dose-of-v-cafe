export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line/70 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg tracking-tight text-espresso">
          Dose of V <span className="italic text-terracotta">Cafe</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-soft sm:flex">
          <a href="#about" className="hover:text-espresso transition-colors">
            About
          </a>
          <a href="#order" className="hover:text-espresso transition-colors">
            Order
          </a>
          <a href="#location" className="hover:text-espresso transition-colors">
            Location
          </a>
        </nav>
        <a
          href="#order"
          className="rounded-full bg-espresso px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-terracotta"
        >
          DM to Order
        </a>
      </div>
    </header>
  );
}

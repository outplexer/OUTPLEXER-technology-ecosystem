const sectors = [
  {
    number: "01",
    name: "OUTPLEXER BANK",
    description: "Financial technology",
    status: "DEMO / PROTOTYPE",
  },
  {
    number: "02",
    name: "E-MOBILITY",
    description: "Electric mobility research",
    status: "RESEARCH",
  },
  {
    number: "03",
    name: "ENERGY",
    description: "Solar & energy systems",
    status: "RESEARCH",
  },
  {
    number: "04",
    name: "AEROSPACE",
    description: "Advanced aerospace concepts",
    status: "RESEARCH",
  },
  {
    number: "05",
    name: "OUTPLEXER WEAR",
    description: "Technology-inspired apparel",
    status: "ACTIVE",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVIGATION */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div className="text-lg font-semibold tracking-[0.35em]">
            OUTPLEXER
          </div>

          <div className="hidden gap-8 text-xs uppercase tracking-[0.2em] text-white/50 md:flex">
            <a href="#ecosystem" className="transition hover:text-white">
              Ecosystem
            </a>
            <a href="#sectors" className="transition hover:text-white">
              Sectors
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            OT / 001
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="ecosystem"
        className="relative flex min-h-[85vh] items-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(75,83,45,0.18),transparent_35%)]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <div className="mb-8 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-[#69724a]">
            <span className="h-px w-10 bg-[#69724a]" />
            Technology Ecosystem
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[110px]">
            ONE VISION.
            <br />
            <span className="text-white/40">MULTIPLE</span>
            <br />
            FRONTIERS.
          </h1>

          <div className="mt-12 max-w-xl border-l border-[#69724a]/50 pl-5">
            <p className="text-sm leading-7 text-white/55 sm:text-base">
              Building technologies across finance, energy, mobility,
              aerospace and advanced systems.
            </p>
          </div>

          <a
            href="#sectors"
            className="mt-12 inline-flex border border-white/20 px-7 py-4 text-xs uppercase tracking-[0.25em] transition duration-300 hover:border-[#69724a] hover:bg-[#69724a] hover:text-black"
          >
            Explore Ecosystem
          </a>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-3 lg:px-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#69724a]">
              Mission 001
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-2xl leading-relaxed tracking-tight text-white/80 sm:text-3xl">
              Different sectors.
              <br />
              One purpose.
              <br />
              <span className="text-white/40">
                Building what comes next.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section id="sectors" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-6">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#69724a]">
              01 — 05
            </p>

            <h2 className="text-3xl font-medium tracking-tight sm:text-5xl">
              The Ecosystem
            </h2>
          </div>

          <span className="hidden text-[10px] uppercase tracking-[0.25em] text-white/30 sm:block">
            Active Systems
          </span>
        </div>

        <div>
          {sectors.map((sector) => (
            <article
              key={sector.number}
              className="group grid gap-5 border-b border-white/10 py-8 transition hover:border-[#69724a]/50 md:grid-cols-[80px_1fr_auto] md:items-center"
            >
              <span className="text-xs text-white/25">
                {sector.number}
              </span>

              <div>
                <h3 className="text-xl font-medium tracking-tight transition group-hover:text-[#9aa66b] sm:text-2xl">
                  {sector.name}
                </h3>

                <p className="mt-2 text-sm text-white/40">
                  {sector.description}
                </p>
              </div>

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                {sector.status}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>
            <p className="text-sm font-semibold tracking-[0.3em]">
              OUTPLEXER
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/30">
              Technology beyond ordinary.
            </p>
          </div>

          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            © 2026 OUTPLEXER TECHNOLOGY ECOSYSTEM
          </p>
        </div>
      </footer>
    </main>
  );
}

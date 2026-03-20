export default function AboutSection() {
  return (
    <section id="about" className="pb-14 sm:pb-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-400 bg-clip-text text-transparent">
              Omar
            </span>
          </h2>
          <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">
            I like building systems that are both understandable and impactful.
            Clean UX, reliable data, and models you can trust.
          </p>
        </div>
        <div className="hidden sm:block rounded-2xl border border-zinc-200/70 bg-white/60 px-4 py-3 text-sm font-semibold text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
          Tip: hover cards for extra glow
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Product thinking",
            body: "I focus on outcomes: what the user needs, what the data says, and what to ship next.",
          },
          {
            title: "Data realism",
            body: "I treat data like a living thing—cleaning, validating, and communicating uncertainty.",
          },
          {
            title: "Creative execution",
            body: "From dashboards to Web3 demos, I like making tech feel visually satisfying.",
          },
        ].map((c) => (
          <div
            key={c.title}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/60 p-6 shadow-sm transition hover:-translate-y-1 hover:border-zinc-200 dark:border-white/10 dark:bg-white/5"
          >
            <div className="pointer-events-none absolute -left-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/10 blur-2xl transition group-hover:opacity-100 opacity-60" />
            <div className="relative">
              <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                Principle
              </p>
              <h3 className="mt-1 text-lg font-bold text-zinc-900 dark:text-zinc-50">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {c.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


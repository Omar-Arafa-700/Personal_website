import Image from "next/image";

import { EMAIL } from "./homeConstants";

export default function HeroSection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/60 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,185,129,0.8)]" />
            Available for freelance + collabs
          </div>

          <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            I build{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-400 bg-clip-text text-transparent">
                cool data products
              </span>
              <span className="pointer-events-none absolute left-0 top-full h-2 w-full bg-gradient-to-r from-indigo-500/40 via-fuchsia-500/30 to-emerald-400/20 blur-xl" />
            </span>
            <span className="block text-zinc-700 dark:text-zinc-200">
              and ship fast experiences.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">
            Hi, I&apos;m{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-50">
              Omar Arafa
            </span>{" "}
            — developer & data analyst. I turn messy data into decisions, and
            design interfaces that feel alive.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black"
            >
              Explore projects
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-white/20 dark:bg-black/5">
                <span className="text-lg leading-none">→</span>
              </span>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white/60 px-6 text-sm font-semibold text-zinc-900 transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-50"
            >
              Email me
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "Data Analysis",
              "Machine Learning",
              "Web Scraping",
              "Solana/Web3",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-200/70 bg-white/60 px-3 py-1 text-xs font-semibold text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(700px_circle_at_var(--spot-x)_var(--spot-y),rgba(99,102,241,0.35),transparent_60%)] opacity-90"
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200/70 bg-white/70 dark:border-white/10 dark:bg-white/5">
                  <Image src="/vercel.svg" alt="" width={20} height={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Currently
                  </p>
                  <p className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    Building polished portfolio experiences
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: "Focus", value: "Data → UI" },
                  { label: "Style", value: "Clean + fast" },
                  { label: "Mode", value: "Curious" },
                ].map((x) => (
                  <div
                    key={x.label}
                    className="rounded-2xl border border-zinc-200/60 bg-white/50 p-3 dark:border-white/10 dark:bg-white/5"
                  >
                    <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                      {x.label}
                    </p>
                    <p className="mt-1 text-sm font-bold text-zinc-900 dark:text-zinc-50">
                      {x.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-zinc-200/60 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    Signature stack
                  </p>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Live
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["React", "Next.js", "Tailwind", "Python/ML"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white/90 dark:bg-white dark:text-black"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              aria-hidden
              className="anim-shimmer pointer-events-none absolute -left-1/3 top-0 h-full w-2/3 rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-60"
              style={{ animation: "shimmer 3.2s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


import Image from "next/image";

import { projects } from "./projectsData";

export default function ProjectsSection() {
  return (
    <section id="projects" className="pb-14 sm:pb-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
            Projects
          </h2>
          <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">
            A mix of Web3 experiments and data-driven builds. Click any card to
            imagine the full case study.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href ?? "#projects"}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/60 p-6 shadow-sm transition hover:-translate-y-1 hover:border-zinc-300 dark:border-white/10 dark:bg-white/5"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(600px_circle_at_30%_0%,rgba(99,102,241,0.20),transparent_55%)] dark:bg-[radial-gradient(600px_circle_at_30%_0%,rgba(168,85,247,0.18),transparent_55%)]" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200/70 bg-white/70 dark:border-white/10 dark:bg-white/5">
                  <Image src={p.iconSrc} alt="" width={20} height={20} />
                </div>
                <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white/90 dark:bg-white dark:text-black">
                  Case study
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200/70 bg-white/50 px-3 py-1 text-xs font-semibold text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                <span className="text-zinc-600 dark:text-zinc-300">
                  See the story
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/70 bg-white/50 transition group-hover:bg-white dark:border-white/10 dark:bg-white/5">
                  <span className="text-lg">→</span>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}


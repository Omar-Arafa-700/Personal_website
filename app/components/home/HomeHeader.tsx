import Image from "next/image";

import { NAME } from "./homeConstants";

export default function HomeHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-zinc-50/70 backdrop-blur dark:border-white/10 dark:bg-black/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group inline-flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold outline-none ring-zinc-900/0 transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200/70 bg-white/60 dark:border-white/10 dark:bg-white/5">
            <Image src="/file.svg" alt="" width={18} height={18} />
          </span>
          <span className="hidden sm:inline">{NAME}</span>
        </a>

        <nav className="flex items-center gap-1">
          <a
            href="#projects"
            className="rounded-full px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-900/5 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-zinc-50"
          >
            Projects
          </a>
          <a
            href="#about"
            className="rounded-full px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-900/5 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-zinc-50"
          >
            About
          </a>
          <a
            href="#contact"
            className="rounded-full px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-900/5 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-zinc-50"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}


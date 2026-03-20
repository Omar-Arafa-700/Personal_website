"use client";

import { useState } from "react";

import { EMAIL } from "./homeConstants";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [contactStatus, setContactStatus] = useState<string | null>(null);

  async function onCopyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <section id="contact" className="pb-16">
      <div className="rounded-[2rem] border border-zinc-200/70 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-400 bg-clip-text text-transparent">
                awesome
              </span>
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              Send me a message and I&apos;ll get back to you. If you prefer,
              copy my email in one click.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={onCopyEmail}
                className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white/60 px-4 text-sm font-semibold text-zinc-900 transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-50"
              >
                {copied ? "Copied!" : "Copy email"}
              </button>

              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black"
              >
                Open email
              </a>
            </div>
          </div>

          <form
            className="w-full max-w-lg"
            onSubmit={(e) => {
              e.preventDefault();
              setContactStatus("Preparing email...");
              const fd = new FormData(e.currentTarget);
              const name = String(fd.get("name") ?? "").trim();
              const email = String(fd.get("email") ?? "").trim();
              const message = String(fd.get("message") ?? "").trim();

              const subject = `Portfolio inquiry${
                name ? ` from ${name}` : ""
              }`;
              const body = [
                "Hi Omar,",
                "",
                message || "I’d like to connect about a project.",
                "",
                name ? `Name: ${name}` : "",
                email ? `Reply to: ${email}` : "",
              ]
                .filter(Boolean)
                .join("\n");

              const href = `mailto:${EMAIL}?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(body)}`;
              window.location.href = href;
              setContactStatus("Opening your email client...");
            }}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                  Name
                </span>
                <input
                  name="name"
                  placeholder="Your name"
                  className="h-11 rounded-xl border border-zinc-200 bg-white/70 px-4 text-sm outline-none transition focus:border-indigo-400/70 focus:ring-2 focus:ring-indigo-400/20 dark:border-white/10 dark:bg-white/5"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                  Email
                </span>
                <input
                  name="email"
                  placeholder="you@domain.com"
                  type="email"
                  className="h-11 rounded-xl border border-zinc-200 bg-white/70 px-4 text-sm outline-none transition focus:border-indigo-400/70 focus:ring-2 focus:ring-indigo-400/20 dark:border-white/10 dark:bg-white/5"
                />
              </label>
            </div>

            <label className="mt-3 flex flex-col gap-2">
              <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                Message
              </span>
              <textarea
                name="message"
                placeholder="Tell me what you’re building…"
                rows={4}
                className="rounded-xl border border-zinc-200 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-indigo-400/70 focus:ring-2 focus:ring-indigo-400/20 dark:border-white/10 dark:bg-white/5"
              />
            </label>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black"
              >
                Send message
              </button>

              <div className="min-h-[1.25rem] text-right text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                {contactStatus ?? "No backend needed. It opens your email client."}
              </div>
            </div>
          </form>
        </div>
      </div>

      <footer className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-zinc-200/60 pt-6 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-300 sm:flex-row">
        <div className="font-semibold">© {new Date().getFullYear()} Omar Arafa</div>
        <div className="flex items-center gap-4">
          <a className="hover:underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <a className="hover:underline" href="#projects">
            Back to projects
          </a>
        </div>
      </footer>
    </section>
  );
}


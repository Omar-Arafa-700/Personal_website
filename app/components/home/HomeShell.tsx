"use client";

import { useEffect, useRef } from "react";

export default function HomeShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    let rafId = 0;
    const onMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        const x = Math.max(
          0,
          Math.min(100, (e.clientX / window.innerWidth) * 100)
        );
        const y = Math.max(
          0,
          Math.min(100, (e.clientY / window.innerHeight) * 100)
        );
        el.style.setProperty("--spot-x", `${x}%`);
        el.style.setProperty("--spot-y", `${y}%`);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen overflow-hidden bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50 [--spot-x:50%] [--spot-y:15%]"
    >
      <style>{`
        html { scroll-behavior: smooth; }

        @keyframes floatBlob {
          0% { transform: translate3d(0,0,0) scale(1); opacity: 0.85; }
          50% { transform: translate3d(0,-22px,0) scale(1.06); opacity: 1; }
          100% { transform: translate3d(0,0,0) scale(1); opacity: 0.85; }
        }

        .anim-float { animation: floatBlob 7.5s ease-in-out infinite; }

        @keyframes shimmer {
          0% { transform: translateX(-40%); opacity: 0; }
          10% { opacity: 1; }
          60% { opacity: 1; }
          100% { transform: translateX(40%); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .anim-float { animation: none !important; }
          .anim-shimmer { animation: none !important; }
          .anim-pulse-soft { animation: none !important; }
        }
      `}</style>

      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_var(--spot-x)_var(--spot-y),rgba(99,102,241,0.25),transparent_55%)] dark:bg-[radial-gradient(1100px_circle_at_var(--spot-x)_var(--spot-y),rgba(168,85,247,0.20),transparent_55%)]" />

        <div className="absolute inset-0 opacity-35 dark:opacity-20 [background-image:linear-gradient(to_right,rgba(2,6,23,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.12)_1px,transparent_1px)] [background-size:52px_52px]" />

        <div className="pointer-events-none absolute -top-24 left-8 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/35 to-fuchsia-400/10 blur-3xl anim-float" />
        <div
          className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-400/25 to-cyan-400/10 blur-3xl anim-float"
          style={{ animationDelay: "0.6s", animationDuration: "7.5s" }}
        />
        <div
          className="pointer-events-none absolute -bottom-28 left-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-sky-400/20 to-indigo-400/10 blur-3xl anim-float"
          style={{ animationDelay: "1.2s", animationDuration: "8.5s" }}
        />
      </div>

      {children}
    </div>
  );
}


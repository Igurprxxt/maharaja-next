"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PROGRESS_DURATION = 2200;
const HOLD_BEFORE_EXIT = 2600;
const EXIT_DURATION = 700;

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / PROGRESS_DURATION) * 100));
      setProgress(pct);
      if (elapsed < PROGRESS_DURATION) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const exitTimer = setTimeout(() => setExiting(true), HOLD_BEFORE_EXIT);
    const doneTimer = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = prevOverflow;
    }, HOLD_BEFORE_EXIT + EXIT_DURATION);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-royal-blue transition-opacity ease-in-out"
      style={{
        opacity: exiting ? 0 : 1,
        transitionDuration: `${EXIT_DURATION}ms`,
        pointerEvents: exiting ? "none" : "auto",
      }}
    >
      <div className="texture-mandala pointer-events-none absolute inset-0" />

      <div
        className="relative flex h-40 w-56 items-center justify-center opacity-0"
        style={{ animation: "ldRise 1s 0.1s cubic-bezier(0.16,1,0.3,1) forwards" }}
      >
        <span className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-gold/40" />
        <span className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-gold/40" />
        <Image
          src="/images/logo.png"
          alt="Maharaja Royal Bites"
          width={110}
          height={110}
          className="h-24 w-24 object-contain md:h-28 md:w-28"
          priority
        />
      </div>

      <div
        className="mt-9 h-px w-44 overflow-hidden bg-gold/10 opacity-0 sm:w-52"
        style={{ animation: "ldRise 0.6s 0.9s ease forwards" }}
      >
        <div
          className="h-full bg-gradient-to-r from-transparent via-gold to-transparent transition-[width] duration-150 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div
        className="mt-7 flex items-center gap-3 opacity-0 text-[10px] uppercase tracking-[0.4em] text-gold/45"
        style={{ animation: "ldRise 0.6s 1.2s ease forwards" }}
      >
        <span>Est.</span>
        <span className="h-1 w-1 rotate-45 bg-gold/40" />
        <span>Royal Heritage</span>
        <span className="h-1 w-1 rotate-45 bg-gold/40" />
        <span>Reno, NV</span>
      </div>

      <p
        className="mt-5 font-display text-xs tracking-[0.3em] text-cream/35 opacity-0"
        style={{ animation: "ldRise 0.6s 1.4s ease forwards" }}
      >
        {progress}%
      </p>
    </div>
  );
}

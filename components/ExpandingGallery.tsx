"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const PANELS = [
  { img: "/images/dining-1.jpg", title: "Dining Hall" },
  { img: "/images/ambience-2.jpg", title: "Royal Table" },
  { img: "/images/dining-2.jpg", title: "The Veranda" },
  { img: "/images/chef.jpg", title: "The Kitchen" },
  { img: "/images/ambience-3.jpg", title: "Al-Fresco" },
  { img: "/images/dining-3.jpg", title: "The Gallery" },
];

const AUTO_INTERVAL = 4200;

export default function ExpandingGallery() {
  const [active, setActive] = useState<number | null>(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setActive((prev) => ((prev ?? -1) + 1) % PANELS.length);
    }, AUTO_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  return (
    <section id="ambience" className="relative bg-royal-blue py-20 px-4 md:px-10 lg:px-16">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          <span className="h-px w-8 bg-gold" />
          The Royal Experience
          <span className="h-px w-8 bg-gold" />
        </p>
        <h2 className="font-display text-4xl text-cream sm:text-5xl">
          An Ambience Fit for <span className="text-gold">Royalty</span>
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div
          className="mx-auto flex h-[420px] max-w-7xl gap-2 md:h-[520px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {PANELS.map((p, i) => {
            const isActive = active === i;
            const isDimmed = active !== null && !isActive;
            return (
              <div
                key={p.title}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
                style={{
                  flexGrow: isActive ? 6 : isDimmed ? 0.6 : 1,
                  transitionDuration: "1200ms",
                }}
                className="group relative h-full cursor-pointer overflow-hidden rounded-sm outline-none transition-[flex-grow] ease-[cubic-bezier(0.65,0,0.35,1)]"
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 60vw, 30vw"
                  className={`object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
                    isDimmed ? "scale-105 brightness-[0.45] saturate-50" : "scale-100 brightness-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-royal-blue/90 via-royal-blue/10 to-transparent transition-opacity duration-[900ms] ${
                    isActive ? "opacity-100" : "opacity-60"
                  }`}
                />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <p
                    className={`font-display text-cream transition-all duration-[900ms] ${
                      isActive ? "text-xl md:text-2xl" : "text-sm md:text-base whitespace-nowrap"
                    }`}
                  >
                    {p.title}
                  </p>
                  <span
                    className={`mt-1 block h-px bg-gold transition-all duration-[900ms] ${
                      isActive ? "w-10 opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

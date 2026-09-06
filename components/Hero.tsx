"use client";

import { motion } from "framer-motion";

const STATS = [
  { n: "4.9★", l: "Guest Rating" },
  { n: "200+", l: "Years of Heritage" },
  { n: "11AM–10PM", l: "Open Daily" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden royal-gradient"
    >
      <motion.div
        initial={{ scale: 1.15, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/70 to-royal-blue/50" />
        <div className="absolute inset-0 bg-royal-blue/25" />
      </motion.div>

      <div className="texture-mandala pointer-events-none absolute inset-0" />

      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-[8vw] -left-[4vw] select-none font-display text-[42vw] leading-none text-cream/[0.04]"
      >
        M
      </span>

      <div className="relative z-10 flex h-full min-h-[100svh] flex-col justify-end px-6 pb-10 pt-8 sm:px-10 lg:px-16 lg:pt-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 lg:block"
        >
          <div
            className="flex items-center gap-5 text-[11px] uppercase tracking-[0.5em] text-gold/45"
            style={{ writingMode: "vertical-rl" }}
          >
            <span>Reno, Nevada</span>
            <span className="h-1 w-1 rotate-45 bg-gold/40" />
            <span>Royal Awadhi Cuisine</span>
          </div>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-display leading-[0.85] text-cream"
            >
              <span className="block text-2xl font-normal text-cream/70 sm:text-3xl">
                Maharaja
              </span>
              <span className="gold-gradient-text block text-6xl sm:text-7xl lg:text-[6.5rem]">
                Royal Bites
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75 }}
              className="mt-7 max-w-md text-base font-light leading-relaxed text-cream/80 sm:text-lg"
            >
              A geography of flavor curated over generations, served in the
              heart of Reno the way it was in the courts of Awadh.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#reserve"
                className="bg-gold px-11 py-4 text-xs font-bold uppercase tracking-[0.28em] text-royal-blue shadow-xl transition-all duration-400 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_8px_30px_rgba(212,175,55,0.3)]"
              >
                Reserve a Table
              </a>
              <a
                href="#menu"
                className="border border-cream/40 px-11 py-4 text-xs font-bold uppercase tracking-[0.28em] text-cream transition-all duration-400 hover:border-gold hover:bg-gold hover:text-royal-blue"
              >
                View Menu
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.15 }}
            className="flex shrink-0 flex-row gap-8 lg:flex-col lg:items-end lg:gap-6 lg:text-right"
          >
            {STATS.map((s) => (
              <div
                key={s.l}
                className="border-l border-gold/30 pl-4 lg:border-l-0 lg:border-r lg:pl-0 lg:pr-4"
              >
                <p className="font-display text-xl text-gold-light sm:text-2xl">
                  {s.n}
                </p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-cream/55">
                  {s.l}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

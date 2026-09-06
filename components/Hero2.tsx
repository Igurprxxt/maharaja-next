"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STATS = [
  { n: "200+", l: "Years of Heritage" },
  { n: "4.9★", l: "Guest Rating" },
  { n: "6", l: "Chef's Signatures" },
  { n: "11AM–10PM", l: "Open Daily" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden royal-gradient"
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
        <div className="absolute inset-0 bg-gradient-to-b from-royal-blue/80 via-royal-blue/70 to-royal-blue" />
        <div className="absolute inset-0 bg-royal-blue/30" />
      </motion.div>

      <div className="texture-mandala pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-1 flex-col items-center justify-center px-6 pb-28 pt-32 text-center sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold"
        >
          <span className="h-px w-8 bg-gold/60" />
          Established &middot; Royal Awadhi Heritage
          <span className="h-px w-8 bg-gold/60" />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          <Image
            src="/images/logo.png"
            alt="Maharaja Royal Bites"
            width={96}
            height={96}
            className="mx-auto mb-6 h-20 w-20 object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)] sm:h-24 sm:w-24"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl"
        >
          Maharaja <span className="gold-gradient-text">Royal Bites</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-6 max-w-xl text-base font-light leading-relaxed text-cream/85 sm:text-lg"
        >
          Royal Indian cuisine in the heart of Reno &mdash; a geography of flavor
          curated over generations, served the way it was in the courts of Awadh.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex items-center gap-3"
        >
          <span className="h-px w-14 bg-gold/40" />
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 rotate-45 bg-gold/50" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <span className="h-1 w-1 rotate-45 bg-gold/50" />
          </span>
          <span className="h-px w-14 bg-gold/40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#reserve"
            className="bg-gold px-12 py-4 text-xs font-bold uppercase tracking-[0.28em] text-royal-blue shadow-xl transition-all duration-400 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_8px_30px_rgba(212,175,55,0.3)]"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="border border-cream/40 px-12 py-4 text-xs font-bold uppercase tracking-[0.28em] text-cream transition-all duration-400 hover:border-gold hover:bg-gold hover:text-royal-blue"
          >
            View Menu
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.3 }}
        className="relative z-10 w-full border-t border-gold/15 bg-royal-blue/40 backdrop-blur-md"
      >
        <div className="mx-auto grid max-w-4xl grid-cols-2 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.l}
              className={`flex flex-col items-center gap-1 border-gold/10 px-4 py-6 text-center ${
                i % 2 === 0 ? "border-r sm:border-r-0" : ""
              } ${i < 2 ? "border-b sm:border-b-0" : ""} ${
                i > 0 ? "sm:border-l" : ""
              }`}
            >
              <span className="font-display text-xl text-gold-light sm:text-2xl">
                {s.n}
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-cream/55">
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

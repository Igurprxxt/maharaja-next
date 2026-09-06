import Image from "next/image";
import { Phone, Clock } from "lucide-react";
import Reveal from "./Reveal";

export default function ReservationCta() {
  return (
    <section id="reserve" className="relative overflow-hidden py-28 px-6 md:px-12 lg:px-24">
      <Image
        src="/images/reservation-bg.jpg"
        alt="Royal Indian banquet table"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-royal-blue/88" />
      <div className="texture-mandala pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Reservation
            <span className="h-px w-8 bg-gold" />
          </p>
          <h2 className="font-display text-4xl leading-tight text-cream sm:text-5xl">
            Your Royal Table <span className="text-gold">Awaits</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/75">
            Reserve ahead for weekends and special occasions &mdash; our royal
            dining hall fills quickly. Walk-ins are always welcome at the
            veranda.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <a
            href="tel:+17756223146"
            className="flex items-center gap-2 bg-gold px-12 py-4 text-xs font-bold uppercase tracking-[0.28em] text-royal-blue shadow-xl transition-all duration-400 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_8px_30px_rgba(212,175,55,0.3)]"
          >
            <Phone size={16} /> Call (775) 622-3146
          </a>
          <a
            href="#contact"
            className="border border-cream/40 px-12 py-4 text-xs font-bold uppercase tracking-[0.28em] text-cream transition-all duration-400 hover:border-gold hover:bg-gold hover:text-royal-blue"
          >
            Get Directions
          </a>
        </Reveal>

        <Reveal delay={0.25} className="mt-12 flex items-center justify-center gap-2 text-cream/60">
          <Clock size={15} className="text-gold" />
          <span className="text-sm">
            Open Daily &mdash; 11:00 AM to 10:00 PM
          </span>
        </Reveal>
      </div>
    </section>
  );
}

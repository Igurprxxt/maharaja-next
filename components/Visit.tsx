import Image from "next/image";
import { MapPin, Clock, Phone } from "lucide-react";
import Reveal from "./Reveal";

const BLOCKS = [
  {
    icon: MapPin,
    label: "Address",
    content: (
      <>
        Reno, NV 89502
        <br />
        <a
          href="https://www.google.com/maps/search/?api=1&query=Maharaja+Royal+Bites+Reno+NV"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-light transition-colors hover:text-gold"
        >
          &raquo; Directions
        </a>
      </>
    ),
  },
  {
    icon: Clock,
    label: "Hours",
    content: (
      <>
        Monday &ndash; Sunday
        <br />
        <strong className="font-semibold text-cream">11:00 AM &ndash; 10:00 PM</strong>
      </>
    ),
  },
  {
    icon: Phone,
    label: "Contact",
    content: (
      <a
        href="tel:+17756223146"
        className="text-[1.05rem] text-gold-light transition-colors hover:text-gold"
      >
        (775) 622-3146
      </a>
    ),
  },
];

export default function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden border-t border-gold/10">
      <Image
        src="/images/dining-2.jpg"
        alt=""
        fill
        className="object-cover brightness-[0.28] saturate-[0.65]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-royal-blue/70" />

      <div className="relative mx-auto grid max-w-7xl md:grid-cols-3">
        {BLOCKS.map((b, i) => (
          <Reveal
            key={b.label}
            delay={i * 0.1}
            className={`group relative overflow-hidden px-8 py-16 text-center transition-colors duration-500 hover:bg-gold/[0.03] sm:px-12 md:px-14 md:text-left ${
              i !== BLOCKS.length - 1
                ? "border-b border-gold/10 md:border-b-0 md:border-r"
                : ""
            }`}
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-gold via-gold-light to-transparent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
            <b.icon
              size={30}
              strokeWidth={1}
              className="mx-auto mb-7 text-gold/45 transition-colors duration-400 group-hover:text-gold-light md:mx-0"
            />
            <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.4em] text-gold/50">
              {b.label}
            </span>
            <div className="text-[15px] leading-relaxed text-cream/70">
              {b.content}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

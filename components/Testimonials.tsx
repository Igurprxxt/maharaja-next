import { Star } from "lucide-react";
import Reveal from "./Reveal";

const REVIEWS = [
  {
    quote:
      "From the moment we walked in, it felt like stepping into a maharaja's court. The Dum Biryani alone is worth the visit — easily the best Indian food in Reno.",
    name: "Sarah M.",
    role: "Google Review",
  },
  {
    quote:
      "Chef Ranbir's recreation of Awadhi royal cuisine is extraordinary. Every dish is plated like art and tastes even better than it looks.",
    name: "David R.",
    role: "OpenTable Review",
  },
  {
    quote:
      "We celebrated our anniversary here and it was flawless — attentive service, a stunning dining room, and desserts that ended the night perfectly.",
    name: "Priya K.",
    role: "Yelp Review",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="texture-jaali relative overflow-hidden bg-cream-dark py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="texture-corner pointer-events-none absolute left-0 top-0" />
      <div className="texture-corner pointer-events-none absolute bottom-0 right-0 rotate-180" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Royal Journal
            <span className="h-px w-8 bg-gold" />
          </p>
          <h2 className="font-display text-4xl text-royal-blue sm:text-5xl">
            Words From Our <span className="text-gold">Guests</span>
          </h2>
          <div className="divider-motif mx-auto mt-5 opacity-80" />

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="font-display text-xl text-royal-blue">4.9</span>
            <span className="text-xs uppercase tracking-[0.15em] text-royal-blue/45">
              &middot; 250+ Happy Guests
            </span>
          </div>
        </Reveal>

        <div className="relative mt-20 grid gap-16 md:grid-cols-3 md:gap-0">
          {REVIEWS.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 0.12}
              className={i !== 0 ? "md:border-l md:border-royal-blue/10" : ""}
            >
              <div className="group relative cursor-default px-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 md:px-10">
                <span className="pointer-events-none block select-none font-display text-6xl leading-none text-gold/25 transition-all duration-500 group-hover:scale-110 group-hover:text-gold/50">
                  &ldquo;
                </span>
                <p className="mt-1 font-display text-[1.35rem] italic leading-[1.5] text-royal-blue/85 transition-colors duration-500 group-hover:text-royal-blue">
                  {r.quote}
                </p>
                <span className="mt-7 block h-px w-10 bg-gold/50 transition-all duration-500 group-hover:w-16" />
                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.25em] text-royal-blue transition-colors duration-300 group-hover:text-gold">
                  {r.name}
                </p>
                <p className="mt-1 text-xs italic text-royal-blue/45">{r.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

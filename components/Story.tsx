import Image from "next/image";
import Reveal from "./Reveal";

const STATS = [
  { value: "200+", label: "Years of Culinary Heritage" },
  { value: "16th C.", label: "Recipes from the Ain-i-Akbari" },
  { value: "100%", label: "Small-Batch, Slow-Cooked" },
];

export default function Story() {
  return (
    <section id="story" className="texture-jaali relative bg-cream py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="texture-corner absolute -left-4 -top-4 -z-0" />
          <div className="relative overflow-hidden rounded-sm shadow-2xl">
            <Image
              src="/images/story.jpg"
              alt="Chef preparing royal Awadhi cuisine"
              width={800}
              height={1000}
              className="h-[480px] w-full object-cover md:h-[560px]"
            />
            <div className="absolute inset-0 border-[10px] border-cream/0 ring-1 ring-inset ring-gold/30" />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden w-56 rounded-sm border border-gold/25 bg-royal-blue p-5 shadow-xl sm:block">
            <p className="font-display text-3xl text-gold">Chef Ranbir Kapoor</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-cream/70">
              Trained in Lucknow&apos;s Royal Kitchens
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Our Story
          </p>
          <h2 className="font-display text-4xl leading-tight text-royal-blue sm:text-5xl">
            A Royal Heritage, Kept Alive Since the{" "}
            <span className="text-gold">Courts of Awadh</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-royal-blue/75">
            At Maharaja Royal Bites, we believe that true flavor is a form of
            poetry. Chef Ranbir Kapoor has dedicated his life to reviving
            long-lost recipes documented in the 16th-century imperial decree,
            the Ain-i-Akbari &mdash; honoring a 200-year-old culinary philosophy
            passed down through Lucknow&apos;s heritage culinary masters.
          </p>
          <p className="mt-4 text-base leading-relaxed text-royal-blue/75">
            The secret to royal Indian cuisine lies not in the heat of the
            chili, but in the harmony of aromatics. Every spice is carefully
            selected, every dish crafted with absolute devotion to the
            standards once reserved for royal tables.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-royal-blue/10 pt-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl text-royal-blue sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-royal-blue/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#menu"
            className="mt-10 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-semibold uppercase tracking-widest text-royal-blue transition-colors hover:text-gold"
          >
            Discover the Menu &rarr;
          </a>
        </Reveal>
      </div>
    </section>
  );
}

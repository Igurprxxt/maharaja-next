import Image from "next/image";
import Reveal from "./Reveal";

const GROUPS = [
  {
    label: "Starters",
    items: [
      {
        name: "Paneer Shaslik",
        note: "Vegetarian",
        desc: "Paneer cubes grilled with bell peppers and onions, finished tableside on royal-blue napkins.",
      },
    ],
  },
  {
    label: "Mains",
    items: [
      {
        name: "Royal Dum Biryani",
        note: "Chef's Signature",
        desc: "Fragrant basmati and tender meat sealed under a delicate layer of whole-wheat dough, slow-cooked in the dum style perfected in the kitchens of Awadh.",
      },
      {
        name: "Paneer Tikka Masala",
        note: "Vegetarian",
        desc: "Char-grilled cottage cheese simmered in a velvety curry of Kashmiri aromatics and slow-reduced tomato.",
      },
    ],
  },
  {
    label: "Breads",
    items: [
      {
        name: "Garlic Butter Naan",
        note: "Tandoor Fresh",
        desc: "Hand-stretched leavened flatbread brushed with organic butter and chopped garlic.",
      },
    ],
  },
  {
    label: "Desserts",
    items: [
      {
        name: "Royal Kheer",
        note: "Chilled",
        desc: "Creamy rice pudding garnished with toasted almonds and silver leaves, finished with Kashmiri Kahwa.",
      },
      {
        name: "Dessert Fritters",
        note: "Sweet",
        desc: "Sweet pastries dusted with powdered sugar and orange zest, from the Maharaja Dessert Boutique.",
      },
    ],
  },
];

export default function SignatureMenu() {
  return (
    <section
      id="menu"
      className="texture-paisley relative overflow-hidden bg-royal-blue px-6 pb-24 pt-8 md:px-14 md:pb-28 md:pt-16"
    >

      <div className="relative mx-auto grid max-w-[1300px] items-start gap-16 md:grid-cols-2 md:gap-32">
        <Reveal>
          <p className="mb-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.42em] text-gold">
            <span className="h-px w-[22px] bg-gold" />
            The Royal Kitchen
          </p>
          <h2 className="font-display text-[2.2rem] leading-[0.95] text-cream md:text-[2.6rem]">
            Signature <span className="text-gold">Dishes.</span>
          </h2>
          <p className="mb-12 mt-6 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-gold/40">
            <span className="h-px w-[18px] bg-gold" />
            Recipes by Chef Ranbir Kapoor
          </p>

          <div className="border-t border-gold/10">
            {GROUPS.map((g) => (
              <div key={g.label}>
                <div className="flex items-center gap-3 pb-3 pt-9 text-[10px] font-medium uppercase tracking-[0.28em] text-gold/55 first:pt-5">
                  {g.label}
                  <span className="h-px flex-1 bg-gold/15" />
                </div>
                {g.items.map((item) => (
                  <div
                    key={item.name}
                    className="group grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-gold/10 py-5 transition-[padding] duration-300 hover:pl-2.5"
                  >
                    <div>
                      <div className="font-sans text-xl text-cream transition-colors duration-300 group-hover:text-gold-light">
                        {item.name}
                      </div>
                      <p className="mt-1.5 text-[13px] italic leading-relaxed text-cream/40">
                        {item.desc}
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-sm font-light text-gold-light">
                      {item.note}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-11 flex flex-wrap items-center gap-5">
            <a
              href="#reserve"
              className="inline-block bg-gold px-10 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-royal-blue transition-all duration-400 hover:-translate-y-0.5 hover:bg-gold-light"
            >
              Explore the Full Menu
            </a>
            <span className="text-xs italic text-cream/30">
              Full à la carte, tasting menus &amp; royal teas
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:sticky md:top-24">
          <div className="relative aspect-video overflow-hidden md:aspect-[4/5]">
            <Image
              src="/images/dish-1.jpg"
              alt="Royal Dum Biryani"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-[18px] border border-gold/15" />
          </div>
          <p className="mt-6 border-t border-gold/10 pt-6 text-[13px] italic leading-relaxed text-cream/40">
            The Royal Dum Biryani &mdash; sealed under dough and slow-cooked the
            way it was in the kitchens of Awadh, finished tableside.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

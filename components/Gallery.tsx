import Image from "next/image";
import Reveal from "./Reveal";

const CELLS = [
  { cls: "hero-cell", img: "/images/ambience-1.jpg", alt: "An evening at Maharaja Royal Bites" },
  { cls: "sm1", img: "/images/dish-2.jpg", alt: "Paneer Tikka Masala, plated" },
  { cls: "sm2", img: "/images/dessert.jpg", alt: "Royal Kheer dessert" },
  { cls: "sm3", img: "/images/dish-3.jpg", alt: "Paneer Shaslik, tableside" },
  { cls: "sm4", img: "/images/dish-4.jpg", alt: "Garlic butter naan from the tandoor" },
  { cls: "wide1", img: "/images/dining-1.jpg", alt: "Guests inside the Maharaja Dining Hall" },
  { cls: "wide2", img: "/images/hero.jpg", alt: "The Maharaja Royal Bites dining room" },
];

export default function Gallery() {
  return (
    <section id="royal-gallery" className="relative overflow-hidden bg-[#0d1b31] pt-32">
      <Reveal className="px-6 pb-20 md:px-14">
        <p className="mb-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.42em] text-gold">
          <span className="h-px w-[22px] bg-gold" />
          The Gallery
        </p>
        <h2 className="font-display text-[2.2rem] leading-[0.95] text-cream md:text-[2.6rem]">
          An Evening at
          <br />
          <span className="text-gold">Maharaja Royal Bites</span>
        </h2>
      </Reveal>

      <div className="gallery-grid">
        {CELLS.map((c) => (
          <div key={c.cls} className={`g-cell ${c.cls}`}>
            <Image
              src={c.img}
              alt={c.alt}
              fill
              className="object-cover"
              sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 40vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

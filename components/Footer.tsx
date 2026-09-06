import Image from "next/image";

const NAV = [
  { href: "#story", label: "Our Story" },
  { href: "#menu", label: "Menu" },
  { href: "#ambience", label: "Ambience" },
  { href: "#royal-gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
  { href: "#reserve", label: "Reservation" },
];

export default function Footer() {
  return (
    <footer id="contact" className="flex flex-col items-center gap-8 border-t border-gold/10 bg-royal-blue px-6 py-16 text-center sm:py-20">
      <Image
        src="/images/logo.png"
        alt="Maharaja Royal Bites"
        width={80}
        height={80}
        className="h-20 w-20 object-contain opacity-80"
      />

      <nav className="flex flex-wrap items-center justify-center gap-x-9 gap-y-3">
        {NAV.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className="text-[11px] uppercase tracking-[0.22em] text-gold-light transition-colors hover:text-cream"
          >
            {n.label}
          </a>
        ))}
      </nav>

      <p className="text-[11px] tracking-[0.08em] text-cream/35">
        &copy; {new Date().getFullYear()} Maharaja Royal Bites &middot; All Rights Reserved
      </p>
    </footer>
  );
}

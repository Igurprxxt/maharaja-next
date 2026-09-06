"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const LINKS = [
  { href: "#story", label: "Our Story" },
  { href: "#menu", label: "Menu" },
  { href: "#ambience", label: "Ambience" },
  { href: "#royal-gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-royal-blue/95 backdrop-blur-md shadow-lg py-3"
          : "bg-gradient-to-b from-royal-blue/70 via-royal-blue/20 to-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <Link href="#top" className="flex items-center group">
          <Image
            src="/images/logo.png"
            alt="Maharaja Royal Bites"
            width={64}
            height={64}
            className="h-14 w-14 md:h-16 md:w-16 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="underline-grow text-sm font-medium tracking-wide text-cream/90 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+17756223146"
            className="flex items-center gap-2 text-sm text-cream/90 hover:text-gold transition-colors"
          >
            <Phone size={15} className="text-gold" />
            (775) 622-3146
          </a>
          <a
            href="#reserve"
            className="border border-gold/40 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.22em] text-gold transition-all duration-300 hover:bg-gold hover:text-royal-blue"
          >
            Reserve a Table
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-cream"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="royal-gradient mx-6 mt-4 flex flex-col gap-5 border border-gold/20 px-6 py-6 shadow-xl">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream/90 hover:text-gold text-base font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#reserve"
            onClick={() => setOpen(false)}
            className="mt-2 bg-gold px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.22em] text-royal-blue"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#impact", label: "Impact" },
  { href: "#sound", label: "Sound" },
  { href: "#insulation", label: "Insulation" },
  { href: "#shield", label: "Shield" },
  { href: "#durability", label: "Durability" },
  { href: "#disruption", label: "Disruption" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[rgba(11,15,20,0.7)] backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/brand/rboard-new-logo.png"
            alt="R-Board logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full border border-white/10"
            priority
          />
          <span className="text-sm font-semibold tracking-wide">R-Board®</span>
        </a>
        <div className="nav-scroll flex items-center gap-4 overflow-x-auto pb-1 text-sm font-medium tracking-wide text-[var(--text-muted)] md:pb-0 md:text-xs">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition hover:text-[var(--text-primary)]"
            >
              {link.label}
            </a>
          ))}
          <a href="#cta" className="btn-primary whitespace-nowrap text-[0.75rem]">
            Partner with us
          </a>
        </div>
      </div>
    </nav>
  );
}

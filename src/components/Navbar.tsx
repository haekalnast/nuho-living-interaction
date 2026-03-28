"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Rooms", href: "#rooms" },
  { label: "Experience", href: "#experience" },
  { label: "Guides", href: "#guides" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="flex items-center justify-between px-6 lg:px-10 py-6 h-[80px] lg:h-[100px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo-nuho.svg"
            alt="NUHO"
            width={80}
            height={25}
            className="h-6 w-auto"
          />
          <Image
            src="/images/logo-living.svg"
            alt="Living"
            width={84}
            height={25}
            className="h-6 w-auto"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base text-black hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center justify-end min-w-[180px]">
          <Button variant="secondary" href="#contact">
            Book Your Stay
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${mobileOpen ? "max-h-[400px] border-t border-neutral-300" : "max-h-0"}`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base text-black py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="secondary"
            href="#contact"
            className="mt-2 w-full text-center"
          >
            Book Your Stay
          </Button>
        </div>
      </div>
    </header>
  );
}

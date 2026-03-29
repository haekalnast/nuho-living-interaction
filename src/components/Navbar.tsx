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
      <nav className="flex h-[80px] items-center justify-between px-4 py-6 sm:px-6 lg:h-[100px] lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo-nuho.svg"
            alt="NUHO"
            width={80}
            height={25}
            className="h-6 w-auto"
            unoptimized
          />
          <Image
            src="/images/logo-living.svg"
            alt="Living"
            width={84}
            height={25}
            className="h-6 w-auto"
            unoptimized
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base text-neutral-500 hover:text-neutral-500 active:text-neutral-500 relative group leading-6"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-neutral-500 transition-all duration-300 group-hover:w-full group-active:w-full" />
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
        <div className="flex flex-col gap-4 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base text-neutral-500 py-2 leading-6"
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

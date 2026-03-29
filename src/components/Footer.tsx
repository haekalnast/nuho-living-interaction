import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_HREF } from "@/constants/contact";

const footerLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Rooms", href: "#rooms" },
  { label: "Experience", href: "#experience" },
  { label: "Guides", href: "#guides" },
  { label: "Contact Us", href: "#contact" },
];

const socialLinks = [
  {
    icon: "/images/icon-instagram.svg",
    label: "Instagram",
    href: "https://www.instagram.com/nuho.living/",
  },
  {
    icon: "/images/icon-whatsapp.svg",
    label: "WhatsApp",
    href: WHATSAPP_HREF,
  },
  {
    icon: "/images/icon-google.svg",
    label: "Google",
    href: "https://www.google.com/search?q=nuho%20living%20bali",
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-white px-4 py-10 sm:px-6 lg:px-10"
    >
      <div className="bg-neutral-200 rounded-[20px] p-6 lg:p-8 flex flex-col lg:flex-row gap-8 lg:gap-6 lg:items-end">
        {/* Left column */}
        <div className="flex flex-col gap-8 flex-1">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
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

          {/* Contact info */}
          <div className="flex flex-col gap-2">
            <p className="text-base leading-6 text-secondary-300">
              Jl. Pantai Bingin No.10, Pecatu, Kec. Kuta Sel., Kabupaten
              Badung, Bali 80361
            </p>
            <a
              href="tel:+628991828448"
              className="text-base leading-6 text-secondary-300 hover:text-black transition-colors"
            >
              +628991828448
            </a>
            <a
              href="mailto:nuhogroup@gmail.com"
              className="text-base leading-6 text-secondary-300 hover:text-black transition-colors"
            >
              nuhogroup@gmail.com
            </a>
          </div>

          {/* Copyright */}
          <p className="text-base leading-6 text-secondary-300 font-light">
            &copy; 2026 Nuho Living Project All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex gap-6 items-center">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex size-10 shrink-0 items-center justify-center rounded-full p-2 transition-colors duration-200 hover:bg-primary-100"
                aria-label={social.label}
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6"
                  unoptimized
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right column - nav links */}
        <div className="flex flex-wrap gap-6 lg:gap-12 items-center">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base leading-6 text-black hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

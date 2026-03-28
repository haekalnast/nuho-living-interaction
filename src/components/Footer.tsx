import Image from "next/image";
import Link from "next/link";

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
    href: "https://instagram.com",
  },
  {
    icon: "/images/icon-whatsapp.svg",
    label: "WhatsApp",
    href: "https://wa.me/628991828448",
  },
  {
    icon: "/images/icon-google.svg",
    label: "Google",
    href: "https://google.com",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-white px-6 lg:px-10 py-10">
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
            />
            <Image
              src="/images/logo-living.svg"
              alt="Living"
              width={84}
              height={25}
              className="h-6 w-auto"
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
                className="w-10 h-10 rounded-full border border-transparent hover:border-black/10 flex items-center justify-center transition-all"
                aria-label={social.label}
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={22}
                  height={22}
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

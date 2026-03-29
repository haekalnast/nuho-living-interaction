import Image from "next/image";
import { WHATSAPP_HREF } from "@/constants/contact";

/**
 * Floating “Contact Us” — WhatsApp (Figma: label ~461-126084, icon ~461-126085).
 * Fill secondary/300, text & icon neutral/100.
 */
export default function FloatingContactButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed right-4 z-40 inline-flex items-center gap-2 rounded-full bg-secondary-300 px-4 py-3 text-base font-normal leading-6 text-neutral-100 shadow-[0_4px_24px_rgba(0,0,0,0.12)] transition-colors duration-200 hover:bg-secondary-100 active:bg-secondary-500 sm:right-6 sm:px-5 motion-reduce:transition-none bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))]"
    >
      <Image
        src="/images/icon-whatsapp-neutral-100.svg"
        alt=""
        width={22}
        height={22}
        className="size-[22px] shrink-0"
        unoptimized
      />
      <span>Contact Us</span>
    </a>
  );
}

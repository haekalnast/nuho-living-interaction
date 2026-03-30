export const SITE_NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Rooms", href: "/#rooms" },
  { label: "Experience", href: "/#experience" },
  { label: "Guides", href: "/#guides" },
  { label: "Contact Us", href: "#contact" },
] as const;

export function isNavLinkActive(
  href: string,
  pathname: string,
  hash: string,
): boolean {
  if (href === "/about") return pathname === "/about";
  if (href.startsWith("/#")) {
    return pathname === "/" && hash === href.slice(1);
  }
  if (href.startsWith("#")) {
    return hash === href;
  }
  return false;
}

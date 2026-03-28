"use client";

import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary" | "nav";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  variant = "primary",
  children,
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-4 rounded-lg text-base font-normal transition-all duration-200 whitespace-nowrap";

  const variants = {
    primary:
      "bg-primary text-white border border-primary hover:bg-primary-dark",
    secondary:
      "bg-transparent text-black border border-black hover:bg-neutral-300",
    nav: "bg-transparent text-black border border-black hover:bg-neutral-300",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

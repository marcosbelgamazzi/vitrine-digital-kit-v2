"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { track } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "ghost" | "light";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-brand-violet to-brand-blue text-brand-white shadow-lg shadow-brand-violet/25 hover:shadow-xl hover:shadow-brand-violet/35",
  secondary:
    "border border-brand-navy/15 bg-white/60 text-brand-navy backdrop-blur hover:border-brand-navy/30 hover:bg-white",
  ghost: "text-brand-navy hover:bg-brand-navy/5",
  /** Botão contornado para fundos escuros. */
  light:
    "border border-brand-white/20 bg-brand-white/5 text-brand-white backdrop-blur hover:border-brand-white/40 hover:bg-brand-white/10",
};

type Size = "md" | "lg";

const sizeClasses: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const baseClasses =
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue disabled:pointer-events-none disabled:opacity-50 disabled:hover:translate-y-0";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Mostra uma seta que avança no hover. */
  arrow?: boolean;
};

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

function Decorations({ variant, arrow }: { variant: Variant; arrow?: boolean }) {
  return (
    <>
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shine bg-gradient-to-r from-transparent via-white/25 to-transparent"
        />
      )}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
        />
      )}
    </>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  arrow,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, onClick, children, ...rest } = props;
    return (
      <Link
        href={href}
        className={classes}
        onClick={(e) => {
          track("cta_click", { href });
          onClick?.(e);
        }}
        {...rest}
      >
        <span className="relative">{children}</span>
        <Decorations variant={variant} arrow={arrow} />
      </Link>
    );
  }

  const { children, ...rest } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...rest}>
      <span className="relative">{children}</span>
      <Decorations variant={variant} arrow={arrow} />
    </button>
  );
}

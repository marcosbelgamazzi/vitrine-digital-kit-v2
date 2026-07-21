"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { track } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-brand-violet to-brand-blue text-brand-white hover:opacity-90",
  secondary:
    "border border-brand-navy/15 text-brand-navy hover:bg-brand-navy/5",
  ghost: "text-brand-navy hover:bg-brand-navy/5",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue disabled:pointer-events-none disabled:opacity-50";

type CommonProps = {
  variant?: Variant;
  className?: string;
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

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, onClick, ...rest } = props;
    return (
      <Link
        href={href}
        className={classes}
        onClick={(e) => {
          track("cta_click", { href });
          onClick?.(e);
        }}
        {...rest}
      />
    );
  }

  const { ...rest } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button className={classes} {...rest} />;
}

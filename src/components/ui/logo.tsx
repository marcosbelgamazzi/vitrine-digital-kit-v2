import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

/**
 * Logo oficial (kit de marca). tone descreve o fundo em que a logo é
 * aplicada: "dark" usa a versão com texto claro (logo-horizontal.svg),
 * "light" (padrão) usa a versão com texto navy (logo-horizontal-dark.svg).
 */
const sizeClasses = {
  sm: "h-8 w-auto sm:h-9",
  md: "h-12 w-auto sm:h-14",
};

export function Logo({
  className = "",
  tone = "light",
  size = "sm",
}: {
  className?: string;
  tone?: "light" | "dark";
  size?: "sm" | "md";
}) {
  const src =
    tone === "dark"
      ? "/brand/logo-horizontal.svg"
      : "/brand/logo-horizontal-dark.svg";

  return (
    <Link
      href="/"
      className={`flex items-center ${className}`}
      aria-label={siteConfig.name}
    >
      <Image
        src={src}
        alt={siteConfig.name}
        width={175}
        height={40}
        priority
        className={sizeClasses[size]}
      />
    </Link>
  );
}

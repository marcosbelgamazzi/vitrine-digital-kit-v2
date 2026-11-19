"use client";

import { useRef, type ReactNode } from "react";

/**
 * Envolve um botão e o desloca levemente em direção ao cursor
 * ("efeito magnético"). Só reage a mouse; teclado e toque não mudam nada.
 */
export function MagneticButton({
  children,
  strength = 0.25,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function reset() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <div
      ref={ref}
      className={`inline-flex transition-transform duration-300 ease-out ${className}`}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse" || !ref.current) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const rect = ref.current.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      }}
      onPointerLeave={reset}
    >
      {children}
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

/**
 * Luz suave que acompanha o cursor dentro da seção pai. Fica atrás do
 * conteúdo (aria-hidden) e não faz nada em telas de toque.
 */
export function PointerGlow({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = ref.current;
    const parent = glow?.parentElement;
    if (!glow || !parent) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = parent.getBoundingClientRect();
        glow.style.setProperty("--gx", `${event.clientX - rect.left}px`);
        glow.style.setProperty("--gy", `${event.clientY - rect.top}px`);
        glow.style.opacity = "1";
      });
    };
    const onLeave = () => {
      glow.style.opacity = "0";
    };

    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ${className}`}
      style={{
        background:
          "radial-gradient(520px circle at var(--gx, 50%) var(--gy, 50%), rgb(108 60 255 / 0.18), transparent 60%)",
      }}
    />
  );
}

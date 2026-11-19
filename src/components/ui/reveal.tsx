"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  /** Atraso em ms antes de revelar, para criar um efeito de cascata entre itens de uma lista. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let timeout = 0;
    // Revela assim que a borda superior do bloco entra na tela (sem esperar
    // uma porcentagem dele aparecer). Isso evita "buracos" em branco ao rolar
    // no celular, onde os blocos são altos.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeout = window.setTimeout(() => setVisible(true), Math.min(delay, 120));
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px 10% 0px" }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

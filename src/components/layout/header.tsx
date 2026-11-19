"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { mainNav } from "@/lib/nav";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(window.scrollY > 12);
        setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Trava a rolagem da página enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        scrolled || open
          ? "border-brand-white/10 bg-brand-navy/85 shadow-2xl shadow-brand-navy/30 backdrop-blur-xl"
          : "border-transparent bg-brand-navy"
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-white focus:px-4 focus:py-2 focus:text-sm focus:text-brand-navy"
      >
        Pular para o conteúdo
      </a>

      <Container
        className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <div onClickCapture={() => setOpen(false)}>
          <Logo tone="dark" size="md" />
        </div>

        <nav
          className="hidden items-center gap-0.5 rounded-full border border-brand-white/10 bg-brand-white/[0.04] p-1 xl:flex"
          aria-label="Principal"
        >
          {mainNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-brand-white text-brand-navy shadow-sm"
                    : "text-brand-white/70 hover:bg-brand-white/10 hover:text-brand-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <Button href="/orcamento?origem=header" arrow>
            Quero meu site
          </Button>
        </div>

        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-brand-white/15 text-brand-white xl:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </Container>

      {/* Progresso de leitura da página */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-brand-violet via-brand-blue to-brand-coral"
        style={{ transform: `scaleX(${progress})` }}
      />

      <nav
        id="mobile-menu"
        aria-label="Principal (mobile)"
        inert={!open}
        className={`absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto bg-brand-navy transition-all duration-500 xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
        <Container className="relative flex min-h-full flex-col gap-1 py-8">
          {mainNav.map((item, index) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                style={{ transitionDelay: open ? `${80 + index * 45}ms` : "0ms" }}
                className={`flex items-center justify-between border-b border-brand-white/10 py-4 text-2xl font-semibold transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } ${active ? "text-brand-white" : "text-brand-white/60"}`}
              >
                {item.label}
                <span className="text-xs font-medium text-brand-white/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            );
          })}
          <Button
            href="/orcamento?origem=header-mobile"
            size="lg"
            className="mt-8 justify-center"
            arrow
          >
            Quero meu site
          </Button>
        </Container>
      </nav>
    </header>
  );
}

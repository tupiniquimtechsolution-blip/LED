import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { business } from "../config/business";
import { cn, scrollToId } from "../lib/utils";
import Logo from "./Logo";

const NAV = [
  { id: "solucoes", label: "Soluções" },
  { id: "pixels", label: "Experiência Pixel" },
  { id: "projetos", label: "Projetos" },
  { id: "empresa", label: "Empresa" },
  { id: "contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      window.location.hash = "#/";
      window.setTimeout(() => scrollToId(id), 80);
    } else {
      scrollToId(id);
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[90] transition-all duration-500",
          scrolled || open
            ? "border-b border-line/80 bg-night-950/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => go("topo")}
            aria-label="P1LED — voltar ao topo"
            className="transition-transform duration-300 hover:scale-[1.04]"
          >
            <Logo />
          </button>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="group relative font-mono text-[0.72rem] uppercase tracking-[0.22em] text-dim transition-colors duration-300 hover:text-ink"
              >
                {n.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-volt-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => go("configurador")}
              className="btn btn-ember hidden !px-4 !py-2.5 sm:inline-flex"
            >
              Orçamento
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="relative flex h-11 w-11 flex-col items-center justify-center gap-[7px] border border-line bg-night-900/60 transition-colors hover:border-volt-400/60"
            >
              <span
                className={cn(
                  "h-[2px] w-5 bg-ink transition-all duration-300",
                  open && "translate-y-[4.5px] rotate-45 bg-volt-400",
                )}
              />
              <span
                className={cn(
                  "h-[2px] w-5 bg-ink transition-all duration-300",
                  open && "-translate-y-[4.5px] -rotate-45 bg-volt-400",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Menu overlay animado */}
      <div
        className={cn(
          "fixed inset-0 z-[95] flex flex-col bg-night-950 transition-[clip-path] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        style={{ clipPath: open ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)" }}
        aria-hidden={!open}
      >
        <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(700px_400px_at_80%_10%,rgba(63,220,255,0.12),transparent_60%),radial-gradient(600px_400px_at_10%_90%,rgba(247,155,30,0.08),transparent_60%)]" />
        <div className="flex h-[72px] items-center justify-between px-5 sm:px-8">
          <Logo withTag />
          <button
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-dim transition-colors hover:text-volt-400"
          >
            fechar ✕
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-1 px-6 sm:px-16" aria-label="Menu">
          {NAV.map((n, i) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              tabIndex={open ? 0 : -1}
              className="group flex items-baseline gap-4 text-left"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateY(36px)",
                transition: `opacity .55s ${120 + i * 70}ms cubic-bezier(.2,.7,.2,1), transform .55s ${120 + i * 70}ms cubic-bezier(.2,.7,.2,1)`,
              }}
            >
              <span className="font-mono text-xs text-volt-400">0{i + 1}</span>
              <span className="font-display text-3xl font-bold uppercase tracking-tight text-ink transition-all duration-300 group-hover:translate-x-3 group-hover:text-volt-400 sm:text-5xl">
                {n.label}
              </span>
            </button>
          ))}
          <button
            onClick={() => go("configurador")}
            tabIndex={open ? 0 : -1}
            className="group mt-6 flex items-baseline gap-4 text-left"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "none" : "translateY(36px)",
              transition: "opacity .55s 520ms cubic-bezier(.2,.7,.2,1), transform .55s 520ms cubic-bezier(.2,.7,.2,1)",
            }}
          >
            <span className="font-mono text-xs text-ember-400">06</span>
            <span className="font-display text-3xl font-bold uppercase tracking-tight text-ember-400 transition-transform duration-300 group-hover:translate-x-3 sm:text-5xl">
              Orçamento
            </span>
          </button>
        </nav>
        <div
          className="flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-line px-6 py-5 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-dim sm:px-16"
          style={{
            opacity: open ? 1 : 0,
            transition: "opacity .5s 600ms",
          }}
        >
          <a href={business.phoneHref} className="transition-colors hover:text-volt-400">
            {business.phoneDisplay}
          </a>
          <a
            href={`https://wa.me/${business.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-volt-400"
          >
            WhatsApp {business.whatsappDisplay}
          </a>
          <a
            href={business.instagram}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-volt-400"
          >
            {business.instagramHandle}
          </a>
          <span className="ml-auto hidden text-faint sm:block">São Paulo → todo o Brasil</span>
        </div>
      </div>
    </>
  );
}

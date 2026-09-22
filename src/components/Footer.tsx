import { business } from "../config/business";
import { productLine } from "../config/products";
import { waLink, DEFAULT_WA_MESSAGE, scrollToId } from "../lib/utils";
import Logo from "./Logo";

const SOLUTION_LINKS = [
  { label: "Painel Indoor", id: "solucoes" },
  { label: "Painel Outdoor", id: "ambientes" },
  { label: "Locação para eventos", id: "solucoes" },
  { label: "Publicidade DOOH", id: "projetos" },
  { label: "Experiência Pixel", id: "pixels" },
  { label: "Configurador de projeto", id: "configurador" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-night-900/70">
      {/* wordmark gigante */}
      <div className="pointer-events-none overflow-hidden px-2 pt-10" aria-hidden>
        <p className="text-outline select-none whitespace-nowrap text-center font-display text-[22vw] font-black leading-[0.8] tracking-tight opacity-70 lg:text-[16rem]">
          LUMENIX
        </p>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 pb-14 pt-10 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo withTag />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-dim">
            {business.headline} Venda e locação do P1 ao P10, com projeto, estrutura, instalação
            própria e gestão de conteúdo.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da LUMENIX"
              className="flex h-10 w-10 items-center justify-center border border-line text-dim transition-all duration-300 hover:-translate-y-1 hover:border-volt-400 hover:text-volt-400"
            >
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current" aria-hidden>
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.48 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.15A3.99 3.99 0 1 1 16 12a3.99 3.99 0 0 1-4 3.99Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
              </svg>
            </a>
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp da LUMENIX"
              className="flex h-10 w-10 items-center justify-center border border-line text-dim transition-all duration-300 hover:-translate-y-1 hover:border-ember-400 hover:text-ember-400"
            >
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current" aria-hidden>
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m4.52 14.13c-.21.58-1.2 1.16-1.67 1.23-.43.07-.97.1-1.56-.1-.36-.11-.82-.26-1.41-.52-2.48-1.07-4.11-3.57-4.23-3.74-.12-.16-1.01-1.34-1.01-2.56 0-1.22.64-1.82.86-2.07.23-.25.49-.31.66-.31h.48c.15.01.36-.05.56.43.2.5.7 1.71.76 1.84.06.12.1.26.02.43-.09.16-.13.26-.25.41-.12.14-.26.32-.37.43-.13.13-.25.26-.11.51.15.25.64 1.06 1.38 1.72.94.84 1.74 1.1 1.99 1.23.25.12.4.1.54-.06.14-.17.62-.72.78-.97.17-.25.33-.21.56-.13.22.09 1.44.68 1.69.81.25.12.42.18.48.28.07.11.07.6-.14 1.18" />
              </svg>
            </a>
            <a
              href={business.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn da LUMENIX"
              className="flex h-10 w-10 items-center justify-center border border-line text-dim transition-all duration-300 hover:-translate-y-1 hover:border-volt-400 hover:text-volt-400"
            >
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current" aria-hidden>
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-faint">Soluções</p>
          <ul className="mt-5 space-y-3">
            {SOLUTION_LINKS.map((l) => (
              <li key={l.label}>
                <button
                  onClick={() => scrollToId(l.id)}
                  className="group inline-flex items-center gap-2 text-sm text-dim transition-colors hover:text-volt-400"
                >
                  <span className="h-px w-3 bg-line transition-all duration-300 group-hover:w-5 group-hover:bg-volt-400" />
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-faint">Modelos</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
            {productLine.map((p) => (
              <li key={p.id}>
                <button
                  onClick={() => scrollToId("produtos")}
                  className="font-mono text-sm text-dim transition-colors hover:text-ember-400"
                >
                  {p.pitch}
                  <span className="text-faint"> · {p.pitchMm}mm</span>
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.3em] text-faint">
            Atendimento nacional
          </p>
          <ul className="mt-4 space-y-2">
            {business.regionalOffices.slice(0, 4).map((r) => (
              <li key={r.city} className="flex items-baseline justify-between gap-3 text-sm text-dim">
                <span>{r.city}</span>
                <a href={r.href} className="font-mono text-xs transition-colors hover:text-volt-400">
                  {r.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-faint">
            Showroom — São Paulo
          </p>
          <address className="mt-5 text-sm not-italic leading-relaxed text-dim">
            {business.address.street}
            <br />
            {business.address.district} — {business.address.city}/{business.address.state}
          </address>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={business.phoneHref} className="text-dim transition-colors hover:text-volt-400">
                Televendas {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className="text-dim transition-colors hover:text-volt-400"
              >
                WhatsApp {business.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="text-dim transition-colors hover:text-volt-400">
                {business.email}
              </a>
            </li>
            <li>
              <a
                href={business.mapsDirections}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-ember-400 transition-colors hover:text-ember-300"
              >
                Traçar rota no Google Maps
                <svg viewBox="0 0 16 16" className="h-3 w-3 fill-current" aria-hidden>
                  <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.6" fill="none" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line/70">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-6 gap-y-2 px-5 py-5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-faint sm:px-8">
          <span>© {new Date().getFullYear()} LUMENIX — desde 2012</span>
          <span className="hidden h-3 w-px bg-line sm:block" />
          <span>
            Site demonstrativo de portfólio — imagens representativas (TEMP_REPLACE_ME) sujeitas à
            aprovação final da LUMENIX
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="ml-auto inline-flex items-center gap-2 text-dim transition-colors hover:text-volt-400"
          >
            voltar ao topo ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

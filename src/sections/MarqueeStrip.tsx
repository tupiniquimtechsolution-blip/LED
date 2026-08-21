import { business } from "../config/business";
import Marquee from "../components/Marquee";

const SERVICES = ["Venda", "Locação", "Projeto sob medida", "Instalação própria", "DOOH", "Eventos", "P1PLAY", "Assistência técnica"];

/** Letreiros de serviços + marcas atendidas (nomes públicos divulgados pela P1LED). */
export default function MarqueeStrip() {
  return (
    <div className="relative z-10 border-y border-line bg-night-900/60">
      <Marquee duration={30} className="border-b border-line/70 py-3.5">
        {SERVICES.map((s, i) => (
          <span key={s} className="flex items-center">
            <span
              className={`px-6 font-display text-sm font-bold uppercase tracking-wide ${
                i % 2 === 0 ? "text-ink" : "text-volt-400"
              }`}
            >
              {s}
            </span>
            <svg viewBox="0 0 10 10" className="h-2 w-2 text-ember-400" aria-hidden>
              <rect width="10" height="10" className="fill-current" />
            </svg>
          </span>
        ))}
      </Marquee>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-night-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-night-950 to-transparent" />
        <Marquee duration={55} reverse className="py-4">
          {business.clients.map((c) => (
            <span key={c} className="flex items-center">
              <span className="px-7 font-mono text-xs uppercase tracking-[0.28em] text-faint transition-colors duration-300 hover:text-ink">
                {c}
              </span>
              <span className="h-1 w-1 rounded-full bg-line" />
            </span>
          ))}
        </Marquee>
      </div>
      <p className="border-t border-line/70 px-5 py-2 text-center font-mono text-[0.6rem] uppercase tracking-[0.3em] text-faint">
        A escolha das grandes marcas — presença em projetos de {business.clients.length}+ grandes nomes
      </p>
    </div>
  );
}

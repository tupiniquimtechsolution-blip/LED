import { useCallback, useRef, useState } from "react";
import { assets } from "../config/assets";
import Reveal from "../components/Reveal";
import SectionTag from "../components/SectionTag";

/**
 * Indoor × Outdoor: duas fotografias no mesmo palco com divisor arrastável
 * (mouse, toque e teclado).
 */
export default function Compare() {
  const [pos, setPos] = useState(50);
  const boxRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const box = boxRef.current;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, p)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) setFromClientX(e.clientX);
  };
  const stop = () => (dragging.current = false);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 4));
  };

  return (
    <section id="ambientes" className="relative z-10 scroll-mt-20">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <SectionTag index="04" label="Indoor × Outdoor" tone="ember" />
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-ink sm:text-5xl">
              Dois mundos, <span className="text-ember-400">um padrão.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-md text-sm leading-relaxed text-dim lg:justify-self-end">
              Arraste o divisor e compare: dentro, o fine pitch com brilho calibrado para o conforto
              de quem olha de perto; fora, alto brilho e IP65 pra vencer o sol direto.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-12">
          <div
            ref={boxRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={stop}
            onPointerCancel={stop}
            className="led-frame led-frame-ember relative aspect-[16/10] touch-none overflow-hidden border border-line bg-night-950 select-none"
          >
            {/* INDOOR (esquerda, base) */}
            <img
              src={assets.images.indoorVitrine}
              alt="Ambiente indoor: painel de LED fine pitch em vitrine"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            {/* OUTDOOR (direita, recortada) */}
            <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
              <img
                src={assets.images.outdoorEmpena}
                alt="Ambiente outdoor: empena de LED sob céu de fim de tarde"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
              />
            </div>

            {/* divisor */}
            <div
              className="absolute inset-y-0 z-20 w-[2px] bg-ember-400 shadow-[0_0_24px_rgba(247,155,30,0.8)]"
              style={{ left: `${pos}%` }}
            >
              <button
                role="slider"
                aria-label="Comparar ambientes indoor e outdoor"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(pos)}
                onKeyDown={onKeyDown}
                className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ember-400 bg-night-950/85 text-ember-400 backdrop-blur-sm transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-volt-400"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                  <path d="M8 7 3 12l5 5M16 7l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* etiquetas */}
            <span className="absolute left-4 top-4 z-10 border border-volt-400/40 bg-night-950/80 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-volt-400 backdrop-blur-sm">
              Indoor · P2 fine pitch · 900+ nits
            </span>
            <span className="absolute right-4 top-4 z-10 border border-ember-400/40 bg-night-950/80 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-ember-400 backdrop-blur-sm">
              Outdoor · P6 · 5.000+ nits · IP65
            </span>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-px border border-line bg-line/60 md:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full bg-night-900 p-7 sm:p-9">
              <p className="font-display text-lg font-bold uppercase text-volt-400">Indoor</p>
              <p className="mt-3 text-sm leading-relaxed text-dim">
                Pra ambientes internos com público próximo: showrooms, lojas, corporativo, igrejas,
                estúdios e eventos. Pixel fino pra leitura de perto e brilho calibrado pro conforto
                visual — com refresh acima de 1920 Hz, sem cintilação nem em fotos.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="h-full">
            <div className="h-full bg-night-900 p-7 sm:p-9">
              <p className="font-display text-lg font-bold uppercase text-ember-400">Outdoor</p>
              <p className="mt-3 text-sm leading-relaxed text-dim">
                Pra áreas externas e sol direto: fachadas, empenas, postos e publicidade DOOH. Brilho
                de 5.000 a 10.000 nits e proteção IP65 contra chuva e poeira — visível ao meio-dia,
                impossível de perder à noite.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

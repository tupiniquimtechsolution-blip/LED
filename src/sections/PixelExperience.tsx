import { useEffect, useRef, useState } from "react";
import { assets } from "../config/assets";
import { prefersReducedMotion, setupGsap, ScrollTrigger } from "../lib/gsapSetup";
import { cn } from "../lib/utils";
import SectionTag from "../components/SectionTag";

type DrawFn = () => void;

const STOPS = [
  { name: "P10", cols: 26, dist: "10 m", at: 0 },
  { name: "P6", cols: 52, dist: "6 m", at: 0.33 },
  { name: "P3", cols: 104, dist: "3 m", at: 0.66 },
  { name: "P2", cols: 210, dist: "2 m", at: 1 },
];

/**
 * Experiência Pixel: a imagem começa grosseiramente pixelizada e ganha
 * definição conforme o scroll — uma aula sobre distância de leitura.
 * (Simulação educacional; não associa projeto real a especificação.)
 */
export default function PixelExperience() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const offRef = useRef<HTMLCanvasElement | null>(null);
  const progressRef = useRef(0);
  const drawRef = useRef<DrawFn>(() => {});
  const [current, setCurrent] = useState(0);
  const [manual, setManual] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = assets.images.pixelDemo;
    img.decoding = "async";

    const fit = () => {
      const parent = canvas.parentElement!;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(parent.clientWidth * dpr);
      canvas.height = Math.round(parent.clientHeight * dpr);
      draw();
    };

    const draw = () => {
      if (!imgRef.current) return;
      const p = progressRef.current;
      // interpolação exponencial de colunas (passos P10 → P2)
      const seg = Math.min(2, Math.floor(p * 3));
      const local = p * 3 - seg;
      const c0 = STOPS[seg].cols;
      const c1 = STOPS[seg + 1].cols;
      const cols = Math.round(c0 * Math.pow(c1 / c0, local));

      const source = imgRef.current;
      let off = offRef.current;
      if (!off) {
        off = document.createElement("canvas");
        offRef.current = off;
      }
      const rows = Math.max(2, Math.round(cols * (source.naturalHeight / source.naturalWidth)));
      off.width = cols;
      off.height = rows;
      const octx = off.getContext("2d")!;
      octx.imageSmoothingEnabled = true;
      octx.drawImage(source, 0, 0, cols, rows);

      const W = canvas.width;
      const H = canvas.height;
      ctx.imageSmoothingEnabled = false;
      ctx.fillStyle = "#04070c";
      ctx.fillRect(0, 0, W, H);
      // cover
      const scale = Math.max(W / cols, H / rows);
      const dw = cols * scale;
      const dh = rows * scale;
      ctx.drawImage(off, 0, 0, cols, rows, (W - dw) / 2, (H - dh) / 2, dw, dh);

      const idx = p < 0.17 ? 0 : p < 0.5 ? 1 : p < 0.83 ? 2 : 3;
      setCurrent((prev) => (prev === idx ? prev : idx));
    };

    img.onload = () => {
      imgRef.current = img;
      fit();
    };

    drawRef.current = draw;

    setupGsap();
    let st: ScrollTrigger | undefined;
    const isDesktop = () => window.matchMedia("(min-width: 1024px)").matches;
    if (!prefersReducedMotion() && wrapRef.current && isDesktop()) {
      st = ScrollTrigger.create({
        trigger: wrapRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          progressRef.current = self.progress;
          draw();
        },
      });
    }

    fit();
    window.addEventListener("resize", fit);
    return () => {
      window.removeEventListener("resize", fit);
      st?.kill();
    };
  }, []);

  /** Controle manual (mobile e fallback sem scroll longo). */
  const onManual = (v: number) => {
    setManual(v);
    progressRef.current = v;
    drawRef.current();
  };

  return (
    <section id="pixels" className="relative z-10 scroll-mt-20 bg-night-900/40">
      <div ref={wrapRef} className="relative lg:h-[380vh]">
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14 lg:py-0">
            {/* painel simulado */}
            <div className="led-frame relative aspect-[3/2] border border-line bg-night-950 lg:aspect-auto lg:h-[62vh]">
              <div className="absolute inset-0 overflow-hidden">
                <canvas ref={canvasRef} className="h-full w-full" aria-label="Simulação de resolução de painel de LED" role="img" />
              </div>
              <div className="scanlines pointer-events-none absolute inset-0" />
              <span className="absolute left-3 top-3 z-10 flex items-center gap-2 border border-ink/10 bg-night-950/80 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-500 animate-pulse-dot" />
                simulação de resolução
              </span>
              <span className="absolute bottom-3 right-3 z-10 hidden bg-night-950/80 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-faint lg:block">
                role para dar nitidez ↓
              </span>
            </div>

            {/* controle manual (mobile / fallback) */}
            <div className="mt-6 lg:hidden">
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={Math.round(manual * 100)}
                onChange={(e) => onManual(parseInt(e.target.value, 10) / 100)}
                className="w-full"
                aria-label="Ajustar nitidez da simulação (P10 a P2)"
              />
              <div className="mt-2 flex justify-between font-mono text-[0.62rem] uppercase tracking-[0.2em] text-faint">
                {STOPS.map((s, i) => (
                  <span key={s.name} className={i === current ? "text-volt-400" : ""}>
                    {s.name}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-center font-mono text-[0.6rem] uppercase tracking-[0.2em] text-faint">
                arraste para dar nitidez →
              </p>
            </div>

            {/* leitura didática */}
            <div className="flex flex-col justify-center">
              <SectionTag index="03" label="Experiência Pixel" />
              <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-ink sm:text-5xl">
                Do P10 ao P2, <span className="text-volt-400">pixel por pixel.</span>
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-dim">
                A regra é simples: <strong className="text-ink">o número do painel indica a distância de leitura em metros.</strong>{" "}
                Quanto mais perto o público, menor o pitch — e mais definida a imagem. Role e veja a
                mesma cena ganhando resolução.
              </p>

              <div className="mt-10 flex items-end gap-6">
                <p
                  key={current}
                  className="font-display text-7xl font-black leading-none tracking-tight text-volt-400 sm:text-8xl"
                  style={{ textShadow: "0 0 50px rgba(63,220,255,0.45)" }}
                >
                  {STOPS[current].name}
                </p>
                <div className="pb-2">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-faint">
                    leitura a partir de
                  </p>
                  <p className="font-display text-2xl font-bold text-ember-400">{STOPS[current].dist}</p>
                </div>
              </div>

              {/* trilha P10 → P2 */}
              <div className="relative mt-8 h-px w-full max-w-md bg-line">
                <span
                  className="absolute left-0 top-0 h-px bg-volt-400 transition-all duration-300"
                  style={{ width: `${(current / 3) * 100}%` }}
                />
                <div className="absolute -top-[5px] flex w-full justify-between">
                  {STOPS.map((s, i) => (
                    <span
                      key={s.name}
                      className={cn(
                        "flex h-[11px] w-[11px] rotate-45 border transition-all duration-300",
                        i <= current
                          ? "border-volt-400 bg-volt-400 shadow-[0_0_12px_rgba(63,220,255,0.8)]"
                          : "border-line bg-night-900",
                      )}
                    />
                  ))}
                </div>
                <div className="mt-5 flex w-full justify-between font-mono text-[0.62rem] uppercase tracking-[0.2em]">
                  {STOPS.map((s, i) => (
                    <span key={s.name} className={i === current ? "text-volt-400" : "text-faint"}>
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-8 max-w-md font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.16em] text-faint">
                * Demonstração educacional de resolução — não representa a especificação de um
                projeto específico da P1LED.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

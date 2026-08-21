import { useEffect, useMemo, useState } from "react";
import { groupSpecs, productLine, type ProductGroup } from "../config/products";
import { business } from "../config/business";
import { cn, fmt, waLink } from "../lib/utils";
import Reveal from "../components/Reveal";
import SectionTag from "../components/SectionTag";

type Ambient = "indoor" | "outdoor" | "semi";

const AMBIENTS: Array<{ id: Ambient; label: string; desc: string; group: ProductGroup; icon: JSX.Element }> = [
  {
    id: "indoor",
    label: "Indoor",
    desc: "Lojas, igrejas, corporativo, estúdios",
    group: "indoor",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path d="M3 21V9l9-6 9 6v12h-6v-7H9v7H3Z" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "outdoor",
    label: "Outdoor",
    desc: "Fachadas, empenas, DOOH, sol direto",
    group: "outdoor",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path d="M4 5h16v10H4zM12 15v4M8 21h8M8 2l1 3M16 2l-1 3M12 1v3" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "semi",
    label: "Semi-aberto",
    desc: "Varandas, áreas cobertas, postos",
    group: "outdoor",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path d="M3 10 12 4l9 6M5 10v10M19 10v10M5 14h14M5 18h14" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
];

const PITCH_BY_AMBIENT: Record<Ambient, string[]> = {
  indoor: ["p1", "p2", "p3", "p4"],
  outdoor: ["p5", "p6", "p8", "p10"],
  semi: ["p4", "p5", "p6"],
};

const MODULE_AREA = 0.32 * 0.16; // módulo padrão 320 × 160 mm

/** Configurador de projeto: dimensiona área, resolução e módulos — e envia pelo WhatsApp. */
export default function Configurator() {
  const [ambient, setAmbient] = useState<Ambient>("indoor");
  const [pitchId, setPitchId] = useState("p2");
  const [width, setWidth] = useState(4);
  const [height, setHeight] = useState(2.5);
  const [regime, setRegime] = useState<"compra" | "locacao">("compra");

  // permite que a linha de produtos pré-selecione o modelo
  useEffect(() => {
    const onPick = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      const product = productLine.find((p) => p.pitch === detail);
      if (!product) return;
      const amb: Ambient = product.group === "indoor" ? "indoor" : product.id === "p4" || product.id === "p5" ? "semi" : "outdoor";
      setAmbient(amb);
      if (PITCH_BY_AMBIENT[amb].includes(product.id)) setPitchId(product.id);
    };
    window.addEventListener("p1led:pick-pitch", onPick);
    return () => window.removeEventListener("p1led:pick-pitch", onPick);
  }, []);

  useEffect(() => {
    if (!PITCH_BY_AMBIENT[ambient].includes(pitchId)) {
      setPitchId(PITCH_BY_AMBIENT[ambient][1] ?? PITCH_BY_AMBIENT[ambient][0]);
    }
  }, [ambient, pitchId]);

  const product = productLine.find((p) => p.id === pitchId)!;

  const calc = useMemo(() => {
    const area = width * height;
    const modules = Math.ceil(area / MODULE_AREA);
    const resW = Math.round((width * 1000) / product.pitchMm);
    const resH = Math.round((height * 1000) / product.pitchMm);
    const brightness =
      product.group === "indoor"
        ? product.id === "p1"
          ? "900+ nits"
          : "800–1.500 nits (calibrado)"
        : "5.000–10.000 nits";
    const protection = product.group === "indoor" ? "Gabinete ultra-slim" : "IP65 — água e poeira";
    return { area, modules, resW, resH, brightness, protection };
  }, [width, height, product]);

  const waMessage = useMemo(() => {
    const ambLabel = AMBIENTS.find((a) => a.id === ambient)!.label;
    return [
      `Olá! Fiz uma simulação no site da P1LED e quero um orçamento:`,
      `• Ambiente: ${ambLabel}`,
      `• Modelo: ${product.pitch} (${product.pitchMm} mm)`,
      `• Medidas: ${fmt(width)} × ${fmt(height)} m — área ${calc.area.toLocaleString("pt-BR", { maximumFractionDigits: 2 })} m²`,
      `• Resolução estimada: ${fmt(calc.resW)} × ${fmt(calc.resH)} px`,
      `• Interesse: ${regime === "compra" ? "Compra" : "Locação"}`,
    ].join("\n");
  }, [ambient, product, width, height, calc, regime]);

  return (
    <section id="configurador" className="relative z-10 scroll-mt-20 border-t border-line bg-night-900/40">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <Reveal>
            <SectionTag index="09" label="Configurador" />
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-ink sm:text-5xl">
              Simule seu painel <span className="text-volt-400">em segundos.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-xl text-sm leading-relaxed text-dim lg:justify-self-end">
              Escolha o ambiente, o modelo e as medidas do espaço. A gente calcula área, resolução e
              módulos — você envia direto pro nosso time pelo WhatsApp e recebe o orçamento sob projeto.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* formulário */}
          <Reveal>
            <div className="space-y-9">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-faint">01 · Ambiente</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {AMBIENTS.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => setAmbient(a.id)}
                      aria-pressed={ambient === a.id}
                      className={cn(
                        "group border p-4 text-left transition-all duration-300",
                        ambient === a.id
                          ? "border-volt-400 bg-night-800 shadow-[0_0_30px_-10px_rgba(63,220,255,0.5)]"
                          : "border-line bg-night-900/60 hover:border-volt-400/40",
                      )}
                    >
                      <span className={cn("transition-colors", ambient === a.id ? "text-volt-400" : "text-dim group-hover:text-ink")}>
                        {a.icon}
                      </span>
                      <span className="mt-3 block font-display text-sm font-bold uppercase text-ink">{a.label}</span>
                      <span className="mt-1 block text-[0.7rem] leading-snug text-faint">{a.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-faint">02 · Modelo (pitch)</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {PITCH_BY_AMBIENT[ambient].map((id) => {
                    const p = productLine.find((x) => x.id === id)!;
                    const active = pitchId === id;
                    return (
                      <button
                        key={id}
                        onClick={() => setPitchId(id)}
                        aria-pressed={active}
                        className={cn(
                          "border px-5 py-3 transition-all duration-300",
                          active
                            ? "border-ember-400 bg-ember-500/10 text-ember-400 shadow-[0_0_26px_-10px_rgba(247,155,30,0.7)]"
                            : "border-line bg-night-900/60 text-dim hover:border-ember-400/50 hover:text-ink",
                        )}
                      >
                        <span className="font-display text-lg font-extrabold">{p.pitch}</span>
                        <span className="ml-2 font-mono text-[0.6rem] uppercase tracking-[0.14em]">{p.pitchMm} mm</span>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-3 text-xs text-faint">
                  {groupSpecs[product.group].label} · leitura recomendada a partir de{" "}
                  <span className="text-volt-400">{product.distance}</span>
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                {(
                  [
                    { label: "03 · Largura", value: width, set: setWidth },
                    { label: "04 · Altura", value: height, set: setHeight },
                  ] as const
                ).map((f) => (
                  <div key={f.label}>
                    <div className="flex items-baseline justify-between">
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-faint">{f.label}</p>
                      <p className="font-display text-2xl font-extrabold text-ink">
                        {f.value.toLocaleString("pt-BR", { minimumFractionDigits: 1 })}
                        <span className="ml-1 text-sm text-volt-400">m</span>
                      </p>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={20}
                      step={0.5}
                      value={f.value}
                      onChange={(e) => f.set(parseFloat(e.target.value))}
                      className="mt-4 w-full"
                      aria-label={f.label}
                    />
                    <div className="mt-2 flex justify-between font-mono text-[0.58rem] uppercase tracking-[0.16em] text-faint">
                      <span>1 m</span>
                      <span>20 m</span>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-faint">05 · Interesse</p>
                <div className="mt-4 inline-flex border border-line">
                  {(
                    [
                      { id: "compra", label: "Compra" },
                      { id: "locacao", label: "Locação" },
                    ] as const
                  ).map((r) => (
                    <button
                      key={r.id}
                      onClick={() => setRegime(r.id)}
                      aria-pressed={regime === r.id}
                      className={cn(
                        "px-6 py-2.5 font-mono text-[0.72rem] uppercase tracking-[0.2em] transition-all duration-300",
                        regime === r.id ? "bg-volt-400 text-night-950" : "text-dim hover:text-ink",
                      )}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-xs text-faint">
                  Uso frequente pede compra · uso pontual pede locação (1.500 m² disponíveis).
                </p>
              </div>
            </div>
          </Reveal>

          {/* resultado */}
          <Reveal delay={150}>
            <div className="led-frame relative border border-line bg-night-950 p-7 sm:p-9">
              <div className="pointer-events-none absolute inset-0 [background:radial-gradient(500px_300px_at_85%_0%,rgba(63,220,255,0.08),transparent_60%)]" />
              <p className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.26em] text-faint">
                <span className="h-1.5 w-1.5 rounded-full bg-volt-400 animate-pulse-dot" />
                Dimensionamento estimado · {product.pitch}
              </p>

              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <p className="font-display text-6xl font-black leading-none tracking-tight text-volt-400 sm:text-7xl" style={{ textShadow: "0 0 44px rgba(63,220,255,0.4)" }}>
                    {calc.area.toLocaleString("pt-BR", { maximumFractionDigits: 2 })}
                  </p>
                  <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-dim">metros quadrados</p>
                </div>
                <div className="pb-1 text-right">
                  <p className="font-display text-2xl font-extrabold text-ember-400">
                    {fmt(width)}×{fmt(height)} m
                  </p>
                  <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-faint">{regime === "compra" ? "compra" : "locação"}</p>
                </div>
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-px border border-line bg-line/60">
                {[
                  { k: "Resolução estimada", v: `${fmt(calc.resW)} × ${fmt(calc.resH)} px` },
                  { k: "Módulos (320×160)", v: `≈ ${fmt(calc.modules)}` },
                  { k: "Distância de leitura", v: `a partir de ${product.distance}` },
                  { k: "Brilho", v: calc.brightness },
                  { k: "Proteção", v: calc.protection },
                  { k: "Refresh", v: "acima de 1920 Hz" },
                ].map((row) => (
                  <div key={row.k} className="bg-night-950 p-4">
                    <dt className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-faint">{row.k}</dt>
                    <dd className="mt-1.5 text-sm font-semibold text-ink">{row.v}</dd>
                  </div>
                ))}
              </dl>

              <a href={waLink(waMessage)} target="_blank" rel="noreferrer" className="btn btn-ember mt-8 w-full justify-center">
                Enviar simulação pelo WhatsApp
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden>
                  <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
                </svg>
              </a>
              <p className="mt-4 text-center font-mono text-[0.6rem] uppercase tracking-[0.18em] text-faint">
                Valores de dimensionamento inicial — o orçamento final é sob projeto.
              </p>
              <p className="mt-2 text-center text-xs text-faint">
                Prefere falar?{" "}
                <a href={business.phoneHref} className="text-volt-400 hover:underline">
                  {business.phoneDisplay}
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

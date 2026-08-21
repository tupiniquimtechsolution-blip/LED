import { assets } from "../config/assets";
import { apexOne, groupSpecs, productLine, segments, type ProductGroup } from "../config/products";
import { cn, scrollToId } from "../lib/utils";
import Reveal from "../components/Reveal";
import SectionTag from "../components/SectionTag";

const SEGMENT_IMG: Record<string, string> = {
  residencial: assets.images.poolResidential,
  eventos: assets.images.eventStage,
  varejo: assets.images.indoorVitrine,
};

function pickPitch(pitch: string) {
  window.dispatchEvent(new CustomEvent("p1led:pick-pitch", { detail: pitch }));
  scrollToId("configurador");
}

export default function Solutions() {
  return (
    <section id="solucoes" className="relative z-10 scroll-mt-20">
      <div className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 lg:pt-32">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <Reveal>
            <SectionTag index="01" label="Soluções" />
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-ink sm:text-5xl">
              O painel de LED ideal <span className="text-volt-400">pra cada segmento.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-xl text-base leading-relaxed text-dim lg:justify-self-end">
              Cada segmento tem suas exigências. Todos recebem o mesmo padrão de excelência — do
              projeto técnico à gestão do conteúdo, a solução completa está aqui.
            </p>
          </Reveal>
        </div>

        {/* segmentos */}
        <div className="mt-16 space-y-6">
          {segments.map((seg, i) => (
            <Reveal key={seg.id} delay={i * 90}>
              <article
                className={cn(
                  "group grid gap-0 border border-line bg-night-900/55 transition-colors duration-500 hover:border-volt-400/50 lg:grid-cols-2",
                )}
              >
                <div className={cn("img-led-wrap aspect-[16/10] lg:aspect-auto lg:min-h-[320px]", i % 2 === 1 && "lg:order-2")}>
                  <img
                    src={SEGMENT_IMG[seg.id]}
                    alt={seg.title}
                    loading="lazy"
                    className="img-led h-full w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 z-10 border border-ink/15 bg-night-950/80 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-volt-400 backdrop-blur-sm">
                    {seg.env}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-ink transition-colors duration-300 group-hover:text-volt-300 sm:text-3xl">
                    {seg.title}
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-dim">{seg.copy}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {seg.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-line px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-dim transition-colors duration-300 group-hover:border-volt-400/40 group-hover:text-ink"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => scrollToId("configurador")}
                    className="mt-8 inline-flex w-fit items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.24em] text-ember-400 transition-all duration-300 hover:gap-4 hover:text-ember-300"
                  >
                    dimensionar meu projeto
                    <svg viewBox="0 0 16 16" className="h-3 w-3" aria-hidden>
                      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
                    </svg>
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* APEX ONE */}
      <div className="mx-auto max-w-[1400px] px-5 pt-20 sm:px-8">
        <Reveal>
          <div className="led-frame relative overflow-hidden border border-line bg-night-900/70 p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-volt-500/10 blur-3xl" />
            <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-ember-400">
                  Nova geração · APEX Series
                </p>
                <h3 className="mt-4 font-display text-2xl font-extrabold uppercase leading-tight text-ink sm:text-4xl">
                  {apexOne.name}
                </h3>
                <p className="mt-3 text-lg leading-snug text-dim">{apexOne.headline}</p>
              </div>
              <ul className="grid gap-px bg-line/60 sm:grid-cols-2">
                {apexOne.features.map((f) => (
                  <li key={f.sigla} className="group bg-night-900 p-5 transition-colors duration-300 hover:bg-night-800">
                    <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.14em] text-volt-400">
                      {f.sigla}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-dim">{f.desc}</p>
                  </li>
                ))}
                <li className="flex items-center bg-night-900 p-5">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint">
                    Processamento e gerenciamento wireless — controle de onde você estiver.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      {/* linha de produtos */}
      <div id="produtos" className="mx-auto max-w-[1400px] scroll-mt-24 px-5 pb-28 pt-24 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionTag index="02" label="Linha completa" tone="ember" />
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-ink sm:text-5xl">
              Do P1 ao P10, <span className="text-ember-400">a pronta entrega.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-md text-sm leading-relaxed text-dim">
              A regra é simples: <strong className="text-ink">o número do painel indica a distância de leitura em metros.</strong>{" "}
              Público a 3 metros, P3. A 10 metros, P10. Clique num modelo e simule seu projeto.
            </p>
          </Reveal>
        </div>

        {(["indoor", "outdoor"] as ProductGroup[]).map((group) => (
          <div key={group} className="mt-12">
            <Reveal className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <h3 className="font-display text-xl font-bold uppercase tracking-tight text-volt-400">
                {groupSpecs[group].label}
              </h3>
              <p className="text-sm text-dim">{groupSpecs[group].copy}</p>
            </Reveal>
            <div className="mt-5 flex flex-wrap gap-3">
              {groupSpecs[group].specs.map((s) => (
                <span
                  key={s}
                  className="border border-line bg-night-900/60 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-dim"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-px overflow-hidden border border-line bg-line/60 sm:grid-cols-2 lg:grid-cols-4">
              {productLine
                .filter((p) => p.group === group)
                .map((p, i) => (
                  <Reveal key={p.id} delay={i * 70} className="h-full">
                    <button
                      onClick={() => pickPitch(p.pitch)}
                      className="group relative flex h-full w-full flex-col bg-night-900 p-6 text-left transition-colors duration-300 hover:bg-night-800"
                    >
                      <span
                        className={cn(
                          "pointer-events-none absolute inset-x-0 top-0 h-[2px] scale-x-0 transition-transform duration-500 group-hover:scale-x-100",
                          group === "indoor" ? "bg-volt-400" : "bg-ember-400",
                        )}
                      />
                      <span className="flex items-baseline justify-between">
                        <span className="font-display text-4xl font-extrabold tracking-tight text-ink transition-colors duration-300 group-hover:text-volt-300 sm:text-5xl">
                          {p.pitch}
                        </span>
                        <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-faint">
                          {p.pitchMm} mm
                        </span>
                      </span>
                      <span className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ember-400">
                        leitura a partir de {p.distance}
                      </span>
                      <span className="mt-3 text-sm leading-relaxed text-dim">{p.tagline}</span>
                      <span className="mt-auto flex items-center justify-between pt-5">
                        <span className="flex flex-wrap gap-1.5">
                          {p.uses.slice(0, 2).map((u) => (
                            <span key={u} className="bg-night-700/70 px-2 py-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-dim">
                              {u}
                            </span>
                          ))}
                        </span>
                        <svg
                          viewBox="0 0 16 16"
                          className={cn(
                            "h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",
                            group === "indoor" ? "text-volt-400" : "text-ember-400",
                          )}
                          aria-hidden
                        >
                          <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
                        </svg>
                      </span>
                      {p.highlight && (
                        <span className="absolute right-4 top-4 h-1.5 w-1.5 bg-ember-400 animate-pulse-dot" title="Mais pedido" />
                      )}
                    </button>
                  </Reveal>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

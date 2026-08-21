import { useLayoutEffect, useRef } from "react";
import { assets } from "../config/assets";
import { gsap, prefersReducedMotion, setupGsap } from "../lib/gsapSetup";
import { scrollToId } from "../lib/utils";
import Scramble from "../components/Scramble";
import Reveal from "../components/Reveal";

const SPEC_STRIP = [
  "Do P1 ao P10",
  "Até 10.000 nits",
  "IP65 outdoor",
  "120.000 h de vida útil",
  "Garantia de até 6 anos",
  "P1PLAY incluso",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setupGsap();
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { yPercent: -6, scale: 1.12 },
        {
          yPercent: 10,
          scale: 1.04,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="topo"
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* imagem real representativa + Ken Burns/parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={bgRef} className="absolute -inset-y-[8%] inset-x-0 will-change-transform">
          <img
            src={assets.images.heroFacade}
            alt="Fachada coberta por painel de LED à noite em São Paulo — instalação P1LED"
            className="h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(78deg,rgba(4,7,12,0.94)_12%,rgba(4,7,12,0.55)_48%,rgba(4,7,12,0.2)_75%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(4,7,12,1)_2%,rgba(4,7,12,0)_38%)]" />
        <div className="scanlines absolute inset-0" />
      </div>

      {/* conteúdo */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-5 pb-10 pt-32 sm:px-8 lg:pb-14">
        <Reveal>
          <p className="flex flex-wrap items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.3em] text-volt-400">
            <span className="inline-block h-2 w-2 rounded-full bg-ember-400 animate-pulse-dot" />
            Desde 2007 · +8.000 painéis instalados · São Paulo → Brasil
          </p>
        </Reveal>

        <h1 className="mt-6 max-w-5xl font-display font-extrabold uppercase leading-[0.98] tracking-tight text-ink [font-size:clamp(2.1rem,7.2vw,6.2rem)]">
          <Scramble text="Transformamos" speed={22} />
          <br />
          <Scramble text="espaços em" speed={22} startDelay={250} />
          <br />
          <Scramble
            text="experiências visuais"
            speed={24}
            startDelay={520}
            className="text-volt-400"
          />
          <span className="animate-caret ml-3 inline-block h-[0.72em] w-[0.09em] translate-y-[0.08em] bg-ember-400" />
        </h1>

        <Reveal delay={300}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-dim sm:text-lg">
            <strong className="font-semibold text-ink">O painel de LED certo muda tudo.</strong>{" "}
            Venda e locação do P1 ao P10, com projeto sob medida, estrutura, instalação própria e
            gestão de conteúdo — criamos o que você sente.
          </p>
        </Reveal>

        <Reveal delay={450} className="mt-9 flex flex-wrap items-center gap-4">
          <button onClick={() => scrollToId("configurador")} className="btn btn-ember">
            Solicitar orçamento
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden>
              <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
            </svg>
          </button>
          <button onClick={() => scrollToId("projetos")} className="btn btn-ghost">
            Ver projetos
          </button>
          <a
            href="tel:+551126262460"
            className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-faint underline-offset-4 transition-colors hover:text-volt-400 hover:underline"
          >
            ou ligue (11) 2626-2460
          </a>
        </Reveal>

        {/* faixa de specs */}
        <Reveal delay={600} className="mt-14 hidden lg:block">
          <div className="flex items-center gap-8 border-t border-ink/15 pt-5">
            {SPEC_STRIP.map((s, i) => (
              <span
                key={s}
                className={`font-mono text-[0.68rem] uppercase tracking-[0.22em] ${i === 0 ? "text-ember-400" : "text-dim"}`}
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* indicador de scroll */}
      <div className="absolute bottom-8 right-8 z-10 hidden flex-col items-center gap-3 md:flex">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.4em] text-faint [writing-mode:vertical-rl]">
          scroll
        </span>
        <span className="block h-16 w-px overflow-hidden bg-ink/15">
          <span className="animate-scroll-line block h-full w-full bg-volt-400" />
        </span>
      </div>
    </section>
  );
}

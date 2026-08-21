import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../config/projects";
import { gsap, prefersReducedMotion, setupGsap } from "../lib/gsapSetup";
import Reveal from "../components/Reveal";
import SectionTag from "../components/SectionTag";

/** Galeria de projetos em trilho horizontal (pin + scrub no desktop). */
export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState({ cur: 1, total: projects.length });

  useLayoutEffect(() => {
    setupGsap();
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const track = trackRef.current!;
        const getScroll = () => track.scrollWidth - window.innerWidth + 40;
        gsap.to(track, {
          x: () => -getScroll(),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${getScroll()}`,
            scrub: 0.8,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (barRef.current) barRef.current.style.transform = `scaleX(${self.progress})`;
              const idx = Math.min(projects.length, Math.floor(self.progress * projects.length) + 1);
              setCount((p) => (p.cur === idx ? p : { ...p, cur: idx }));
            },
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className="relative z-10 overflow-hidden border-t border-line bg-night-900/40 lg:h-screen lg:overflow-visible"
    >
      <div className="flex h-full flex-col justify-center py-16 lg:py-0">
        <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-end justify-between gap-5 px-5 sm:px-8">
          <Reveal>
            <SectionTag index="05" label="Portfólio" />
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-5xl">
              Projetos <span className="text-volt-400">P1LED</span>
            </h2>
          </Reveal>
          <div className="flex items-center gap-5">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-faint">
              <span className="text-volt-400">0{count.cur}</span> — 0{count.total}
            </p>
            <div className="hidden h-px w-40 bg-line sm:block">
              <div ref={barRef} className="h-px w-full origin-left scale-x-0 bg-volt-400" />
            </div>
            <p className="hidden font-mono text-[0.62rem] uppercase tracking-[0.24em] text-faint lg:block">
              role ↓ · horizontal
            </p>
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar mt-10 flex gap-6 overflow-x-auto px-5 pb-6 will-change-transform [scroll-snap-type:x_mandatory] sm:px-8 lg:overflow-visible lg:pb-0 lg:pl-[max(2rem,calc((100vw-1400px)/2+2rem))]"
        >
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to={`/projetos/${p.slug}`}
              className="group relative block w-[82vw] shrink-0 border border-line bg-night-900 transition-colors duration-500 hover:border-volt-400/60 [scroll-snap-align:start] sm:w-[54vw] lg:w-[38vw]"
              data-cursor
            >
              <div className="img-led-wrap aspect-[16/10]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="img-led h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 z-10 border border-ink/15 bg-night-950/85 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-volt-400">
                  {p.category}
                </span>
                <span className="absolute right-4 top-4 z-10 bg-ember-500 px-2.5 py-1 font-mono text-[0.6rem] font-bold uppercase tracking-[0.18em] text-night-950">
                  {p.regime}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-faint">
                    {String(i + 1).padStart(2, "0")} · {p.environment} · {p.location}
                  </p>
                  <h3 className="mt-2 max-w-sm font-display text-lg font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-volt-300">
                    {p.title}
                  </h3>
                </div>
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-line text-dim transition-all duration-300 group-hover:border-volt-400 group-hover:bg-volt-400 group-hover:text-night-950">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden>
                    <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.7" fill="none" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}

          {/* card final CTA */}
          <div className="flex w-[82vw] shrink-0 items-center justify-center border border-dashed border-line bg-night-900/40 [scroll-snap-align:start] sm:w-[44vw] lg:w-[26vw]">
            <div className="p-10 text-center">
              <p className="font-display text-2xl font-bold uppercase text-ink">
                O próximo pode ser <span className="text-ember-400">o seu.</span>
              </p>
              <a
                href="https://wa.me/5511963171253"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ember mt-7 inline-flex"
              >
                Começar projeto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useLayoutEffect, useRef, useState } from "react";
import { assets } from "../config/assets";
import { gsap, prefersReducedMotion, setupGsap } from "../lib/gsapSetup";

const SCREENS = [
  {
    img: assets.images.heroFacade,
    word: "Visibilidade",
    copy: "Fachadas e empenas que a cidade inteira vê — até 10.000 nits contra o sol do meio-dia.",
    alt: "Fachada urbana coberta por painel de LED",
  },
  {
    img: assets.images.eventStage,
    word: "Impacto",
    copy: "Palcos que o público filma primeiro. Estrutura modular e equipe técnica do início ao fim.",
    alt: "Palco de evento com grande painel de LED",
  },
  {
    img: assets.images.indoorVitrine,
    word: "Tecnologia",
    copy: "Fine pitch para leitura de perto: cor fiel, refresh acima de 1920 Hz e conteúdo no P1PLAY.",
    alt: "Painel de LED indoor em vitrine de loja",
  },
  {
    img: assets.images.showroomFacade,
    word: "P1LED",
    copy: "Desde 2007, +8.000 painéis acesos pelo Brasil. Showroom nos Jardins, instalação no país inteiro.",
    alt: "Showroom da P1LED iluminado à noite",
  },
];

/** Narrativa de scroll fixada: 4 telas, 4 palavras, zoom lento nos projetos. */
export default function StoryScroll() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    setupGsap();
    if (prefersReducedMotion() || !wrapperRef.current) return;
    const ctx = gsap.context(() => {
      const layers = gsap.utils.toArray<HTMLElement>("[data-story-layer]");
      const imgs = gsap.utils.toArray<HTMLImageElement>("[data-story-img]");
      const words = gsap.utils.toArray<HTMLElement>("[data-story-word]");

      layers.forEach((layer, i) => {
        gsap.set(layer, { opacity: i === 0 ? 1 : 0 });
        if (i > 0) {
          gsap.to(layer, {
            opacity: 1,
            duration: 0.1,
            ease: "none",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: () => `top+=${(i * 0.25 - 0.05) * (wrapperRef.current!.offsetHeight - window.innerHeight)} top`,
              end: () => `top+=${i * 0.25 * (wrapperRef.current!.offsetHeight - window.innerHeight)} top`,
              scrub: true,
            },
          });
        }
        if (i < layers.length - 1) {
          gsap.to(layer, {
            opacity: 0,
            duration: 0.1,
            ease: "none",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: () => `top+=${((i + 1) * 0.25 - 0.05) * (wrapperRef.current!.offsetHeight - window.innerHeight)} top`,
              end: () => `top+=${(i + 1) * 0.25 * (wrapperRef.current!.offsetHeight - window.innerHeight)} top`,
              scrub: true,
            },
          });
        }
      });

      imgs.forEach((img, i) => {
        gsap.fromTo(
          img,
          { scale: 1.04 },
          {
            scale: 1.2,
            ease: "none",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: () => `top+=${i * 0.25 * (wrapperRef.current!.offsetHeight - window.innerHeight)} top`,
              end: () => `top+=${(i + 1) * 0.25 * (wrapperRef.current!.offsetHeight - window.innerHeight)} top`,
              scrub: true,
            },
          },
        );
      });

      words.forEach((w, i) => {
        gsap.fromTo(
          w,
          { yPercent: 40, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: () => `top+=${(i * 0.25 + 0.03) * (wrapperRef.current!.offsetHeight - window.innerHeight)} top`,
              end: () => `top+=${(i * 0.25 + 0.14) * (wrapperRef.current!.offsetHeight - window.innerHeight)} top`,
              scrub: true,
            },
          },
        );
      });

      ScrollProgress();
      function ScrollProgress() {
        gsap.to(
          {},
          {
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top top",
              end: "bottom bottom",
              onUpdate: (self) => {
                const idx = Math.min(3, Math.floor(self.progress * 4.0001));
                setActive((prev) => (prev === idx ? prev : idx));
              },
            },
          },
        );
      }
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  const reduced = prefersReducedMotion();

  // fallback estático com reduced motion
  if (reduced) {
    return (
      <section className="relative z-10">
        {SCREENS.map((s, i) => (
          <div key={s.word} className="relative flex min-h-[70vh] items-end overflow-hidden">
            <img src={s.img} alt={s.alt} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-night-950/60" />
            <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-14 sm:px-8">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt-400">
                0{i + 1} / 04
              </p>
              <h2 className="mt-3 font-display text-5xl font-extrabold uppercase text-ink">{s.word}</h2>
              <p className="mt-4 max-w-lg text-dim">{s.copy}</p>
            </div>
          </div>
        ))}
      </section>
    );
  }

  return (
    <div ref={wrapperRef} className="relative z-10 h-[420vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {SCREENS.map((s, i) => (
          <div key={s.word} data-story-layer className="absolute inset-0 will-change-[opacity]">
            <img
              data-story-img
              src={s.img}
              alt={s.alt}
              loading={i === 0 ? "eager" : "lazy"}
              className="h-full w-full scale-105 object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_45%,rgba(4,7,12,0.25)_0%,rgba(4,7,12,0.82)_100%)]" />
            <div className="scanlines absolute inset-0" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div data-story-word className="px-5 text-center">
                <p className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.4em] text-volt-400">
                  0{i + 1} — 04
                </p>
                <h2
                  className={`font-display font-black uppercase leading-[0.9] tracking-tight [font-size:clamp(3rem,12vw,10rem)] ${
                    i === 3 ? "text-ember-400" : "text-ink"
                  }`}
                  style={{
                    textShadow:
                      i === 3
                        ? "0 0 60px rgba(247,155,30,0.35)"
                        : "0 0 60px rgba(63,220,255,0.25)",
                  }}
                >
                  {s.word}
                </h2>
              </div>
            </div>

            <div className="absolute bottom-10 left-0 right-0">
              <p className="mx-auto max-w-md px-5 text-center text-sm leading-relaxed text-ink/85 sm:text-base">
                {s.copy}
              </p>
            </div>
          </div>
        ))}

        {/* indicador lateral */}
        <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-3 md:flex">
          {SCREENS.map((s, i) => (
            <span
              key={s.word}
              className={`block h-8 w-[3px] transition-all duration-500 ${
                i === active ? "bg-volt-400 shadow-[0_0_12px_rgba(63,220,255,0.8)]" : "bg-ink/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

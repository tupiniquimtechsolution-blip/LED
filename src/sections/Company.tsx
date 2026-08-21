import { useLayoutEffect, useRef } from "react";
import { assets } from "../config/assets";
import { business } from "../config/business";
import { gsap, prefersReducedMotion, setupGsap } from "../lib/gsapSetup";
import CountUp from "../components/CountUp";
import Reveal from "../components/Reveal";
import SectionTag from "../components/SectionTag";

/** CONHEÇA A P1LED — showroom, números, mapa e presença nacional. */
export default function Company() {
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setupGsap();
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-company-img]",
        { yPercent: 8 },
        {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: imgWrapRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        },
      );
    }, imgWrapRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="empresa" className="relative z-10 scroll-mt-20 border-t border-line bg-night-900/40">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          {/* imagens com parallax */}
          <div ref={imgWrapRef} className="relative">
            <div className="img-led-wrap led-frame relative aspect-[4/3] overflow-hidden border border-line">
              <img
                data-company-img
                src={assets.images.showroomFacade}
                alt="Fachada do showroom P1LED nos Jardins, São Paulo, iluminada à noite"
                loading="lazy"
                className="img-led h-[116%] w-full object-cover"
              />
              <span className="absolute bottom-4 left-4 z-10 border border-ink/15 bg-night-950/85 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-ink">
                Showroom · Jardins — São Paulo
              </span>
            </div>
            <div className="img-led-wrap relative -mt-16 ml-auto aspect-[16/10] w-[62%] overflow-hidden border border-line shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]">
              <img
                src={assets.images.teamInstallation}
                alt="Equipe técnica da P1LED instalando módulos de LED"
                loading="lazy"
                className="img-led h-full w-full object-cover"
              />
              <span className="absolute bottom-3 right-3 z-10 bg-night-950/85 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-volt-400">
                Instalação própria
              </span>
            </div>

            {/* stats */}
            <div className="mt-12 grid grid-cols-2 gap-px border border-line bg-line/60">
              {business.stats.map((s) => (
                <div key={s.label} className="group bg-night-900 p-6 transition-colors duration-300 hover:bg-night-800">
                  <p className="font-display text-3xl font-extrabold tracking-tight text-volt-400 sm:text-4xl">
                    {s.isYear ? (
                      s.value
                    ) : (
                      <CountUp value={s.value} prefix={s.prefix} />
                    )}
                    {!s.isYear && s.suffix && <span className="text-xl text-ember-400">{s.suffix}</span>}
                  </p>
                  <p className="mt-2 text-xs leading-snug text-dim">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* institucional */}
          <div className="flex flex-col justify-center">
            <SectionTag index="07" label="Conheça a P1LED" />
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-ink sm:text-5xl">
              Showroom em São Paulo, <span className="text-volt-400">instalação no Brasil inteiro.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-dim">
              A P1LED é líder no segmento de painéis de LED indoor e outdoor. Trabalhamos com todos
              os modelos a pronta entrega, do P1 ao P10, com serviço completo na compra e na
              locação: da elaboração do projeto à instalação e transmissão do conteúdo.
            </p>
            <p className="mt-4 leading-relaxed text-dim">
              Painéis certificados internacionalmente — CE, FCC, CCC, ISO 9001, RoHS — com LEDs
              premium Nationstar e processamento NovaStar. Qualidade que a gente comprova.
            </p>

            {/* endereço */}
            <div className="led-frame mt-9 border border-line bg-night-900/70 p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-faint">Endereço</p>
                  <address className="mt-2 text-sm not-italic leading-relaxed text-ink">
                    {business.address.street}
                    <br />
                    {business.address.district} — {business.address.city}/{business.address.state}
                  </address>
                </div>
                <div className="flex flex-col gap-2">
                  <a href={business.mapsDirections} target="_blank" rel="noreferrer" className="btn btn-volt !px-4 !py-2.5">
                    Traçar rota
                  </a>
                  <a href={`mailto:${business.email}`} className="btn btn-ghost !px-4 !py-2.5">
                    {business.email}
                  </a>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-5">
                <a href={business.phoneHref} className="font-mono text-xs text-dim transition-colors hover:text-volt-400">
                  Televendas {business.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${business.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-dim transition-colors hover:text-volt-400"
                >
                  WhatsApp {business.whatsappDisplay}
                </a>
              </div>
            </div>

            {/* regionais */}
            <div className="mt-8">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-faint">
                O Brasil, pixel por pixel — regionais
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {business.regionalOffices.map((r) => (
                  <li key={r.city}>
                    <a
                      href={r.href}
                      className="group flex items-baseline gap-2 border border-line bg-night-900/60 px-3 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-volt-400/50"
                    >
                      <span className="text-xs font-semibold text-ink">{r.city}</span>
                      <span className="font-mono text-[0.62rem] text-faint transition-colors group-hover:text-volt-400">
                        {r.phone}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* mapa */}
        <Reveal className="mt-16">
          <div className="led-frame relative border border-line">
            <iframe
              title="Mapa — showroom P1LED, Rua Estados Unidos, 2186, Jardins, São Paulo"
              src={business.mapsEmbed}
              loading="lazy"
              className="map-dark h-[380px] w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <span className="pointer-events-none absolute left-4 top-4 z-10 border border-ink/15 bg-night-950/90 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-volt-400">
              ● Showroom P1LED — Jardins
            </span>
          </div>
        </Reveal>

        {/* certificações */}
        <div className="mt-14">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-faint">
            Qualidade que a gente comprova — certificações
          </p>
          <ul className="mt-5 grid gap-px border border-line bg-line/60 sm:grid-cols-2 lg:grid-cols-4">
            {business.certifications.map((c) => (
              <li key={c.sigla} className="group bg-night-900 p-5 transition-colors duration-300 hover:bg-night-800">
                <p className="font-display text-lg font-bold text-ember-400 transition-colors group-hover:text-ember-300">
                  {c.sigla}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-dim">{c.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

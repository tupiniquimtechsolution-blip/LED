import Reveal from "../components/Reveal";
import SectionTag from "../components/SectionTag";

const STEPS = [
  {
    n: "01",
    title: "Projeto sob medida",
    copy: "Desenhado para cada ambiente, com integração arquitetônica e escala visual.",
  },
  {
    n: "02",
    title: "Estrutura metálica",
    copy: "Engenharia estrutural com alto padrão de acabamento e precisão.",
  },
  {
    n: "03",
    title: "Instalação própria",
    copy: "Equipe in-house do início ao fim. Serralheria e montagem com a gente.",
  },
  {
    n: "04",
    title: "Engenharia elétrica",
    copy: "Dimensionamento técnico completo e projeto elétrico dedicado.",
  },
  {
    n: "05",
    title: "Gestão de conteúdo",
    copy: "P1PLAY: plataforma própria de gerenciamento e transmissão, de onde você estiver.",
  },
];

/** Da ideia ao impacto visual — o processo completo, etapa por etapa. */
export default function Process() {
  return (
    <section id="processo" className="relative z-10 scroll-mt-20">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <Reveal>
            <SectionTag index="06" label="Processo" tone="ember" />
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-ink sm:text-5xl">
              Da ideia ao <span className="text-ember-400">impacto visual.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-xl text-sm leading-relaxed text-dim lg:justify-self-end">
              Cada instalação começa com uma pergunta: <em className="text-ink not-italic font-semibold">que experiência esse espaço precisa criar?</em>{" "}
              Do projeto técnico à gestão do conteúdo, a solução completa está aqui — a P1LED cuida
              de tudo com excelência técnica pra você.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-0 top-[27px] hidden h-px w-full bg-line lg:block" />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 110}>
                <li className="group relative lg:pt-0">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                    <span className="relative z-10 flex h-[54px] w-[54px] shrink-0 items-center justify-center border border-line bg-night-900 font-display text-sm font-bold text-volt-400 transition-all duration-500 group-hover:border-volt-400 group-hover:shadow-[0_0_30px_-6px_rgba(63,220,255,0.6)] lg:bg-night-950">
                      {s.n}
                    </span>
                    <h3 className="font-display text-base font-bold uppercase leading-tight text-ink transition-colors duration-300 group-hover:text-volt-300 lg:mt-6">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-dim lg:pr-4">{s.copy}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

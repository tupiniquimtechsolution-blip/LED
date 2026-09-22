import { useState } from "react";
import { cn } from "../lib/utils";
import Reveal from "../components/Reveal";
import SectionTag from "../components/SectionTag";

const FAQS = [
  {
    q: "Qual o melhor painel de LED?",
    a: "A diferença entre os modelos é a distância entre pixels: quanto menor, maior a definição de perto. O P2 tem 2 mm entre lâmpadas; o P10, 10 mm. O melhor painel é o que casa com a distância do seu público — essa é a conta que fazemos junto com você no projeto.",
  },
  {
    q: "Qual painel é ideal pra cada uso?",
    a: "O P10 domina o uso externo: outdoors, postos, palcos e qualquer projeto com público a 10 metros ou mais, com o menor custo por metro. O P2 brilha de perto: stands, vitrines, farmácias e padarias. P3, P5 e P6 são o meio-termo queridinho das lojas: máxima qualidade com investimento acessível.",
  },
  {
    q: "Quanto custa um painel de LED?",
    a: "Depende do modelo e do tamanho do projeto. O P10 é o menor custo do mercado pra grandes formatos; P3, P5 e P6 equilibram preço e qualidade; o P2 entrega o máximo de definição. Você manda as medidas do espaço — pode usar nosso configurador — e devolvemos o orçamento sob projeto.",
  },
  {
    q: "É melhor comprar ou alugar painel de LED?",
    a: "Uso frequente pede compra: lojas, shoppings e quem monetiza o painel vendendo espaço publicitário. Uso pontual pede locação: feiras, shows e eventos. A LUMENIX atende os dois caminhos com o mesmo padrão de instalação.",
  },
  {
    q: "Qual o prazo de garantia da LUMENIX?",
    a: "Garantia exclusiva de até 6 anos (100.000 horas de uso), com compromisso em contrato de peças de reposição do mesmo lote durante todo o período.",
  },
  {
    q: "A LUMENIX possui produtos a pronta entrega?",
    a: "Sim. Todos os nossos modelos, do P1 ao P10, estão disponíveis a pronta entrega.",
  },
  {
    q: "Como gerenciar o conteúdo do meu painel?",
    a: "Com o P1PLAY, nossa plataforma própria de gestão. Você controla o conteúdo do painel à distância, do seu computador, precisando apenas de conexão com a internet.",
  },
];

/** Dúvidas frequentes — respostas oficiais da LUMENIX em acordeão animado. */
export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="relative z-10 scroll-mt-20">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionTag index="10" label="Dúvidas frequentes" tone="ember" />
              <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-ink sm:text-5xl">
                Antes de <span className="text-ember-400">acender.</span>
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-dim">
                As perguntas que mais chegam ao nosso time — respondidas do jeito que a gente
                responde no balcão do showroom.
              </p>
              <a
                href={`https://wa.me/5511963171253?text=${encodeURIComponent("Olá! Tenho uma dúvida sobre painéis de LED.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost mt-8"
              >
                Perguntar no WhatsApp
              </a>
            </Reveal>
          </div>

          <div className="border-t border-line">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 50}>
                  <div className="border-b border-line">
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className={cn("font-mono text-xs transition-colors", isOpen ? "text-ember-400" : "text-faint")}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "font-display text-base font-bold uppercase tracking-tight transition-colors duration-300 sm:text-lg",
                            isOpen ? "text-volt-400" : "text-ink group-hover:text-volt-300",
                          )}
                        >
                          {f.q}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-500",
                          isOpen
                            ? "rotate-45 border-ember-400 text-ember-400"
                            : "border-line text-dim group-hover:border-volt-400/60 group-hover:text-volt-400",
                        )}
                      >
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden>
                          <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.7" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-7 pl-9 text-sm leading-relaxed text-dim sm:pl-10">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

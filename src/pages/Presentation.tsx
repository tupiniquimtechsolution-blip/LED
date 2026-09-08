import { useEffect } from "react";
import { Link } from "react-router-dom";
import { business } from "../config/business";
import { assets } from "../config/assets";
import { projects } from "../config/projects";

/**
 * Página de apresentação em PDF para o cliente.
 * Renderiza um deck visual com screenshots das páginas principais.
 * Permite imprimir em PDF via window.print() com CSS otimizado.
 */
export default function Presentation() {
  useEffect(() => {
    document.title = "LUMENIX — Apresentação Comercial";
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Botão de impressão - visível apenas na tela, não na impressão */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <button
          onClick={handlePrint}
          className="bg-volt-500 hover:bg-volt-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all"
        >
          📄 Imprimir / Salvar PDF
        </button>
        <Link
          to="/"
          className="block mt-2 text-center bg-night-800 hover:bg-night-700 text-white px-6 py-2 rounded-lg text-sm"
        >
          ← Voltar ao site
        </Link>
      </div>

      {/* Conteúdo da apresentação */}
      <div className="max-w-[210mm] mx-auto print:max-w-none">
        {/* CAPA */}
        <section className="min-h-screen flex flex-col justify-center items-center p-12 bg-gradient-to-br from-night-950 via-night-900 to-night-800 text-white print:break-after-page">
          <img src={assets.logo.main} alt="LUMENIX" className="w-64 mb-8" />
          <h1 className="text-6xl font-black text-center mb-6" style={{ fontFamily: "Unbounded, sans-serif" }}>
            Apresentação<br />Comercial
          </h1>
          <p className="text-2xl text-center text-volt-400 mb-12">
            Painéis de LED que transformam<br />ambientes em experiências
          </p>
          <div className="text-center text-dim">
            <p className="text-lg">{business.fullName}</p>
            <p className="text-sm mt-2">{business.address.street} — {business.address.district}</p>
            <p className="text-sm">{business.address.city}/{business.address.state}</p>
            <p className="text-sm mt-4">{business.whatsappDisplay}</p>
            <p className="text-sm">{business.email}</p>
          </div>
        </section>

        {/* SOBRE A EMPRESA */}
        <section className="min-h-screen p-12 bg-white print:break-after-page">
          <h2 className="text-5xl font-black mb-8 text-night-950" style={{ fontFamily: "Unbounded, sans-serif" }}>
            Sobre a LUMENIX
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xl leading-relaxed text-night-800 mb-6">
                {business.headline}
              </p>
              <p className="text-lg leading-relaxed text-night-700 mb-6">
                Desde {business.since}, somos referência no segmento de painéis de LED indoor e outdoor.
                Trabalhamos com todos os modelos a pronta entrega, do P1 ao P10, com serviço completo
                na compra e na locação.
              </p>
              <p className="text-lg leading-relaxed text-night-700">
                Da elaboração do projeto à instalação e transmissão do conteúdo — onde a luz encontra
                a tecnologia.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {business.stats.map((stat) => (
                <div key={stat.label} className="bg-night-900 text-white p-6 rounded-lg">
                  <p className="text-4xl font-black text-volt-400">
                    {stat.isYear ? stat.value : `${stat.prefix}${stat.value.toLocaleString("pt-BR")}`}
                    {!stat.isYear && stat.suffix && <span className="text-2xl">{stat.suffix}</span>}
                  </p>
                  <p className="text-sm mt-2 text-dim">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HERO - PRINT DA PÁGINA PRINCIPAL */}
        <section className="min-h-screen p-12 bg-night-950 print:break-after-page">
          <h2 className="text-4xl font-black mb-8 text-white" style={{ fontFamily: "Unbounded, sans-serif" }}>
            Página Principal — Hero
          </h2>
          <div className="relative aspect-video bg-night-900 rounded-lg overflow-hidden border-4 border-night-700">
            <img
              src={assets.images.heroFacade}
              alt="Hero - Fachada com painel de LED"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-night-950/90 to-transparent flex items-center">
              <div className="p-12">
                <p className="text-volt-400 text-sm font-mono mb-4">
                  Desde 2012 · +5.200 painéis instalados
                </p>
                <h3 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "Unbounded, sans-serif" }}>
                  Transformamos<br />espaços em<br />
                  <span className="text-volt-400">experiências visuais</span>
                </h3>
                <p className="text-dim text-lg max-w-md">
                  Luz que transforma espaços em experiências. Venda e locação do P1 ao P10.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SCROLL NARRATIVO */}
        <section className="min-h-screen p-12 bg-white print:break-after-page">
          <h2 className="text-4xl font-black mb-8 text-night-950" style={{ fontFamily: "Unbounded, sans-serif" }}>
            Scroll Narrativo — Experiência Imersiva
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { word: "VISIBILIDADE", img: assets.images.heroFacade },
              { word: "IMPACTO", img: assets.images.eventStage },
              { word: "TECNOLOGIA", img: assets.images.indoorVitrine },
              { word: "LUMENIX", img: assets.images.showroomFacade },
            ].map((item, i) => (
              <div key={i} className="relative aspect-video bg-night-900 rounded-lg overflow-hidden">
                <img src={item.img} alt={item.word} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-night-950/60 flex items-center justify-center">
                  <p className="text-5xl font-black text-white" style={{ fontFamily: "Unbounded, sans-serif" }}>
                    {item.word}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg text-night-700 mt-6">
            Narrativa de scroll fixada: 4 telas, 4 palavras, zoom lento nos projetos reais.
          </p>
        </section>

        {/* PIXEL EXPERIENCE */}
        <section className="min-h-screen p-12 bg-night-900 text-white print:break-after-page">
          <h2 className="text-4xl font-black mb-8" style={{ fontFamily: "Unbounded, sans-serif" }}>
            Experiência Pixel — Do P10 ao P2
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="relative aspect-video bg-night-950 rounded-lg overflow-hidden border-2 border-volt-400">
              <img
                src={assets.images.pixelDemo}
                alt="Simulação de resolução"
                className="w-full h-full object-cover"
                style={{ filter: "blur(8px)" }}
              />
              <div className="absolute top-4 left-4 bg-night-950/90 px-3 py-1 text-xs font-mono text-volt-400">
                P10 — 10m
              </div>
            </div>
            <div className="relative aspect-video bg-night-950 rounded-lg overflow-hidden border-2 border-ember-400">
              <img
                src={assets.images.pixelDemo}
                alt="Simulação de resolução"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-night-950/90 px-3 py-1 text-xs font-mono text-ember-400">
                P2 — 2m
              </div>
            </div>
          </div>
          <p className="text-lg mt-6 text-dim">
            Experiência interativa: a imagem começa grosseiramente pixelizada e ganha definição
            conforme o scroll — uma aula sobre distância de leitura.
          </p>
        </section>

        {/* INDOOR × OUTDOOR */}
        <section className="min-h-screen p-12 bg-white print:break-after-page">
          <h2 className="text-4xl font-black mb-8 text-night-950" style={{ fontFamily: "Unbounded, sans-serif" }}>
            Indoor × Outdoor — Comparador Interativo
          </h2>
          <div className="relative aspect-video bg-night-900 rounded-lg overflow-hidden">
            <img
              src={assets.images.indoorVitrine}
              alt="Indoor"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 w-1/2 overflow-hidden">
              <img
                src={assets.images.outdoorEmpena}
                alt="Outdoor"
                className="absolute inset-0 w-[200%] h-full object-cover"
              />
            </div>
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-ember-400"></div>
            <div className="absolute left-4 top-4 bg-night-950/90 px-3 py-1 text-xs font-mono text-volt-400">
              INDOOR
            </div>
            <div className="absolute right-4 top-4 bg-night-950/90 px-3 py-1 text-xs font-mono text-ember-400">
              OUTDOOR
            </div>
          </div>
          <p className="text-lg text-night-700 mt-6">
            Divisor arrastável (mouse, toque e teclado) para comparar ambientes indoor e outdoor.
          </p>
        </section>

        {/* PROJETOS */}
        <section className="min-h-screen p-12 bg-night-950 text-white print:break-after-page">
          <h2 className="text-4xl font-black mb-8" style={{ fontFamily: "Unbounded, sans-serif" }}>
            Projetos LUMENIX
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {projects.slice(0, 6).map((project) => (
              <div key={project.slug} className="relative aspect-video bg-night-900 rounded-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-night-950 to-transparent flex items-end p-4">
                  <div>
                    <p className="text-xs font-mono text-volt-400 mb-1">{project.category}</p>
                    <p className="text-sm font-bold">{project.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg mt-6 text-dim">
            Galeria horizontal com scroll GSAP. Cada projeto possui página individual com galeria,
            contexto e CTA para orçamento.
          </p>
        </section>

        {/* CONFIGURADOR */}
        <section className="min-h-screen p-12 bg-white print:break-after-page">
          <h2 className="text-4xl font-black mb-8 text-night-950" style={{ fontFamily: "Unbounded, sans-serif" }}>
            Configurador de Projeto
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-night-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Simule seu painel em segundos</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-dim mb-2">Ambiente</p>
                  <div className="flex gap-2">
                    {["Indoor", "Outdoor", "Semi"].map((a) => (
                      <div key={a} className="px-4 py-2 bg-night-800 rounded text-sm">{a}</div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-dim mb-2">Modelo (pitch)</p>
                  <div className="flex gap-2">
                    {["P2", "P3", "P6"].map((p) => (
                      <div key={p} className="px-4 py-2 bg-night-800 rounded text-sm font-bold">{p}</div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-dim mb-2">Medidas</p>
                  <div className="flex gap-4">
                    <div className="flex-1 bg-night-800 rounded p-3">
                      <p className="text-xs text-dim">Largura</p>
                      <p className="text-2xl font-bold">4.0 m</p>
                    </div>
                    <div className="flex-1 bg-night-800 rounded p-3">
                      <p className="text-xs text-dim">Altura</p>
                      <p className="text-2xl font-bold">2.5 m</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-night-950 text-white p-8 rounded-lg border-2 border-volt-400">
              <h3 className="text-2xl font-bold mb-6 text-volt-400">Dimensionamento</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-5xl font-black text-volt-400">10.0</p>
                  <p className="text-sm text-dim">metros quadrados</p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-dim">Resolução</p>
                    <p className="font-bold">2000 × 1250 px</p>
                  </div>
                  <div>
                    <p className="text-dim">Módulos</p>
                    <p className="font-bold">≈ 195</p>
                  </div>
                  <div>
                    <p className="text-dim">Leitura</p>
                    <p className="font-bold">a partir de 2m</p>
                  </div>
                  <div>
                    <p className="text-dim">Brilho</p>
                    <p className="font-bold">800–1.500 nits</p>
                  </div>
                </div>
                <button className="w-full bg-ember-500 hover:bg-ember-400 text-night-950 font-bold py-3 rounded mt-4">
                  Enviar simulação pelo WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section className="min-h-screen p-12 bg-night-900 text-white print:break-after-page">
          <h2 className="text-4xl font-black mb-8" style={{ fontFamily: "Unbounded, sans-serif" }}>
            Central de Vendas
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Fale com a gente</h3>
              <div className="space-y-4">
                <div className="bg-night-800 p-4 rounded">
                  <p className="text-volt-400 font-bold">Televendas São Paulo</p>
                  <p className="text-lg">{business.phoneDisplay}</p>
                </div>
                <div className="bg-night-800 p-4 rounded">
                  <p className="text-volt-400 font-bold">WhatsApp</p>
                  <p className="text-lg">{business.whatsappDisplay}</p>
                </div>
                <div className="bg-night-800 p-4 rounded">
                  <p className="text-volt-400 font-bold">E-mail</p>
                  <p className="text-lg">{business.email}</p>
                </div>
                <div className="bg-night-800 p-4 rounded">
                  <p className="text-volt-400 font-bold">Showroom</p>
                  <p className="text-sm">{business.address.street}</p>
                  <p className="text-sm">{business.address.district} — {business.address.city}/{business.address.state}</p>
                </div>
              </div>
            </div>
            <div className="bg-night-950 p-8 rounded-lg border-2 border-line">
              <h3 className="text-2xl font-bold mb-6">Solicitar orçamento</h3>
              <div className="space-y-4">
                <div className="bg-night-900 p-3 rounded">
                  <p className="text-xs text-dim">Nome *</p>
                  <p className="text-sm">Seu nome</p>
                </div>
                <div className="bg-night-900 p-3 rounded">
                  <p className="text-xs text-dim">Empresa</p>
                  <p className="text-sm">Nome da empresa</p>
                </div>
                <div className="bg-night-900 p-3 rounded">
                  <p className="text-xs text-dim">Tipo de projeto *</p>
                  <p className="text-sm">Compra</p>
                </div>
                <div className="bg-night-900 p-3 rounded">
                  <p className="text-xs text-dim">Descreva o projeto *</p>
                  <p className="text-sm">Medidas aproximadas do espaço...</p>
                </div>
                <button className="w-full bg-ember-500 hover:bg-ember-400 text-night-950 font-bold py-3 rounded">
                  Solicitar orçamento
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ENCERRAMENTO */}
        <section className="min-h-screen flex flex-col justify-center items-center p-12 bg-gradient-to-br from-night-950 via-night-900 to-night-800 text-white">
          <img src={assets.logo.main} alt="LUMENIX" className="w-48 mb-8" />
          <h2 className="text-5xl font-black text-center mb-6" style={{ fontFamily: "Unbounded, sans-serif" }}>
            Obrigado pela<br />atenção
          </h2>
          <p className="text-2xl text-center text-volt-400 mb-12">
            Onde a luz encontra a tecnologia
          </p>
          <div className="text-center text-dim space-y-2">
            <p className="text-lg">{business.fullName}</p>
            <p>{business.address.street} — {business.address.city}/{business.address.state}</p>
            <p className="mt-4">{business.whatsappDisplay}</p>
            <p>{business.email}</p>
            <p className="mt-4 text-sm">www.lumenix.com.br</p>
          </div>
        </section>
      </div>

      {/* CSS de impressão */}
      <style>{`
        @media print {
          body {
            background: white !important;
          }
          section {
            page-break-after: always;
            break-after: page;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

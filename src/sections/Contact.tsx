import { useState } from "react";
import { business } from "../config/business";
import { waLink } from "../lib/utils";
import Reveal from "../components/Reveal";
import SectionTag from "../components/SectionTag";

const CHANNELS = [
  {
    title: "Televendas São Paulo",
    value: business.phoneDisplay,
    href: business.phoneHref,
    action: "Ligue agora",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "WhatsApp",
    value: business.whatsappDisplay,
    href: `https://wa.me/${business.whatsappNumber}`,
    action: "Converse com o time",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" stroke="currentColor" strokeWidth="1.7" fill="none" />
        <path d="M9 8.5c.5 2.5 3 5 5.5 5.5l1-1.5 2 1c-.5 1.5-1.5 2-3 2-3.5 0-7-3.5-7-7 0-1.5.5-2.5 2-3l1 2L9 8.5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "E-mail",
    value: business.email,
    href: `mailto:${business.email}`,
    action: "Envie sua mensagem",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path d="M3 6h18v12H3zM3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Todo o Brasil",
    value: "Atendimento nacional",
    href: business.mapsDirections,
    action: "Showroom nos Jardins — SP",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" fill="none" />
        <path d="M3 12h18M12 3c3 3.5 3 14 0 18-3-4-3-14.5 0-18Z" stroke="currentColor" strokeWidth="1.7" fill="none" />
      </svg>
    ),
  },
];

/** Central de vendas + formulário que abre o WhatsApp com a mensagem pronta. */
export default function Contact() {
  const [form, setForm] = useState({ nome: "", empresa: "", contato: "", tipo: "Compra", msg: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.msg.trim()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const message = [
      `Olá! Pedido de orçamento pelo site da P1LED:`,
      `• Nome: ${form.nome}`,
      form.empresa ? `• Empresa: ${form.empresa}` : "",
      form.contato ? `• Contato: ${form.contato}` : "",
      `• Interesse: ${form.tipo}`,
      `• Projeto: ${form.msg}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(message), "_blank", "noopener");
    window.setTimeout(() => setStatus("idle"), 2500);
  };

  return (
    <section id="contato" className="relative z-10 scroll-mt-20 border-t border-line bg-night-900/40">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr]">
          {/* canais */}
          <div>
            <Reveal>
              <SectionTag index="11" label="Central de vendas" />
              <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-ink sm:text-5xl">
                Fale com a gente <span className="text-volt-400">pelo canal que for melhor.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-dim">
                {business.address.street} — {business.address.district},{" "}
                {business.address.city}/{business.address.state}. Atendimento rápido em todo o
                território nacional.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-px border border-line bg-line/60 sm:grid-cols-2">
              {CHANNELS.map((c, i) => (
                <Reveal key={c.title} delay={i * 80} className="h-full">
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex h-full flex-col bg-night-900 p-6 transition-colors duration-300 hover:bg-night-800"
                  >
                    <span className="text-volt-400 transition-transform duration-300 group-hover:-translate-y-1">
                      {c.icon}
                    </span>
                    <span className="mt-4 font-display text-sm font-bold uppercase tracking-tight text-ink">
                      {c.title}
                    </span>
                    <span className="mt-1 text-sm font-semibold text-ember-400">{c.value}</span>
                    <span className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-faint transition-colors group-hover:text-volt-400">
                      {c.action} ↗
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* formulário */}
          <Reveal delay={150}>
            <form onSubmit={submit} className="led-frame relative border border-line bg-night-950 p-7 sm:p-10">
              <div className="pointer-events-none absolute inset-0 [background:radial-gradient(500px_280px_at_0%_100%,rgba(247,155,30,0.07),transparent_60%)]" />
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.26em] text-faint">
                Solicitar orçamento — resposta via WhatsApp
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.22em] text-dim">Nome *</span>
                  <input className="field" value={form.nome} onChange={set("nome")} placeholder="Seu nome" required />
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.22em] text-dim">Empresa</span>
                  <input className="field" value={form.empresa} onChange={set("empresa")} placeholder="Nome da empresa" />
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.22em] text-dim">Telefone / E-mail</span>
                  <input className="field" value={form.contato} onChange={set("contato")} placeholder="(11) 9 0000-0000" />
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.22em] text-dim">Tipo de projeto *</span>
                  <select className="field" value={form.tipo} onChange={set("tipo")}>
                    {["Compra", "Locação", "Residencial", "Eventos", "Comercial / Varejo", "Publicidade DOOH"].map((o) => (
                      <option key={o} value={o} className="bg-night-900">
                        {o}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.22em] text-dim">
                    Descreva o projeto *
                  </span>
                  <textarea
                    className="field min-h-[110px] resize-y"
                    value={form.msg}
                    onChange={set("msg")}
                    placeholder="Medidas aproximadas do espaço, local de instalação, uso pretendido…"
                    required
                  />
                </label>
              </div>

              <button type="submit" className="btn btn-ember mt-7 w-full justify-center">
                {status === "sending" ? "Abrindo WhatsApp…" : "Solicitar orçamento"}
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden>
                  <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
                </svg>
              </button>
              {status === "error" && (
                <p className="mt-3 text-center font-mono text-[0.65rem] uppercase tracking-[0.18em] text-signal-500">
                  Preencha ao menos nome e descrição do projeto.
                </p>
              )}
              <p className="mt-4 text-center font-mono text-[0.6rem] uppercase tracking-[0.16em] text-faint">
                Ao enviar, você continua a conversa direto com nosso time no WhatsApp.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

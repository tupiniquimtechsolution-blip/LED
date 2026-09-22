import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProject, nextProject, projects } from "../config/projects";
import { business } from "../config/business";
import { scrollToId, waLink } from "../lib/utils";
import Reveal from "../components/Reveal";
import Scramble from "../components/Scramble";

/** Página de case individual — /projetos/[slug]. */
export default function CasePage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  const next = nextProject(project.slug);
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const waMsg = `Olá! Vi o projeto "${project.title}" no site da LUMENIX e quero algo parecido para o meu espaço.`;

  return (
    <article className="relative z-10 pt-[72px]">
      {/* breadcrumb */}
      <nav
        aria-label="Trilha de navegação"
        className="mx-auto flex max-w-[1400px] items-center gap-3 px-5 pt-8 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-faint sm:px-8"
      >
        <Link to="/" className="transition-colors hover:text-volt-400">
          Início
        </Link>
        <span className="text-line">/</span>
        <Link to="/" onClick={() => window.setTimeout(() => scrollToId("projetos"), 120)} className="transition-colors hover:text-volt-400">
          Projetos
        </Link>
        <span className="text-line">/</span>
        <span className="truncate text-volt-400">{project.title}</span>
      </nav>

      {/* hero do case */}
      <header className="mx-auto mt-8 max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="border border-volt-400/40 bg-night-900 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-volt-400">
            {project.category}
          </span>
          <span className="bg-ember-500 px-3 py-1.5 font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-night-950">
            {project.regime}
          </span>
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-faint">
            {project.environment} · {project.location}
          </span>
        </div>
        <h1 className="mt-6 max-w-4xl font-display text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          <Scramble text={project.title} speed={18} />
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-dim">{project.summary}</p>

        <div className="img-led-wrap led-frame relative mt-10 aspect-[16/9] overflow-hidden border border-line">
          <img src={project.image} alt={project.title} className="img-led h-full w-full object-cover" />
          <span className="absolute bottom-4 left-4 z-10 border border-ink/15 bg-night-950/85 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-volt-400">
            {project.line}
          </span>
        </div>
      </header>

      {/* corpo */}
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.5fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-faint">Contexto do projeto</p>
            <div className="mt-5 space-y-5">
              {project.context.map((p, i) => (
                <p key={i} className="leading-relaxed text-dim">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="border border-line px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-dim">
                  {t}
                </span>
              ))}
            </div>
            <a href={waLink(waMsg)} target="_blank" rel="noreferrer" className="btn btn-ember mt-9 w-full justify-center">
              Quero um projeto assim
            </a>
            <p className="mt-4 text-center font-mono text-[0.6rem] uppercase tracking-[0.18em] text-faint">
              {business.whatsappDisplay} · {business.phoneDisplay}
            </p>
          </Reveal>
        </aside>

        <div>
          <div className="grid gap-5">
            {project.gallery.map((g, i) => (
              <Reveal key={g + i} delay={i * 80}>
                <figure className="img-led-wrap group relative overflow-hidden border border-line">
                  <img src={g} alt={`${project.title} — imagem ${i + 1}`} loading="lazy" className="img-led aspect-[16/10] w-full object-cover" />
                  <figcaption className="absolute bottom-3 right-3 z-10 bg-night-950/85 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-faint">
                    {String(i + 1).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 font-mono text-[0.6rem] uppercase leading-relaxed tracking-[0.16em] text-faint">
            Fotografias representativas do tipo de instalação (TEMP_REPLACE_ME) — os registros
            oficiais de cada case serão publicados com aprovação da LUMENIX.
          </p>
        </div>
      </div>

      {/* próximo projeto */}
      <Link
        to={`/projetos/${next.slug}`}
        className="group relative block overflow-hidden border-t border-line"
        data-cursor
      >
        <div className="img-led-wrap absolute inset-0">
          <img src={next.image} alt="" aria-hidden className="img-led h-full w-full object-cover opacity-30 transition-opacity duration-700 group-hover:opacity-50" />
          <div className="absolute inset-0 bg-night-950/70" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-6 px-5 py-16 sm:px-8">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-volt-400">Próximo projeto</p>
            <p className="mt-3 font-display text-2xl font-extrabold uppercase tracking-tight text-ink transition-colors duration-300 group-hover:text-volt-300 sm:text-4xl">
              {next.title}
            </p>
          </div>
          <span className="flex h-16 w-16 items-center justify-center border border-line text-ink transition-all duration-500 group-hover:rotate-45 group-hover:border-volt-400 group-hover:text-volt-400">
            <svg viewBox="0 0 16 16" className="h-5 w-5" aria-hidden>
              <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.6" fill="none" />
            </svg>
          </span>
        </div>
      </Link>

      {/* relacionados */}
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-faint">Mais projetos</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              to={`/projetos/${p.slug}`}
              className="group border border-line bg-night-900/50 transition-colors duration-300 hover:border-volt-400/50"
            >
              <div className="img-led-wrap aspect-[16/10]">
                <img src={p.image} alt={p.title} loading="lazy" className="img-led h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-faint">{p.category}</p>
                <p className="mt-2 font-display text-sm font-bold uppercase leading-snug text-ink group-hover:text-volt-300">
                  {p.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

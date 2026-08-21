import { business } from "../config/business";
import { socialPosts } from "../config/social";
import Reveal from "../components/Reveal";
import SectionTag from "../components/SectionTag";

const TYPE_COLOR: Record<string, string> = {
  REEL: "text-signal-500 border-signal-500/50",
  POST: "text-volt-400 border-volt-400/50",
  PROJETO: "text-ember-400 border-ember-400/50",
  BASTIDORES: "text-dim border-line",
};

/** P1LED EM AÇÃO — mural no ritmo do feed oficial, sem depender da API do Instagram. */
export default function SocialWall() {
  return (
    <section id="social" className="relative z-10 scroll-mt-20">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionTag index="08" label="Mural social" tone="ember" />
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-5xl">
              P1LED <span className="text-ember-400">em ação</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <a
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 border border-line bg-night-900/60 px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-ember-400/60"
            >
              <span className="h-2 w-2 rounded-full bg-signal-500 animate-pulse-dot" />
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-dim transition-colors group-hover:text-ember-400">
                seguir {business.instagramHandle}
              </span>
              <svg viewBox="0 0 16 16" className="h-3 w-3 text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden>
                <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.7" fill="none" />
              </svg>
            </a>
          </Reveal>
        </div>

        <div className="mt-12 columns-2 gap-5 lg:columns-4 [&>*]:mb-5">
          {socialPosts.map((post, i) => (
            <Reveal key={post.id} delay={(i % 4) * 90} className="break-inside-avoid">
              <a
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
                className="group block border border-line bg-night-900/60 transition-colors duration-500 hover:border-ember-400/60"
                data-cursor
              >
                <div className="img-led-wrap relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.caption}
                    loading="lazy"
                    className={`img-led w-full object-cover ${post.tall ? "aspect-[3/4]" : "aspect-square"}`}
                  />
                  <span
                    className={`absolute left-3 top-3 z-10 border bg-night-950/85 px-2.5 py-1 font-mono text-[0.58rem] font-bold uppercase tracking-[0.2em] ${TYPE_COLOR[post.type]}`}
                  >
                    {post.type === "REEL" ? "▸ reel" : post.type}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-sm leading-snug text-dim transition-colors duration-300 group-hover:text-ink">
                    {post.caption}
                  </p>
                  <p className="mt-3 flex items-center justify-between font-mono text-[0.6rem] uppercase tracking-[0.2em] text-faint">
                    {business.instagramHandle}
                    <span className="text-ember-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      abrir ↗
                    </span>
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center font-mono text-[0.62rem] uppercase tracking-[0.24em] text-faint">
          Conteúdo representativo do dia a dia P1LED — o feed oficial vive em{" "}
          <a href={business.instagram} target="_blank" rel="noreferrer" className="text-volt-400 hover:underline">
            instagram.com/p1led
          </a>
        </p>
      </div>
    </section>
  );
}

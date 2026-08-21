# ASSET_SOURCES — Rastreabilidade de mídia do site P1LED

> Registro obrigatório de origem de cada asset utilizado no site.
> Todas as fotografias atuais são **representativas (TEMP_REPLACE_ME)**, geradas para o
> ambiente de desenvolvimento porque a extração binária direta do Instagram e do Google
> Maps não é tecnicamente executável neste ambiente (login wall / termos de uso). Elas são
> servidas pelas URLs do gerador (mapeadas em `src/config/assets.ts`) e possuem caminho
> local semântico de destino em `assets.localTargets` para a substituição pelo material real.
> As fontes reais de substituição estão mapeadas abaixo e no `CLIENT_REPLACEMENT_GUIDE.md`.
> **Nenhum crédito de terceiro foi removido; nenhuma instalação real foi falsamente atribuída.**

---

## LOGO

| Asset | Origem | Uso | Observação |
|---|---|---|---|
| `public/client-assets/logo/logo-p1led.svg` | Wordmark tipográfico de trabalho (desenvolvimento) | Header, menu, footer, favicon | **TEMP_REPLACE_ME** — substituir pela versão oficial (foto de perfil do Instagram `@p1led` / arquivo vetorial fornecido pela P1LED). Não redesenhar definitivamente sem o arquivo original. |

---

## FOTOGRAFIAS (TEMP_REPLACE_ME → substituir por material real)

| Asset | Origem planejada (prioridade) | Publicação / referência | Uso no site |
|---|---|---|---|
| `hero/hero-fachada-led-noite.jpg` | Instagram `@p1led` (Reels de fachadas/empenas iluminadas) → Google Maps (fotos externas do showroom) | Perfil oficial: https://www.instagram.com/p1led/ | Hero (fundo fullscreen), narrativa "VISIBILIDADE", case `fachada-media-noite` |
| `projects/palco-evento-led.jpg` | Instagram `@p1led` (palcos, eventos, transmissão) | Reels de eventos no perfil oficial | Narrativa "IMPACTO", segmento Eventos, case `palco-congresso-led` |
| `indoor/indoor-vitrine-led.jpg` | Instagram `@p1led` (vitrines, Óticas Gassi, Movida) | Mídia oficial: `painel-de-led-indoor-oticas-gassi.png`, `painel-de-led-indoor-movida.png` (p1led.com.br) | Narrativa "TECNOLOGIA", lado INDOOR do comparador, segmento Varejo, case `vitrine-premium-shopping` |
| `outdoor/outdoor-empena-led.jpg` | Instagram `@p1led` (outdoor Pirelli, Sleep House) | Mídia oficial: `painel-de-led-outdoor-pirelli.png`, `painel-de-led-outdoor-sleep-house.png` | lado OUTDOOR do comparador, mural social, case `empena-dooh-avenida` |
| `pixel/pixel-demo-beija-flor.jpg` | Conteúdo de demonstração (arte rica em detalhe/cor) — não representa projeto real | — | Experiência Pixel (base da simulação de resolução P10→P2). Mantém marcação de "simulação educacional". |
| `projects/igreja-auditorio-led.jpg` | Instagram `@p1led` (telões para igrejas) | Perfil oficial | Case `auditorio-igreja-led` |
| `facility/showroom-fachada-noite.jpg` | **Google Maps — P1LED (fotos do estabelecimento)** → site oficial | `showroom-p1led-fachada-jardins-sp.jpg` (p1led.com.br) | Narrativa "P1LED", seção Conheça a P1LED, case `showroom-experiencias` |
| `projects/piscina-residencial-led.jpg` | Instagram `@p1led` — contexto real "Cine Piscina" citado no perfil | Bio oficial: "Nada igual ao Cine Piscina"; mídia `CaseHome2-scaled.webp` | Segmento Residencial, mural social, case `cine-piscina-residencial` |
| `team/tecnico-instalacao-led.jpg` | Instagram `@p1led` (bastidores de montagem/instalação) | Perfil oficial | Seção institucional (instalação própria), galerias de cases, mural social |
| `projects/estudio-virtual-production.jpg` | Site oficial / Instagram (case Netflix — Nason Filmes) | Mídia oficial: `painel-de-led-virtual-production-nahson-netflix.webp` | Case `estudio-producao-virtual`, mural social |

---

## VÍDEOS

| Asset | Status | Observação |
|---|---|---|
| `videos/hero.mp4` | **Não incluído (TEMP_REPLACE_ME)** | Prioridade máxima de substituição: exportar Reel oficial do `@p1led` (painel em funcionamento, montagem ou fachada), converter p/ H.264 web (~5–8 Mb), adicionar poster. O Hero já está preparado para receber `<video muted playsinline loop autoplay poster>` sem mudança de layout. |

---

## DADOS INSTITUCIONAIS (reais, verificados em fonte pública)

- Razão de marca, tagline e promessa: perfil oficial `@p1led` ("O painel de LED certo muda tudo. Criamos o que você sente. +8.000 painéis instalados. Desde 2007.") — Instagram.
- Endereço, telefones, e-mail, linha P1–P10, APEX ONE, certificações, segmentos, FAQ, clientes: **p1led.com.br** (coletados da página oficial).
- Instalação TV Cultura: publicação oficial `instagram.com/p/C9nVa5WpJ-0/` (referência de contexto, não usada como asset binário).
- Regionais (Campinas, RJ, MG, Curitiba, POA, Goiânia, Fortaleza): página oficial.

---

## NOTAS DE QUALIDADE / DIREITOS

- Nenhuma captura de interface do Instagram (sem barras, comentários, @ sobrepostos).
- Nenhum "antes e depois" foi falsificado — o comparador é um divisor conceitual Indoor × Outdoor, claramente etiquetado.
- A Experiência Pixel declara explicitamente que não associa projeto real a especificação técnica.
- Publicação comercial definitiva exige **aprovação final dos materiais pela P1LED** (ver `CLIENT_REPLACEMENT_GUIDE.md`).

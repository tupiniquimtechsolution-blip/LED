# CLIENT_REPLACEMENT_GUIDE — Guia de substituição de assets (P1LED)

Este guia permite trocar **qualquer mídia representativa** pelo material oficial da P1LED
**sem alterar uma linha de código**: todos os caminhos estão centralizados em
`src/config/assets.ts` e os arquivos seguem nomes semânticos dentro de
`public/client-assets/`.

Regra geral: **mantenha o mesmo nome de arquivo** (ou ajuste apenas o mapeamento em
`src/config/assets.ts`) e o site inteiro passa a usar o material real.

---

## 1. ASSETS EXTRAÍDOS DO INSTAGRAM (a coletar / aprovar)

Fonte primária: **https://www.instagram.com/p1led/**

| Arquivo atual (TEMP_REPLACE_ME) | Material real recomendado | Onde é usado |
|---|---|---|
| `public/client-assets/hero/hero-fachada-led-noite.jpg` | Frame de Reel de fachada/empena LED à noite (1920×1080, exportar em alta) | Hero, narrativa "VISIBILIDADE", case fachada |
| `public/client-assets/projects/palco-evento-led.jpg` | Foto/Reel de palco de evento com painel (1600×1000) | Narrativa "IMPACTO", segmento Eventos, case palco |
| `public/client-assets/indoor/indoor-vitrine-led.jpg` | Foto de vitrine/loja (ex.: Óticas Gassi, Movida) | Comparador INDOOR, segmento Varejo, case vitrine |
| `public/client-assets/outdoor/outdoor-empena-led.jpg` | Foto de outdoor/empena (ex.: Pirelli, Sleep House) | Comparador OUTDOOR, case empena, mural social |
| `public/client-assets/projects/igreja-auditorio-led.jpg` | Foto de telão em igreja/auditório | Case auditório |
| `public/client-assets/projects/piscina-residencial-led.jpg` | Foto real do **Cine Piscina** (contexto citado no perfil) | Segmento Residencial, mural, case piscina |
| `public/client-assets/team/tecnico-instalacao-led.jpg` | Foto de bastidor/instalação da equipe | Institucional, galerias |
| `public/client-assets/projects/estudio-virtual-production.jpg` | Frame do case de produção virtual (Netflix/Nason) | Case estúdio |

**Vídeo do Hero (prioridade máxima):** exportar um Reel oficial (painel em funcionamento),
salvar como `public/client-assets/videos/hero.mp4` (H.264, ~5–8 MB, sem áudio) + poster
`hero-poster.jpg`, e apontar `assets.videoHero` em `src/config/assets.ts`. Configuração
recomendada já prevista no projeto: `muted`, `playsInline`, `loop`, `poster`, sem autoplay
com áudio; substituir por imagem no mobile.

---

## 2. ASSETS EXTRAÍDOS DO GOOGLE MAPS (a coletar / aprovar)

Fonte: perfil do estabelecimento **P1LED — Rua Estados Unidos, 2186, Jardins, São Paulo**
(mapa já incorporado ao vivo na seção "Conheça a P1LED").

| Arquivo atual (TEMP_REPLACE_ME) | Material real recomendado |
|---|---|
| `public/client-assets/facility/showroom-fachada-noite.jpg` | Foto oficial da fachada do showroom (o site oficial já possui: `showroom-p1led-fachada-jardins-sp.jpg`) |
| (opcional) `facility/showroom-terraco.jpg`, `facility/showroom-recepcao.jpg`, `facility/showroom-sala-experiencias.jpg` | Fotos internas do Google Maps / site oficial para enriquecer a galeria institucional |

---

## 3. PLACEHOLDERS AINDA UTILIZADOS (inventário TEMP_REPLACE_ME)

> Nota: neste ambiente de desenvolvimento, as 10 fotografias são servidas pelas URLs do
> gerador (constantes em `src/config/assets.ts → images.*`). O destino local de cada uma
> está em `assets.localTargets` — a troca se resume a: salvar o arquivo real no caminho
> indicado e editar **uma única linha** em `assets.ts` apontando para ele.

| Item | Localização | Ação |
|---|---|---|
| 10 fotografias representativas | URLs geradas → destino `public/client-assets/**` (lista acima) | Salvar arquivo real no caminho de destino e atualizar a URL correspondente em `assets.ts` |
| Logo (wordmark tipográfico) | `public/client-assets/logo/logo-p1led.svg` + componente `src/components/Logo.tsx` | Fornecer logo oficial (SVG/PNG alta); o componente aceita troca direta |
| Vídeo do Hero | `src/config/assets.ts → videoHero: null` | Exportar Reel oficial e preencher o campo |
| Contadores de engajamento do mural | `src/config/social.ts` | Opcional: exibir curtidas/comentários reais somente via API oficial aprovada |

> Nada mais no site usa placeholder: textos, produtos, FAQ, contatos, regionais e
> certificações são conteúdo real da P1LED (fonte: p1led.com.br e @p1led).

---

## 4. ASSETS OFICIAIS EM ALTA RESOLUÇÃO RECOMENDADOS

Para a publicação comercial definitiva, solicitar à P1LED:

1. **Logo vetorial** (SVG/AI) nas versões principal, clara, escura e ícone.
2. **Fotografias originais** dos 8 cases (sem compressão de rede social), em WebP/JPG
   nas larguras: 1920 (hero/desktop), 1200 (cards), 800 (mobile) — o site já aplica
   `loading="lazy"` e `object-position` por contexto.
3. **Vídeos**: 1 Reel para o Hero + 3–4 vídeos curtos (montagem, evento, fachada, showroom)
   em H.264 ≤ 8 MB com poster.
4. **Aprovação formal** de cada mídia substituída antes do deploy (direitos e rastreabilidade
   registrados em `ASSET_SOURCES.md`).

---

## 5. CHECKLIST RÁPIDO DE TROCA

- [ ] Copiar arquivo real para `public/client-assets/<pasta>/` com o **mesmo nome**
- [ ] Converter para WebP quando possível (manter extensão mapeada em `assets.ts`)
- [ ] Conferir enquadramento (o site usa `object-cover`; ajustar `object-position` na
      seção correspondente se o painel sair do centro)
- [ ] Remover a tag `TEMP_REPLACE_ME` correspondente neste documento
- [ ] Atualizar a linha do asset em `ASSET_SOURCES.md` com a publicação de origem
- [ ] Rodar `npm run build` e validar visualmente Hero, comparador, Experiência Pixel e cases

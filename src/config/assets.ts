/**
 * Mapa central de assets do site P1LED.
 *
 * IMPORTANTE (rastreamento — TEMP_REPLACE_ME):
 * As imagens abaixo são fotografias representativas geradas para o ambiente de
 * desenvolvimento (o download binário direto do Instagram/Google Maps não é
 * tecnicamente executável aqui). Elas são servidas pelas URLs do gerador e já
 * estão mapeadas para os caminhos locais semânticos em `localTargets`:
 * quando a P1LED fornecer (ou aprovar) o material real, basta salvar o arquivo
 * no caminho indicado e trocar a URL pela string do caminho local — nenhum
 * outro código precisa mudar.
 *
 * Registros de origem: ASSET_SOURCES.md · Guia de troca: CLIENT_REPLACEMENT_GUIDE.md
 */

const GENERATED_CDN = "https://image.qwenlm.ai/generated-images";

export const assets = {
  logo: {
    /** Wordmark de trabalho — substituir pelo logo oficial em alta */
    main: "/client-assets/logo/logo-p1led.svg",
  },
  images: {
    heroFacade: `${GENERATED_CDN}/eeb34ef1-f94d-4d4f-825f-ae9d771a9a0e/_result.png`,
    eventStage: `${GENERATED_CDN}/af1160c4-74b6-47f7-b4c4-ae3057ede5e3/_result.png`,
    indoorVitrine: `${GENERATED_CDN}/61ddb17e-4ea9-4882-b5d8-d34dd910bf4e/_result.png`,
    outdoorEmpena: `${GENERATED_CDN}/5f94d95b-8780-48bf-9f5a-3edd35af6f93/_result.png`,
    pixelDemo: `${GENERATED_CDN}/1ff0049d-1c90-4f4a-96d7-33337c23f2d4/_result.png`,
    churchAuditorium: `${GENERATED_CDN}/d6cf309d-66b0-4b6c-bcb1-a5528e6eea60/_result.png`,
    showroomFacade: `${GENERATED_CDN}/c8fc1d1a-7b64-4994-9644-69ca6eeeed79/_result.png`,
    poolResidential: `${GENERATED_CDN}/fc5d722c-75ed-4658-a2dd-540410925d15/_result.png`,
    teamInstallation: `${GENERATED_CDN}/f6e3961a-6724-4291-8b2c-4508156deae1/_result.png`,
    virtualProduction: `${GENERATED_CDN}/46ff2af0-901d-436b-9dfb-7e2d3137a874/_result.png`,
  },
  /**
   * Caminhos locais semânticos — destino dos arquivos reais na substituição.
   * (estrutura public/client-assets/ prevista no escopo do projeto)
   */
  localTargets: {
    heroFacade: "/client-assets/hero/hero-fachada-led-noite.jpg",
    eventStage: "/client-assets/projects/palco-evento-led.jpg",
    indoorVitrine: "/client-assets/indoor/indoor-vitrine-led.jpg",
    outdoorEmpena: "/client-assets/outdoor/outdoor-empena-led.jpg",
    pixelDemo: "/client-assets/pixel/pixel-demo-beija-flor.jpg",
    churchAuditorium: "/client-assets/projects/igreja-auditorio-led.jpg",
    showroomFacade: "/client-assets/facility/showroom-fachada-noite.jpg",
    poolResidential: "/client-assets/projects/piscina-residencial-led.jpg",
    teamInstallation: "/client-assets/team/tecnico-instalacao-led.jpg",
    virtualProduction: "/client-assets/projects/estudio-virtual-production.jpg",
  },
  /**
   * Referência dos materiais REAIS a serem coletados/substituídos
   * (fontes públicas oficiais da P1LED).
   */
  realSources: {
    instagram: "https://www.instagram.com/p1led/",
    googleMaps: "https://www.google.com/maps?q=P1LED+Rua+Estados+Unidos+2186+São+Paulo",
    officialSite: "https://www.p1led.com.br/",
    siteMediaExamples: [
      "https://www.p1led.com.br/wp-content/uploads/2026/07/showroom-p1led-fachada-jardins-sp.jpg",
      "https://www.p1led.com.br/wp-content/uploads/2026/07/showroom-p1led-terraco-painel-de-led.jpg",
      "https://www.p1led.com.br/wp-content/uploads/2026/04/CaseLeroy-2-scaled.webp",
      "https://www.p1led.com.br/wp-content/uploads/2026/07/painel-de-led-virtual-production-nahson-netflix.webp",
      "https://www.p1led.com.br/wp-content/uploads/2026/04/CaseHome2-scaled.webp",
    ],
  },
  /** TEMP_REPLACE_ME: vídeo real do Reels (@p1led) quando exportado (muted/loop/playsInline + poster) */
  videoHero: null as string | null,
} as const;

export type Assets = typeof assets;

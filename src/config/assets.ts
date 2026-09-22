/**
 * Mapa central de assets do site LUMENIX.
 * URLs de imagens geradas para demonstração.
 */
export const assets = {
  logo: {
    main: "/client-assets/logo/logo-lumenix.svg",
  },
  images: {
    /** Hero — shopping mall com LED wall curvo */
    heroFacade: "https://image.qwenlm.ai/generated-images/e5a1fa49-4966-4bca-bb7b-ea4000f603c1/_result.png",
    /** Palco de evento com painel de LED */
    eventStage: "https://image.qwenlm.ai/generated-images/99450b01-cd7f-42ac-9b5c-7f5cf07d26c6/_result.png",
    /** Vitrine indoor fine pitch */
    indoorVitrine: "https://image.qwenlm.ai/generated-images/aaf67529-6548-412d-8ef0-3a258e8a68a0/_result.png",
    /** Empena outdoor */
    outdoorEmpena: "https://image.qwenlm.ai/generated-images/4c202382-0495-4f83-ab58-ae28622e5e9b/_result.png",
    /** Base da Experiência Pixel (água-viva neon) */
    pixelDemo: "https://image.qwenlm.ai/generated-images/f898ea0a-f04b-4d16-b53f-758b6193a0e9/_result.png",
    /** Igreja / auditório */
    churchAuditorium: "https://image.qwenlm.ai/generated-images/35a5e84d-01c6-4b97-8798-e17ccbf42e86/_result.png",
    /** Fachada do showroom */
    showroomFacade: "https://image.qwenlm.ai/generated-images/06f09240-655f-4b1c-87bb-0f2b386db281/_result.png",
    /** Cine Piscina residencial */
    poolResidential: "https://image.qwenlm.ai/generated-images/6a9f00fd-f8d0-4d6d-ac5a-0f42583d8227/_result.png",
    /** Equipe técnica instalando módulos */
    teamInstallation: "https://image.qwenlm.ai/generated-images/4af078fb-1c29-411f-9bd3-544ae76f05f4/_result.png",
    /** Estúdio de produção virtual */
    virtualProduction: "https://image.qwenlm.ai/generated-images/409d1ea1-4576-4288-953b-6d4561873946/_result.png",
  },
  videoHero: null as string | null,
} as const;

export type Assets = typeof assets;

import { assets } from "./assets";

export interface SocialPost {
  id: string;
  type: "REEL" | "POST" | "PROJETO" | "BASTIDORES";
  caption: string;
  image: string;
  tall?: boolean;
}

/**
 * Mural social — legendas no tom do perfil oficial @p1led.
 * As imagens são representativas (TEMP_REPLACE_ME); o feed oficial continua
 * sendo a fonte viva: https://www.instagram.com/p1led/
 */
export const socialPosts: SocialPost[] = [
  {
    id: "s1",
    type: "POST",
    caption: "+8.000 painéis instalados. Desde 2007. Criamos o que você sente.",
    image: assets.images.heroFacade,
  },
  {
    id: "s2",
    type: "PROJETO",
    caption: "Instalação de painel de LED indoor elevando a qualidade das transmissões — orgulho de cada projeto entregue.",
    image: assets.images.indoorVitrine,
    tall: true,
  },
  {
    id: "s3",
    type: "REEL",
    caption: "APEX Series — a nova geração de processamento visual chegou.",
    image: assets.images.eventStage,
  },
  {
    id: "s4",
    type: "REEL",
    caption: "Nada igual ao Cine Piscina. A experiência começa em casa.",
    image: assets.images.poolResidential,
    tall: true,
  },
  {
    id: "s5",
    type: "BASTIDORES",
    caption: "Equipe própria em ação: estrutura, instalação e sinal conferido módulo a módulo.",
    image: assets.images.teamInstallation,
  },
  {
    id: "s6",
    type: "PROJETO",
    caption: "O Brasil, pixel por pixel. Cada ponto aceso é a nossa equipe chegando.",
    image: assets.images.outdoorEmpena,
    tall: true,
  },
  {
    id: "s7",
    type: "BASTIDORES",
    caption: "1.500 m² de painéis prontos para locação — do congresso ao show.",
    image: assets.images.virtualProduction,
  },
  {
    id: "s8",
    type: "POST",
    caption: "Showroom nos Jardins: venha ver o P1 ao P10 acesos, de perto.",
    image: assets.images.showroomFacade,
  },
];

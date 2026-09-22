import { assets } from "./assets";

export interface SocialPost {
  id: string;
  type: "REEL" | "POST" | "PROJETO" | "BASTIDORES";
  caption: string;
  image: string;
  tall?: boolean;
}

/**
 * Mural social — legendas no tom do perfil oficial @lumenix.led.
 */
export const socialPosts: SocialPost[] = [
  {
    id: "s1",
    type: "POST",
    caption: "+5.200 painéis instalados. Desde 2012. Onde a luz encontra a tecnologia.",
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
    caption: "Nova geração de processamento visual chegou. Luz que transforma.",
    image: assets.images.eventStage,
  },
  {
    id: "s4",
    type: "REEL",
    caption: "A experiência começa em casa. Cine Piscina — cinema na área de lazer.",
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
    caption: "1.200 m² de painéis prontos para locação — do festival ao show.",
    image: assets.images.virtualProduction,
  },
  {
    id: "s8",
    type: "POST",
    caption: "Showroom na Paulista: venha ver o P1 ao P10 acesos, de perto.",
    image: assets.images.showroomFacade,
  },
];

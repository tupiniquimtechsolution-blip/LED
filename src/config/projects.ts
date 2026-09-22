import { assets } from "./assets";

export interface Project {
  slug: string;
  title: string;
  category: string;
  environment: "Indoor" | "Outdoor" | "Residencial" | "Estúdio";
  regime: "Venda" | "Locação";
  location: string;
  line: string;
  summary: string;
  context: string[];
  image: string;
  gallery: string[];
  tags: string[];
}

/**
 * Projetos representativos da LUMENIX.
 */
export const projects: Project[] = [
  {
    slug: "fachada-media-shopping",
    title: "Fachada de mídia em shopping premium",
    category: "DOOH · Fachada",
    environment: "Outdoor",
    regime: "Venda",
    location: "São Paulo — SP",
    line: "Linha Outdoor",
    summary: "Projeto de comunicação visual em fachada de shopping center, com conteúdo de alto brilho visível à distância.",
    context: [
      "Uma fachada de shopping premium pede uma superfície impossível de ignorar. O projeto integrou o painel à arquitetura do edifício, com estrutura metálica própria, engenharia elétrica dedicada e proteção IP65 para operação contínua.",
      "O conteúdo é gerenciado remotamente pelo LUMENIX Play, permitindo trocar a programação da tela sem deslocamento técnico.",
    ],
    image: assets.images.heroFacade,
    gallery: [assets.images.heroFacade, assets.images.outdoorEmpena, assets.images.teamInstallation],
    tags: ["IP65", "Alto brilho", "LUMENIX Play", "Estrutura própria"],
  },
  {
    slug: "palco-festival-led",
    title: "Palco de festival com painel de LED",
    category: "Eventos · Palco",
    environment: "Outdoor",
    regime: "Locação",
    location: "Atendimento nacional",
    line: "Locação de eventos",
    summary: "Painel de LED modular para palco de festival, com montagem rápida e equipe técnica durante todo o evento.",
    context: [
      "Estrutura modular montada pela equipe própria da LUMENIX, do projeto à transmissão do conteúdo. A locação inclui operação técnica durante todo o evento, garantindo sinal estável do primeiro ao último minuto.",
      "São mais de 1.200 m² de painéis disponíveis para locação em todo o Brasil — do festival corporativo ao show.",
    ],
    image: assets.images.eventStage,
    gallery: [assets.images.eventStage, assets.images.virtualProduction, assets.images.teamInstallation],
    tags: ["Locação", "Equipe técnica", "Montagem rápida"],
  },
  {
    slug: "vitrine-loja-conceito",
    title: "Vitrine com painel fine pitch",
    category: "Varejo · Vitrine",
    environment: "Indoor",
    regime: "Venda",
    location: "São Paulo — SP",
    line: "Linha Indoor",
    summary: "Painel indoor de alta definição para vitrine de loja conceito, com leitura nítida a curta distância.",
    context: [
      "No varejo, a vitrine tem segundos para converter quem passa com pressa. O painel fine pitch entrega imagem nítida mesmo a poucos metros, com brilho calibrado para o conforto visual de quem olha de perto.",
      "A gestão de conteúdo fica no LUMENIX Play: a loja troca campanhas do próprio computador, com conexão à internet.",
    ],
    image: assets.images.indoorVitrine,
    gallery: [assets.images.indoorVitrine, assets.images.churchAuditorium, assets.images.teamInstallation],
    tags: ["Fine pitch", "LUMENIX Play", "Varejo"],
  },
  {
    slug: "empena-dooh-avenida",
    title: "Empena publicitária em avenida",
    category: "DOOH · Empena",
    environment: "Outdoor",
    regime: "Venda",
    location: "São Paulo — SP",
    line: "Linha Outdoor",
    summary: "Grande formato outdoor para publicidade DOOH, projetado para operar sob sol direto.",
    context: [
      "Empena de grande formato com brilho de 5.000 a 10.000 nits — visível ao meio-dia, impossível de perder ao entardecer. Projeto estrutural e elétrico executados pela própria LUMENIX.",
      "Um formato que também gera renda: o espaço pode ser comercializado para publicidade de terceiros.",
    ],
    image: assets.images.outdoorEmpena,
    gallery: [assets.images.outdoorEmpena, assets.images.heroFacade, assets.images.teamInstallation],
    tags: ["10.000 nits", "IP65", "DOOH", "Grande formato"],
  },
  {
    slug: "auditorio-igreja-led",
    title: "Auditório com painel de palco",
    category: "Igrejas · Auditório",
    environment: "Indoor",
    regime: "Venda",
    location: "Atendimento nacional",
    line: "Linha Indoor",
    summary: "Painel de LED para palco de auditório, com imagem confortável para longos períodos de culto.",
    context: [
      "Projetos para igrejas e auditórios pedem equilíbrio: definição para quem está perto, brilho confortável para quem assiste por horas. A linha indoor entrega os dois, com refresh acima de 1920 Hz — sem cintilação em câmera.",
      "Instalação própria, do reforço estrutural ao acabamento, com garantia contratual de até 6 anos.",
    ],
    image: assets.images.churchAuditorium,
    gallery: [assets.images.churchAuditorium, assets.images.indoorVitrine, assets.images.teamInstallation],
    tags: ["1920 Hz", "Garantia 6 anos", "Instalação própria"],
  },
  {
    slug: "cine-piscina-residencial",
    title: "Cine Piscina — cinema na área de lazer",
    category: "Residencial · Piscina",
    environment: "Residencial",
    regime: "Venda",
    location: "Projeto residencial",
    line: "Linha Outdoor",
    summary: "Tela de LED na área da piscina para cinema ao ar livre — a experiência começa em casa.",
    context: [
      "A experiência começa em casa: painel outdoor instalado na área de lazer transforma a piscina em sala de cinema ao entardecer. Proteção contra água e poeira para conviver com o ambiente de piscina.",
      "Um dos formatos residenciais mais pedidos no showroom da LUMENIX na Av. Paulista.",
    ],
    image: assets.images.poolResidential,
    gallery: [assets.images.poolResidential, assets.images.showroomFacade, assets.images.teamInstallation],
    tags: ["Residencial", "IP65", "Área de lazer"],
  },
  {
    slug: "estudio-producao-virtual",
    title: "Estúdio de produção virtual em LED",
    category: "Estúdios · Virtual Production",
    environment: "Estúdio",
    regime: "Venda",
    location: "São Paulo — SP",
    line: "Linha Indoor Fine Pitch",
    summary: "Volume de LED para produção virtual: cenários renderizados em tempo real atrás da câmera.",
    context: [
      "Produções audiovisuais usam volumes de LED para gravar cenas com cenários virtuais renderizados em tempo real — a mesma família de tecnologia usada em grandes produções de streaming.",
      "Painéis fine pitch com cor fiel e refresh alto, exigência técnica para capturar em câmera sem artefatos.",
    ],
    image: assets.images.virtualProduction,
    gallery: [assets.images.virtualProduction, assets.images.eventStage, assets.images.teamInstallation],
    tags: ["Fine pitch", "8K+", "Tempo real"],
  },
  {
    slug: "showroom-experiencias",
    title: "Showroom LUMENIX na Paulista",
    category: "Institucional · Showroom",
    environment: "Indoor",
    regime: "Venda",
    location: "São Paulo — SP",
    line: "Todas as linhas",
    summary: "O espaço onde todos os projetos começam: painéis acesos do P1 ao P10 para ver de perto.",
    context: [
      "Na Av. Paulista, 1578, o showroom da LUMENIX reúne painéis em funcionamento para o cliente comparar pitch, brilho e acabamento antes de decidir.",
      "Atendimento com projeto sob medida, orçamento e visita técnica em todo o Brasil.",
    ],
    image: assets.images.showroomFacade,
    gallery: [assets.images.showroomFacade, assets.images.poolResidential, assets.images.teamInstallation],
    tags: ["Showroom", "Paulista — SP", "P1 ao P10"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const nextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};

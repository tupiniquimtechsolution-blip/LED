/**
 * Linha de produtos P1LED — descrições baseadas no material oficial (p1led.com.br).
 * Regra oficial da marca: o número do painel indica a distância de leitura em metros.
 */
export type ProductGroup = "indoor" | "outdoor";

export interface Product {
  id: string;
  pitch: string; // ex.: "P2"
  pitchMm: number;
  group: ProductGroup;
  title: string;
  tagline: string;
  uses: string[];
  distance: string;
  brightness?: string;
  highlight?: boolean;
}

export const productLine: Product[] = [
  {
    id: "p1",
    pitch: "P1",
    pitchMm: 1.25,
    group: "indoor",
    title: "Ultra-Fine Pitch",
    tagline:
      "Leitura a partir de 1 metro: definição máxima pra showrooms, estúdios e salas nobres, onde cada detalhe importa.",
    uses: ["Showrooms", "Estúdios", "Salas nobres"],
    distance: "1 m",
    brightness: "900+ nits",
  },
  {
    id: "p2",
    pitch: "P2",
    pitchMm: 2,
    group: "indoor",
    title: "Fine Pitch",
    tagline:
      "Leitura a partir de 2 metros, com investimento racional pra lojas premium, corporativo e recepções.",
    uses: ["Lojas premium", "Corporativo", "Recepções"],
    distance: "2 m",
    highlight: true,
  },
  {
    id: "p3",
    pitch: "P3",
    pitchMm: 3,
    group: "indoor",
    title: "O versátil da linha",
    tagline:
      "Leitura a partir de 3 metros pra vitrines, igrejas, eventos e telas médias e grandes.",
    uses: ["Vitrines", "Igrejas", "Eventos"],
    distance: "3 m",
    highlight: true,
  },
  {
    id: "p4",
    pitch: "P4",
    pitchMm: 4,
    group: "indoor",
    title: "Telas amplas",
    tagline:
      "Leitura a partir de 4 metros: telas maiores com excelente leitura pra palcos, auditórios e áreas amplas.",
    uses: ["Palcos", "Auditórios", "Áreas amplas"],
    distance: "4 m",
  },
  {
    id: "p5",
    pitch: "P5",
    pitchMm: 5,
    group: "outdoor",
    title: "O standard da linha",
    tagline:
      "Leitura a partir de 5 metros pra grandes áreas internas e semiabertas.",
    uses: ["Grandes áreas", "Semiabertos"],
    distance: "5 m",
  },
  {
    id: "p6",
    pitch: "P6",
    pitchMm: 6,
    group: "outdoor",
    title: "Outdoor alto brilho",
    tagline:
      "Outdoor com alto brilho: leitura a partir de 6 metros pra fachadas e áreas externas.",
    uses: ["Fachadas", "Áreas externas"],
    distance: "6 m",
    highlight: true,
  },
  {
    id: "p8",
    pitch: "P8",
    pitchMm: 8,
    group: "outdoor",
    title: "Grande formato",
    tagline:
      "Grande formato outdoor: leitura a partir de 8 metros, perfeito mesmo sob sol direto.",
    uses: ["Empenas", "Sol direto"],
    distance: "8 m",
  },
  {
    id: "p10",
    pitch: "P10",
    pitchMm: 10,
    group: "outdoor",
    title: "Escala máxima",
    tagline:
      "Escala máxima: leitura a partir de 10 metros pra empenas, DOOH e publicidade rodoviária.",
    uses: ["DOOH", "Publicidade rodoviária"],
    distance: "10 m",
    highlight: true,
  },
];

export const groupSpecs: Record<ProductGroup, { label: string; specs: string[]; copy: string }> = {
  indoor: {
    label: "Indoor",
    specs: ["Refresh acima de 1920 Hz", "Vida útil de 120.000 horas", "Garantia real de até 6 anos", "P1PLAY incluso"],
    copy:
      "Pra ambientes internos com público próximo: showrooms, lojas, corporativo, igrejas, estúdios e eventos. Pixel fino pra leitura de perto e brilho calibrado pro conforto visual.",
  },
  outdoor: {
    label: "Outdoor",
    specs: ["5.000 a 10.000 nits", "Proteção IP65 — chuva e poeira", "Visível sob sol direto", "Gabinetes reforçados"],
    copy:
      "Pra áreas externas e sol direto: fachadas, empenas, postos e publicidade DOOH. Brilho de 5.000 a 10.000 nits e proteção IP65 contra chuva e poeira.",
  },
};

/** Processador visual da marca (conteúdo oficial). */
export const apexOne = {
  name: "P1 APEX ONE",
  headline: "O processador visual que faz tudo funcionar junto.",
  features: [
    { sigla: "SMART VIDEO CONTROL™", desc: "Controlador de vídeo otimizado para aplicações profissionais em painéis LED." },
    { sigla: "8K+", desc: "Processamento estável para conteúdos acima de 8K." },
    { sigla: "MULTI INPUT SYSTEM™", desc: "Compatível com múltiplas fontes de vídeo para diferentes aplicações." },
    { sigla: "RELIABLE SIGNAL ARCHITECTURE™", desc: "Arquitetura de sinal confiável para operação contínua e estável." },
    { sigla: "EASY CONFIG ENGINE™", desc: "Configuração simplificada para rápida instalação e operação." },
  ],
};

/** Segmentos atendidos (conteúdo oficial). */
export const segments = [
  {
    id: "residencial",
    env: "Residencial · Indoor e Outdoor",
    title: "A experiência começa em casa.",
    copy:
      "Transformamos ambientes residenciais em experiências imersivas. Da piscina ao home cinema, cada projeto é desenhado para surpreender quem mora e quem visita.",
    tags: ["Home cinema", "Piscina", "Área de lazer", "Sala de jogos", "Área gourmet"],
  },
  {
    id: "eventos",
    env: "Eventos · Palcos e Transmissão",
    title: "O palco que o público filma primeiro.",
    copy:
      "Shows, congressos e live marketing com estrutura modular, montagem rápida e equipe técnica cuidando de tudo durante o evento inteiro.",
    tags: ["Shows", "Feiras", "Congressos", "Locação", "Transmissão"],
  },
  {
    id: "varejo",
    env: "Varejo · Corporativo e Igrejas",
    title: "A vitrine que para quem tinha pressa.",
    copy:
      "Do PDV à fachada, o LED transforma presença em resultado. Projetos para varejo, corporativo, igrejas e publicidade DOOH.",
    tags: ["Varejo e PDV", "Publicidade DOOH", "Corporativo", "Igrejas", "Fachadas"],
  },
] as const;

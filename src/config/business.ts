/**
 * Dados institucionais REAIS da P1LED.
 * Fontes: p1led.com.br (página oficial) e perfil oficial @p1led no Instagram.
 */
export const business = {
  name: "P1LED",
  fullName: "P1LED — Painéis de LED",
  tagline: "O painel de LED certo muda tudo.",
  promise: "Criamos o que você sente.",
  headline: "Painéis de LED que transformam espaços em experiências que ninguém esquece.",
  since: 2007,
  whatsappNumber: "5511963171253",
  whatsappDisplay: "(11) 9 6317-1253",
  phoneDisplay: "(11) 2626-2460",
  phoneHref: "tel:+551126262460",
  email: "contato@p1led.com.br",
  site: "https://www.p1led.com.br/",
  instagram: "https://www.instagram.com/p1led/",
  instagramHandle: "@p1led",
  facebook: "https://www.facebook.com/P1Led/",
  linkedin: "https://br.linkedin.com/company/p1led",
  address: {
    street: "Rua Estados Unidos, 2186",
    district: "Jardins",
    city: "São Paulo",
    state: "SP",
    country: "Brasil",
  },
  mapsQuery: "P1LED Rua Estados Unidos, 2186 Jardins São Paulo",
  mapsEmbed:
    "https://www.google.com/maps?q=P1LED%20Rua%20Estados%20Unidos%2C%202186%20%E2%80%94%20Jardins%2C%20S%C3%A3o%20Paulo&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=P1LED+Rua+Estados+Unidos+2186+Jardins+S%C3%A3o+Paulo",
  /** Números publicados pela própria empresa (site oficial e Instagram). */
  stats: [
    { value: 2007, label: "no mercado desde", prefix: "", suffix: "", isYear: true },
    { value: 8000, label: "painéis instalados pelo Brasil", prefix: "+", suffix: "" },
    { value: 1500, label: "m² de painéis disponíveis p/ locação", prefix: "", suffix: " m²" },
    { value: 7, label: "regionais de atendimento no país", prefix: "", suffix: "" },
  ] as Array<{ value: number; label: string; prefix: string; suffix: string; isYear?: boolean }>,
  regionalOffices: [
    { city: "Campinas", phone: "(19) 3113-0017", href: "tel:+551931130017" },
    { city: "Rio de Janeiro", phone: "(21) 3590-2037", href: "tel:+552135902037" },
    { city: "Minas Gerais", phone: "(31) 3681-3557", href: "tel:+553136813557" },
    { city: "Curitiba", phone: "(41) 3068-7028", href: "tel:+554130687028" },
    { city: "Porto Alegre", phone: "(51) 3061-1464", href: "tel:+555130611464" },
    { city: "Goiânia", phone: "(62) 4101-2237", href: "tel:+556241012237" },
    { city: "Fortaleza", phone: "(85) 3055-2010", href: "tel:+558530552010" },
  ],
  certifications: [
    { sigla: "CE", desc: "Conformidade Europeia: segurança elétrica e eletromagnética." },
    { sigla: "FCC", desc: "Certificação americana de emissão e interferência eletromagnética." },
    { sigla: "CCC", desc: "Certificação compulsória chinesa de segurança do produto." },
    { sigla: "ISO 9001", desc: "Gestão de qualidade: processo auditado da fábrica à entrega." },
    { sigla: "RoHS", desc: "Green Product: livre de substâncias perigosas ao ambiente." },
    { sigla: "IP65", desc: "Proteção contra água e poeira: pronto pra área externa." },
    { sigla: "NovaStar", desc: "Processamento e gerenciamento wireless: controle de onde você estiver." },
    { sigla: "Nationstar", desc: "LEDs premium: cor fiel e brilho estável por anos." },
  ],
  clients: [
    "Netflix", "Carrefour", "Leroy Merlin", "Pirelli", "Pepsi", "iFood", "Motorola",
    "Outback", "Oxxo", "Movida", "Swift", "BYD", "Vivara", "Seara", "Neon", "99",
    "Crefisa", "Dove", "BIG", "Midea", "Mobly", "Universal", "TV Cultura", "Vitacon",
  ],
  services: [
    "Projeto sob medida",
    "Estrutura metálica",
    "Instalação própria",
    "Engenharia elétrica",
    "Gestão de conteúdo — P1PLAY",
  ],
} as const;

export type Business = typeof business;

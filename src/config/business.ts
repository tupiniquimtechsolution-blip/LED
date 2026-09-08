/**
 * Dados institucionais da LUMENIX — empresa fictícia de painéis de LED.
 */
export const business = {
  name: "LUMENIX",
  fullName: "LUMENIX — Soluções em Painéis de LED",
  tagline: "Luz que transforma espaços em experiências.",
  promise: "Onde a luz encontra a tecnologia.",
  headline: "Painéis de LED que transformam ambientes em experiências inesquecíveis.",
  since: 2012,
  whatsappNumber: "5511984217733",
  whatsappDisplay: "(11) 9 8421-7733",
  phoneDisplay: "(11) 3045-8800",
  phoneHref: "tel:+551130458800",
  email: "contato@lumenix.com.br",
  site: "https://www.lumenix.com.br/",
  instagram: "https://www.instagram.com/lumenix.led/",
  instagramHandle: "@lumenix.led",
  facebook: "https://www.facebook.com/lumenix.led/",
  linkedin: "https://br.linkedin.com/company/lumenix-led",
  address: {
    street: "Av. Paulista, 1578",
    district: "Bela Vista",
    city: "São Paulo",
    state: "SP",
    country: "Brasil",
  },
  mapsQuery: "LUMENIX Av. Paulista, 1578 Bela Vista São Paulo",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+Paulista,+1578+Bela+Vista+São+Paulo&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Av.+Paulista+1578+Bela+Vista+São+Paulo",
  stats: [
    { value: 2012, label: "no mercado desde", prefix: "", suffix: "", isYear: true as const },
    { value: 5200, label: "painéis instalados em todo o Brasil", prefix: "+", suffix: "" },
    { value: 1200, label: "m² de painéis disponíveis para locação", prefix: "", suffix: " m²" },
    { value: 6, label: "regionais de atendimento no país", prefix: "", suffix: "" },
  ] as Array<{ value: number; label: string; prefix: string; suffix: string; isYear?: boolean }>,
  regionalOffices: [
    { city: "Campinas", phone: "(19) 3521-4400", href: "tel:+551935214400" },
    { city: "Rio de Janeiro", phone: "(21) 3289-7700", href: "tel:+552132897700" },
    { city: "Belo Horizonte", phone: "(31) 3245-6600", href: "tel:+553132456600" },
    { city: "Curitiba", phone: "(41) 3322-8800", href: "tel:+554133228800" },
    { city: "Porto Alegre", phone: "(51) 3264-5500", href: "tel:+555132645500" },
    { city: "Brasília", phone: "(61) 3034-9900", href: "tel:+556130349900" },
  ],
  certifications: [
    { sigla: "CE", desc: "Conformidade Europeia: segurança elétrica e eletromagnética." },
    { sigla: "FCC", desc: "Certificação americana de emissão e interferência eletromagnética." },
    { sigla: "ISO 9001", desc: "Gestão de qualidade: processo auditado da fábrica à entrega." },
    { sigla: "RoHS", desc: "Green Product: livre de substâncias perigosas ao ambiente." },
    { sigla: "IP65", desc: "Proteção contra água e poeira: pronto pra área externa." },
    { sigla: "NovaStar", desc: "Processamento e gerenciamento wireless de última geração." },
    { sigla: "Nationstar", desc: "LEDs premium: cor fiel e brilho estável por anos." },
    { sigla: "UL", desc: "Certificação de segurança elétrica para mercado norte-americano." },
  ],
  clients: [
    "Natura", "Havaianas", "Nubank", "iFood", "Rappi", "Magazine Luiza", "Americanas",
    "Casas Bahia", "Samsung", "Apple", "Nike", "Adidas", "Coca-Cola", "Pepsi", "Red Bull",
    "Netflix", "Spotify", "Uber", "99", "Mercado Livre", "Shopee", "Amazon", "Google",
  ],
  services: [
    "Projeto sob medida",
    "Estrutura metálica",
    "Instalação própria",
    "Engenharia elétrica",
    "Gestão de conteúdo — LUMENIX Play",
  ],
} as const;

export type Business = typeof business;

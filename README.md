# LUMENIX — Site Premium de Painéis de LED

Website premium para a **LUMENIX**, empresa fictícia especializada em soluções com painéis de LED. Desenvolvido com React, TypeScript, Vite, Tailwind CSS v4 e GSAP.

## 🎨 Identidade Visual

- **Paleta**: Violeta elétrico (#b366ff) + Verde neon (#5cff7a) sobre preto profundo
- **Tipografia**: Unbounded (display), Archivo (body), JetBrains Mono (mono)
- **Estilo**: Premium, tecnológico, imersivo

## 🚀 Funcionalidades Implementadas

### Experiências Interativas
- **Hero Fullscreen**: Imagem com Ken Burns + parallax GSAP
- **Scroll Narrativo**: 4 telas (VISIBILIDADE → IMPACTO → TECNOLOGIA → LUMENIX) com zoom lento
- **Experiência Pixel**: Simulação P10→P2 com canvas e ScrollTrigger
- **Comparador Indoor × Outdoor**: Slider arrastável (mouse, toque, teclado)
- **Cursor customizado**: Desktop only, com estados hover/active
- **Grid de pixels ambiente**: Canvas animado com pixels LED "respirando"

### Seções Comerciais
- **Soluções**: 3 segmentos (Residencial, Eventos, Varejo) + linha P1–P10
- **Projetos**: Galeria horizontal com scroll GSAP + páginas de case individuais
- **Configurador**: Cálculo de área, resolução e módulos → orçamento via WhatsApp
- **FAQ**: Acordeão animado com 7 perguntas
- **Contato**: Formulário + 4 canais de atendimento
- **Social Wall**: Mural com posts do Instagram (@lumenix.led)
- **Empresa**: Showroom, números, mapa Google, regionais, certificações

### Animações & Motion
- GSAP + ScrollTrigger para parallax e scroll-driven animations
- Reveal on scroll com IntersectionObserver
- Scramble text (efeito de decodificação)
- Marquee infinito (serviços + clientes)
- CountUp animado
- Microinterações em botões, cards e links

### Performance & SEO
- Lazy loading de imagens
- Meta tags completas (OG, Twitter, description)
- Structured Data (Organization + LocalBusiness)
- Sitemap.xml + robots.txt
- Otimizado para Core Web Vitals

## 📄 Apresentação em PDF

O site inclui uma **página de apresentação comercial** com prints das páginas principais:

### Como acessar:
```
http://localhost:5173/#/apresentacao
```

### Como gerar o PDF:
1. Acesse a rota `/apresentacao`
2. Clique no botão **"📄 Imprimir / Salvar PDF"** (canto superior direito)
3. Na janela de impressão, selecione **"Salvar como PDF"**
4. O PDF inclui:
   - Capa com logo e dados da empresa
   - Sobre a LUMENIX (números, stats)
   - Print do Hero
   - Scroll narrativo (4 telas)
   - Experiência Pixel (P10 vs P2)
   - Comparador Indoor × Outdoor
   - Galeria de projetos
   - Configurador de projeto
   - Central de vendas
   - Página de encerramento

### Conteúdo do PDF:
- 10 seções visuais com screenshots das páginas
- Layout otimizado para impressão (A4)
- CSS print-specific para quebra de página
- Botão de impressão oculto no PDF final

## 🛠️ Tecnologias

- **React 18** + **TypeScript**
- **Vite 6** (build tool)
- **Tailwind CSS v4** (utility-first CSS)
- **GSAP 3** + **ScrollTrigger** (animações)
- **React Router DOM** (rotas)
- **Framer Motion** (transições)
- **Lucide React** (ícones)

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Cursor.tsx       # Cursor customizado
│   ├── Header.tsx       # Menu com overlay animado
│   ├── Footer.tsx       # Rodapé completo
│   ├── Logo.tsx         # Logo SVG
│   ├── Reveal.tsx       # Animação de entrada
│   ├── Scramble.tsx     # Efeito de decodificação
│   ├── CountUp.tsx      # Contador animado
│   ├── Marquee.tsx      # Letreiro infinito
│   └── ...
├── sections/            # Seções da página principal
│   ├── Hero.tsx         # Hero fullscreen
│   ├── StoryScroll.tsx  # Narrativa de scroll
│   ├── PixelExperience.tsx  # P10→P2
│   ├── Compare.tsx      # Indoor × Outdoor
│   ├── Projects.tsx     # Galeria horizontal
│   ├── Configurator.tsx # Configurador
│   ├── FAQ.tsx          # Perguntas frequentes
│   ├── Contact.tsx      # Contato
│   └── ...
├── pages/               # Páginas
│   ├── Home.tsx         # Página principal
│   ├── CasePage.tsx     # Página de case individual
│   └── Presentation.tsx # Apresentação em PDF
├── config/              # Configurações centralizadas
│   ├── business.ts      # Dados da empresa
│   ├── products.ts      # Linha P1–P10
│   ├── projects.ts      # Projetos
│   ├── social.ts        # Posts do Instagram
│   ├── assets.ts        # URLs de imagens
│   └── theme.ts         # Tokens de design
└── lib/                 # Utilitários
    ├── gsapSetup.ts     # Inicialização GSAP
    └── utils.ts         # Funções auxiliares
```

## 🎯 Dados da Empresa (Fictícios)

- **Nome**: LUMENIX
- **Desde**: 2012
- **Sede**: Av. Paulista, 1578 — Bela Vista, São Paulo/SP
- **WhatsApp**: (11) 9 8421-7733
- **Telefone**: (11) 3045-8800
- **Email**: contato@lumenix.com.br
- **Instagram**: @lumenix.led
- **Stats**: +5.200 painéis instalados, 1.200 m² disponíveis, 6 regionais

## 🖼️ Assets

Todas as imagens são geradas por IA e representam cenários realistas de painéis de LED:
- Hero: Shopping mall com LED wall curvo
- Eventos: Palco de festival
- Varejo: Vitrine de loja conceito
- Outdoor: Empena publicitária
- Residencial: Cine Piscina
- Institucional: Showroom na Paulista
- Equipe: Instalação técnica
- Estúdio: Produção virtual

## 📝 Documentação

- `ASSET_SOURCES.md` — Rastreabilidade de mídia
- `CLIENT_REPLACEMENT_GUIDE.md` — Guia de substituição de assets

## 🚀 Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📦 Deploy

O projeto está pronto para deploy em:
- Vercel
- Netlify
- Cloudflare Pages
- Qualquer hosting estático

Basta fazer o build (`npm run build`) e servir o diretório `dist/`.

---

**Desenvolvido com foco em experiência premium, performance e conversão B2B.**

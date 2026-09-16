# Ideilson — Portfólio de Engenharia de Software

Portfólio profissional e catálogo de produtos modulares construído com arquitetura **Zero-JS** de alta performance, otimização automática de assets e deploy na borda com **Cloudflare Workers / Static Assets**.

---

## ⚡ Tech Stack

- **Framework**: [Astro 7](https://astro.build/) (Static Site Generation / Zero-JS por padrão)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) com design system customizado (`Geist` & `Geist Mono`)
- **Ícones**: [Lucide Astro](https://lucide.dev/)
- **Otimização de Imagens**: [Sharp](https://sharp.pixelplumbing.com/) gerando WebP responsivo e comprimido
- **Animações & Motion**:
  - Reveal suave com `IntersectionObserver`
  - Parallax suave de profundidade via `requestAnimationFrame`
  - Marquee / Ticker contínuo em GPU
  - Conformidade estrita com `prefers-reduced-motion`
- **Infraestrutura & Edge**: [Cloudflare Workers](https://developers.cloudflare.com/workers/) com `wrangler.json` (Static Assets) e políticas de cache via `public/_headers`

---

## 📂 Estrutura do Projeto

```text
├── public/
│   ├── _headers            # Regras de cache imutável e cabeçalhos de segurança HTTP
│   ├── icon.svg            # Favicon SVG
│   └── profile.jpeg        # Foto de perfil de alta resolução
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar e navegação responsiva
│   │   └── sections/       # Hero, Ribbon, Projects, Experience, Contact, FloatingWhatsApp
│   ├── layouts/            # RootLayout com meta tags SEO, JSON-LD schema e fontes
│   ├── lib/                # Catálogo de demonstrações (demos.ts) e configurações de site
│   ├── pages/
│   │   ├── 404.astro       # Página 404 customizada (Cloudflare not_found_handling)
│   │   ├── index.astro     # Landing page principal
│   │   ├── robots.txt.ts   # Geração dinâmica/estática de robots.txt
│   │   ├── sitemap.xml.ts  # Geração dinâmica/estática de sitemap.xml
│   │   └── demos/          # Rotas estáticas pré-renderizadas ([slug].astro)
│   ├── scripts/            # Scripts nativos leves (reveal.ts, parallax.ts)
│   └── styles/             # globals.css e tokens do design system
├── astro.config.mjs        # Configuração do Astro com Sharp e Tailwind v4
└── wrangler.json           # Configuração de deploy no Cloudflare Workers
```

---

## 🛠️ Comandos

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento local
npm run dev

# Checar tipagem TypeScript e validação de componentes Astro
npm run check

# Compilar para produção (gera pasta dist/)
npm run build

# Testar localmente com o runtime do Cloudflare Workers
npm run preview:edge

# Deploy direto no Cloudflare
npm run deploy
```

---

## 📜 Licença

Propriedade privada de Ideilson. Todos os direitos reservados.

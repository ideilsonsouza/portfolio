# Astro Project Rules

Este projeto utiliza **Astro 7 (Zero-JS por padrão)** com **Tailwind CSS v4** e **Lucide Astro**.

## Diretrizes
- Renderização estática com `output: 'static'` para deploy em Cloudflare Workers / Static Assets.
- Zero-JS de runtime pesado no cliente. Interações usam micro-scripts em Vanilla JS ou `IntersectionObserver`.
- Otimização de imagens com `astro:assets` e `sharp`.
- Paleta clara inspirada na landing page do Pickfast (#F4F7FA, #142638, #FF6C2C, #179BD7, #198754).

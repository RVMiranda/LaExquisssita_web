# Arquitectura y Cloudflare

ADR-001 propuesta: Astro estático + TypeScript + CSS propio + Cloudflare Pages. «Astra» se interpreta como Astro.

Contenido público y enlaces: no requiere React, servidor, cuentas, base de datos ni SDK del backend operativo.

## Estructura futura

- src/pages/index.astro
- src/layouts/BaseLayout.astro
- src/components/
- src/content/business.ts
- src/styles/tokens.css y global.css
- src/assets/ para fotos optimizadas
- public/brand/ para derivados elegidos
- brand/masters/ para originales no publicados
- docs/

No está implementada y no hay package.json.

## Arranque posterior

Elegir Astro estable y Node compatible con documentación vigente. Fijar Node en .nvmrc/engines, npm y único package-lock.json. TypeScript estricto; scripts dev, check, build y preview.

Salida estática dist; sin adaptador Cloudflare por defecto. Si se introduce renderizado bajo demanda, revisar guía vigente y documentar Workers/adaptador.

## Cloudflare Pages posterior

1. Conectar GitHub desde Workers & Pages.
2. Elegir Pages, producción main, raíz del repositorio.
3. Build npm run build; salida dist; runtime compatible fijado.
4. Previews por rama/PR sin indexación.
5. Validar preview aprobado y publicar.
6. Conectar dominio confirmado, HTTPS y canonical entre www/apex.
7. Revisar sitemap, robots, 404, metadatos y enlaces.

No configurar despliegue mientras solo haya documentos. Push a GitHub no equivale a publicación web.

## SEO y rendimiento

HTML es-MX, título/descripción concretos, una H1, Open Graph aprobado. Datos Restaurant solo confirmados; sin valoraciones, coordenadas o precios inventados. Canonical/sitemap dependen del dominio.

Reservar dimensiones, AVIF/WebP cuando convenga, lazy load bajo primer viewport, fuentes locales. Medir SVG complejos antes de usarlos en página.

Menú futuro requiere fuente editorial; no exponer inventario. Promociones dinámicas requieren contrato de vigencia, permisos, caché y actualización.

## Fuentes consultadas el 3 de noviembre de 2026

- [Astro y Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Cloudflare Pages: Astro](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)

Revisar compatibilidad al implementar.

# Arquitectura y Cloudflare

ADR-001: Astro confirmado por el usuario el 4 de noviembre de 2026. Arquitectura recomendada: generación estática + TypeScript + CSS propio + Cloudflare Pages. No queda ambigüedad sobre «Astra».

Contenido público y enlaces: no requiere React, servidor, cuentas, base de datos ni SDK del backend operativo.

## Estructura implementada

- src/pages/index.astro
- src/layouts/BaseLayout.astro
- src/components/
- src/content/business.ts
- src/styles/tokens.css y global.css
- src/assets/ para fotos optimizadas
- public/brand/ para derivados elegidos
- brand/masters/ para originales no publicados
- docs/

La primera versión está implementada en Astro estático. El contenido editorial vive fuera de los componentes y las notas internas no se publican.

## Implementación inicial

Astro `7.4.5`, Node `24.19.0` y npm `11` fijados en package.json/`.nvmrc` con lockfile. TypeScript estricto; scripts dev, check, build y preview. Versiones consultadas el 4 de noviembre de 2026 en documentación oficial de Astro y paquetes publicados. Astro requiere Node `22.23.4` o superior; Node 24 es LTS. Sin adaptador Cloudflare porque la salida es enteramente estática.

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

## Fuentes consultadas el 3 y revisadas el 4 de noviembre de 2026

- [Astro y Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Cloudflare Pages: Astro](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
- [Instalación y requisitos actuales de Astro](https://docs.astro.build/en/install-and-setup/)
- [Versiones mantenidas de Node.js](https://nodejs.org/en/about/previous-releases)
- [Configuración de build de Cloudflare Pages](https://developers.cloudflare.com/pages/configuration/build-configuration/)

Implementación inicial: Astro 7.4.5, `@astrojs/check` 0.9.12, TypeScript 5.9.3, Node 24.19.0 y npm 11.17.0; lockfile único `package-lock.json`. Astro requiere Node 22.23.4 o superior. El build conserva salida estática `dist`; Pages prescribe `npm run build` y `dist`. No se usa adaptador ni se configuró despliegue.

## Revisión funcional — 4 de noviembre de 2026

La página utiliza un iframe de Google Maps obtenido desde la acción de compartir/incorporar de la ficha proporcionada por el cliente; el botón abre el enlace corto de esa ficha. Es contenido remoto, sin SDK, proxy ni credenciales propios. Se añade Playwright Test 1.64.1 como dependencia de desarrollo para verificar estructura, destinos de enlaces, layout responsive y accesibilidad básica. `npm test` lanza el preview estático en el puerto local 4331; requiere generar `dist/` antes y descargar Chromium con `npx playwright install chromium` en una máquina nueva.

La combinación tipográfica temporal My Soul + Forum se solicita desde Google Fonts. La composición de app es HTML/CSS ilustrativo, no importa estado ni captura de Android.

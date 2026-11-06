# Validación de fase 0

Fecha: 3 de noviembre de 2026.

- Ocho assets copiados y comparados mediante SHA-256 contra sus fuentes: idénticos.
- Documentación de procedencia original conservada.
- Revisión visual del preview existente de medio cuerpo.
- No se modificaron las apps de cliente ni manager.
- No se ejecutaron apps, compilación web, Lighthouse ni pruebas de navegador: no existe implementación.
- No se creó despliegue Cloudflare ni se conectó dominio.

Enlaces relativos Markdown comprobados sin destinos faltantes. git diff --cached --check completado sin errores. SVG maestros excluidos de normalización de saltos de línea para conservar hashes al clonar en Mac. Los criterios de implementación permanecen pendientes.

## Revisión documental — 4 de noviembre de 2026

Actualizados alcance, confirmaciones comerciales, diseño, aceptación y continuidad. Añadido prompt independiente de inicio. No se implementó ni desplegó aplicación. Verificados enlaces relativos Markdown sin destinos faltantes y git diff --check sin errores.

## Implementación inicial — 4 de noviembre de 2026

- `npm ci --offline --no-audit --no-fund`: completado, 264 paquetes instalados desde el lockfile/cache local.
- `npm run check`: 0 errores, 0 warnings, 0 hints (7 archivos Astro).
- `npm run build`: completado; se generó una página estática en `dist/`.
- Enlaces HTML generados en esa primera versión: 1 H1; 7 anclas internas sin destinos faltantes; WhatsApp `https://wa.me/529196732035` con mensaje y llamada `tel:+529196732035`. En esa etapa no se integró Maps ni se añadió una tienda ficticia; el mapa se incorporó al confirmar la ficha más tarde el mismo día.
- El build contiene Nuestra historia confirmada y no expone estado editorial pendiente. Cuando se marque como borrador, el componente la omite del build público.
- Contraste medido de texto/controles: chocolate sobre vainilla 12.53:1; café rojizo sobre vainilla 7.54:1; texto secundario en vainilla 5.48:1; texto en visita/apricot 4.77:1; texto app/acento sobre chocolate 9.06:1; blanco cálido en botón café 8.15:1. Todos los colores de texto evaluados superan WCAG AA para texto normal.
- Derivado de hero WebP 1120 × 1120: 62,464 bytes; hash en `brand/asset-manifest.json`. Maestros y PNG fuente conservados.
- Revisión CUA visual hecha en escritorio (viewport aproximado 1280 × 720): composición, mascota, contenido y CTAs visibles y coherentes. Este navegador no ofrece control de viewport en la sesión, así que no se declara una revisión visual móvil ni de anchos 320/390/768. Las reglas responsive y de reduced motion están implementadas; falta esa comprobación visual, zoom 200 %, revisión Safari y Lighthouse.
- No se ejecutaron pruebas automatizadas de navegador, Lighthouse ni métricas de campo. No hay deploy, dominio conectado ni DNS modificado.

## Revisión funcional — 4 de noviembre de 2026

- `npm run check`: completado con 0 errores, 0 warnings y 0 hints (10 archivos).
- `npm run build`: completado; sitio estático generado en `dist/`.
- `npm test`: 9 pruebas Playwright aprobadas en Chromium sobre el build servido por preview. Revisaron contenido/destinos del teléfono y WhatsApp, la ficha/iframe de Maps, tipografías y elementos del concepto app, anchos 320/390/768/1440 px sin overflow horizontal, foco por teclado y reduced motion.
- Inspección visual de capturas desktop y móvil en Chromium. Jerarquía, composición, tipografía seleccionada y comportamiento responsive visibles. En la captura de página completa, el iframe lazy del mapa aparece en blanco porque la captura no desplazó la página hasta él; la prueba valida tamaño y origen del iframe, pero no la carga de contenido de Google. En navegador conectado, la disponibilidad del mapa depende del tercero. No se registraron métricas Lighthouse ni revisión de Safari.
- Preview local y procesos de desarrollo no son un despliegue. No se publicó en Cloudflare, no se modificó DNS ni se hizo push a main.

## Menú y revisión — 6 de noviembre de 2026

- `npm run check`: 0 errores, 0 warnings, 0 hints (12 archivos).
- `npm run build`: completado; genera `/` estático en `dist/`.
- `npm test`: 10 pruebas Playwright aprobadas en Chromium. Incluye el nuevo menú, cambio exclusivo de categoría con Enter, cortes y presentaciones, foto ilustrativa y atribución, WhatsApp +52 919 133 0424 separado de la línea fija, Maps, y ajuste a 320/390/768/1440 px sin overflow, foco visible y reduced motion.
- Inspección visual con Chromium a 1440 y 390 px; se abrió la categoría Bebidas y se revisó el recorte 4:3 de la foto. Sin fotos reales de alimentos aún. La carga del contenido remoto de Google Maps no se valida desde el build local; su iframe, origen y caja ya se comprueban.
- No desplegado en Cloudflare. Cambios preparados en `dev`; mantener fuera de `main` hasta la aprobación del cliente.

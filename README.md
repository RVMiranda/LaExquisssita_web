# La Exquisssita — web

Actualizado: 6 de noviembre de 2026. La landing, el menú interactivo y la ruta `/verificar-tu-cuenta-socio-laexquisssita/` están en la rama `dev` para revisión. La ruta de confirmación es estática y debe añadirse a la configuración de redirecciones de Supabase cuando exista una URL pública estable. Se mantienen pendientes las fotos autorizadas de alimentos, ficha pública de la app, redes, evaluación tipográfica final y propiedad del dominio. No se ha desplegado.

Una bienvenida digital para conocer las carnitas del negocio en Ocosingo, planear la visita, consultar un pedido para llevar y conocer la app.

## Ejecución local

Requiere Node `24.19.0` y npm 11. Instala dependencias con `npm ci`, inicia el servidor con `npm run dev`, ejecuta el chequeo con `npm run check` y genera el sitio estático con `npm run build`. Para pruebas Playwright, instala Chromium una vez con `npx playwright install chromium` y luego ejecuta `npm test` (usa el build existente y levanta un preview local). La salida es `dist/`.

## Documentación

1. [Propuesta](docs/01-propuesta.md)
2. [Evidencia de las apps](docs/02-evidencia.md)
3. [Contenido](docs/03-contenido.md)
4. [Diseño](docs/04-diseno.md)
5. [Arquitectura y Cloudflare](docs/05-arquitectura.md)
6. [Aceptación](docs/06-aceptacion.md)
7. [Skills](docs/07-skills.md)
8. [Continuidad PC/Mac](docs/08-handoff.md)
9. [Validaciones](docs/09-validacion.md)
10. [Prompt para el nuevo chat](docs/10-prompt-inicio.md)
11. [Preview de revisión en Cloudflare Pages](docs/11-cloudflare-preview.md)

Los contratos son acuerdos técnicos/editoriales, no documentos legales. Tecnología confirmada: Astro estático. Se incorporan «Quiénes somos» y «Nuestra historia»; la historia ya cuenta con datos confirmados y la paráfrasis editorial quedó registrada en `docs/02-evidencia.md`.

[Marca incluida](brand/README.md): maestros originales, PNG y un derivado WebP documentado. No se concede licencia general sobre la identidad del negocio. Leer AGENTS.md antes de continuar. Cloudflare Pages y DNS quedan sin configurar.

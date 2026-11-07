# Criterios de aceptación

## Fase documental

Propuesta respaldada por cliente/manager, supuestos separados, assets originales con SHA-256, enlaces internos válidos, continuidad Mac y ausencia de secretos. No requiere build.

## Primera implementación

- Hero, Quiénes somos, Nuestra historia, Carnitas y visita y app, sin ficción presentada como realidad. La historia tiene datos confirmados; la landing aún requiere revisión de copy y materiales pendientes.
- Datos confirmados; probar WhatsApp, llamada y Maps. No existe enlace público confirmado de la tienda.
- En Visítanos, el pin de Maps confirmado abre en una pestaña nueva y el mapa corresponde al mismo lugar; documentar que depende de Google Maps externo.
- La vista conceptual de app identifica sus elementos y medidas aproximadas, y no se presenta como captura real.
- Menú fiel a la lista confirmada, sin precios inventados ni carrito; sus categorías operan por teclado y se ajustan a móvil.
- Ruta `/verificar-tu-cuenta-socio-laexquisssita/` estática, no indexable, con confirmación de cuenta y beneficios que coinciden con la app; animación breve con soporte de movimiento reducido y layout móvil sin overflow.
- Configurar y probar la URL posterior a la confirmación en Supabase. La página presupone que Supabase terminó la verificación; no valida tokens ni autentica usuarios.
- Diferenciar teléfono fijo `919 673 2035` de WhatsApp `+52 919 133 0424`.
- Toda fotografía de stock debe tener licencia y fuente; las fotos de alimentos del local deben ser autorizadas por el cliente.
- Semántica, una H1, alt útil o vacío si decorativo, foco y teclado.
- Zoom 200 %; sin desbordes a 320, 390, 768 y 1440 px.
- Contraste objetivo AA: 4.5:1 texto normal, 3:1 texto grande y controles relevantes.
- Reduced motion; ningún dato interno o QR personal.
- npm ci, chequeo de tipos y build con lockfile.
- Playwright: una H1, datos y destinos de enlaces, medidas mínimas del mapa y vista app, ajuste a 320/390/768/1440 px, foco por teclado y movimiento reducido.
- Playwright: menú actual, grupos, medidas de porción e interacción de los disclosures.
- Revisión Safari Mac, Chromium y vista móvil.
- Objetivos de campo: LCP <= 2.5 s, CLS <= 0.1, INP <= 200 ms.
- Lighthouse móvil >= 90 rendimiento/accesibilidad como señal de laboratorio, no garantía.
- Presupuesto inicial: JS propio comprimido <= 30 KB, hero <= 250 KB, primera carga objetivo <= 800 KB; documentar excepciones.

## Publicación

Preview aprobado, dominio confirmado, HTTPS/canonical/robots correctos, previews sin indexación y producción indexable. Verificar 404, enlaces e imagen compartida. Registrar URL, commit y fecha.

Registrar pruebas ejecutadas y límites. Estos criterios no significan que las pruebas hayan pasado.

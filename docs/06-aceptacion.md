# Criterios de aceptación

## Fase documental

Propuesta respaldada por cliente/manager, supuestos separados, assets originales con SHA-256, enlaces internos válidos, continuidad Mac y ausencia de secretos. No requiere build.

## Primera implementación

- Hero y dos secciones, sin ficción presentada como realidad.
- Datos confirmados; probar WhatsApp, llamada, Maps y tienda si existe.
- Semántica, una H1, alt útil o vacío si decorativo, foco y teclado.
- Zoom 200 %; sin desbordes a 320, 390, 768 y 1440 px.
- Contraste objetivo AA: 4.5:1 texto normal, 3:1 texto grande y controles relevantes.
- Reduced motion; ningún dato interno o QR personal.
- npm ci, chequeo de tipos y build con lockfile.
- Revisión Safari Mac, Chromium y vista móvil.
- Objetivos de campo: LCP <= 2.5 s, CLS <= 0.1, INP <= 200 ms.
- Lighthouse móvil >= 90 rendimiento/accesibilidad como señal de laboratorio, no garantía.
- Presupuesto inicial: JS propio comprimido <= 30 KB, hero <= 250 KB, primera carga objetivo <= 800 KB; documentar excepciones.

## Publicación

Preview aprobado, dominio confirmado, HTTPS/canonical/robots correctos, previews sin indexación y producción indexable. Verificar 404, enlaces e imagen compartida. Registrar URL, commit y fecha.

Registrar pruebas ejecutadas y límites. Estos criterios no significan que las pruebas hayan pasado.

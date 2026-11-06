# Continuidad desde PC o Mac

Actualizado: 6 de noviembre de 2026. La rama `dev` parte de `codex/landing-base` e incluye el menú por categorías, el copy confirmado por el cliente y el WhatsApp separado de la línea fija. Lista para revisión/preview, no desplegada en producción.

En esta PC la carpeta ya existe: C:/Users/MACHENIKE/Projects/laexquisssita_web. Abrir esa carpeta como proyecto; no clonarla encima. Usar docs/10-prompt-inicio.md para iniciar el chat. Los comandos siguientes son para una máquina sin checkout, como la Mac.

    mkdir -p ~/Projects
    cd ~/Projects
    git clone https://github.com/RVMiranda/LaExquisssita_web.git laexquisssita_web
    cd laexquisssita_web
    git status
    git switch -c dev --track origin/dev

Para correr la implementación, instalar Node `24.19.0` y npm 11, ejecutar `npm ci`; iniciar el servidor con `npm run dev`, revisar tipos con `npm run check` y generar el sitio con `npm run build`. Para Playwright, instalar Chromium con `npx playwright install chromium` y ejecutar `npm test` después del build.

Leer README, AGENTS y docs. Para desarrollo local, instalar Node `24.19.0` y npm 11, ejecutar `npm ci`, `npm run dev`; revisar tipos con `npm run check` y generar el sitio con `npm run build`.

## Estado y próxima iteración

1. Revisar con el cliente el menú y el diseño general; My Soul + Forum sigue siendo una prueba tipográfica.
2. Integrar fotos autorizadas, redes y ficha pública de la app si se comparten.
3. Confirmar propiedad del dominio antes de preparar canonical o Cloudflare Pages.
4. Seguir aceptación en `docs/06-aceptacion.md`; la landing queda pendiente de revisión del negocio.

Sin fotos se puede construir estructura; sin ficha de tienda no se puede ofrecer descarga, pero sí explicar club.

## Simultaneidad

Ramas codex distintas y PR a main. Repartir archivos: contenido en docs/03-contenido.md y futuro business.ts; UI en componentes/estilos; infraestructura en Astro/CI/Cloudflare. Coordinar documentos compartidos, actualizar main y resolver conflictos por intención. Sin force push.

## Preguntas para cliente

Pendientes: fotos autorizadas, redes, ficha de tienda/app, beneficios anunciables, evaluación tipográfica y propiedad de laexquisssita.com. Copy actual de Quiénes somos y menú, historia, ambos teléfonos, domicilio, horario y ficha Maps están confirmados.

No hay proyecto Cloudflare creado, dominio enlazado ni web publicada. Chequeo de tipos y build pasaron; las validaciones y límites restantes están en `docs/09-validacion.md`. Las apps fueron revisadas como código, no ejecutadas.

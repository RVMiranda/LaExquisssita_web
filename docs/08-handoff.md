# Continuidad desde PC o Mac

Actualizado: 4 de noviembre de 2026. Astro, propuesta y datos comerciales confirmados. Añadidas Quiénes somos y Nuestra historia. Implementación pendiente en un chat independiente del proyecto web.

En esta PC la carpeta ya existe: C:/Users/MACHENIKE/Projects/laexquisssita_web. Abrir esa carpeta como proyecto; no clonarla encima. Usar docs/10-prompt-inicio.md para iniciar el chat. Los comandos siguientes son para una máquina sin checkout, como la Mac.

    mkdir -p ~/Projects
    cd ~/Projects
    git clone https://github.com/RVMiranda/LaExquisssita_web.git laexquisssita_web
    cd laexquisssita_web
    git status
    git switch -c codex/landing-base

Leer README, AGENTS y docs. Aún no hay comandos npm. Inicializar Astro posteriormente conservando documentos/marca, fijar Node y lockfile.

## Próxima sesión

1. Leer contexto y estado Git; no volver a pedir confirmación de propuesta o datos comerciales.
2. Preparar Astro, estructura y tokens; solicitar historia real sin bloquear el resto.
3. Implementar bloques; mascota si faltan fotos.
4. Integrar material aprobado y validar aceptación.
5. Cloudflare cuando exista build; dominio después.

Sin fotos se puede construir estructura; sin ficha de tienda no se puede ofrecer descarga, pero sí explicar club.

## Simultaneidad

Ramas codex distintas y PR a main. Repartir archivos: contenido en docs/03-contenido.md y futuro business.ts; UI en componentes/estilos; infraestructura en Astro/CI/Cloudflare. Coordinar documentos compartidos, actualizar main y resolver conflictos por intención. Sin force push.

## Preguntas para cliente

Pendientes: pin Maps, fotos autorizadas, historia real (inicio, personas, origen y evolución), productos, redes, ficha app, beneficios anunciables y propiedad de laexquisssita.com. Contacto, domicilio y horario ya están confirmados.

No hay proyecto Cloudflare creado, dominio enlazado, web publicada ni dependencias/build/pruebas de navegador. Las apps fueron revisadas como código, no ejecutadas.

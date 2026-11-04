# Continuidad desde Mac

Fecha: 3 de noviembre de 2026. Contratos y marca preparados; implementación pendiente.

    mkdir -p ~/Projects
    cd ~/Projects
    git clone https://github.com/RVMiranda/LaExquisssita_web.git laexquisssita_web
    cd laexquisssita_web
    git status
    git switch -c codex/landing-base

Leer README, AGENTS y docs. Aún no hay comandos npm. Inicializar Astro posteriormente conservando documentos/marca, fijar Node y lockfile.

## Próxima sesión

1. Recibir feedback y confirmar datos comerciales.
2. Confirmar Astro/diseño, preparar estructura y tokens.
3. Implementar bloques; mascota si faltan fotos.
4. Integrar material aprobado y validar aceptación.
5. Cloudflare cuando exista build; dominio después.

Sin fotos se puede construir estructura; sin ficha de tienda no se puede ofrecer descarga, pero sí explicar club.

## Simultaneidad

Ramas codex distintas y PR a main. Repartir archivos: contenido en docs/03-contenido.md y futuro business.ts; UI en componentes/estilos; infraestructura en Astro/CI/Cloudflare. Coordinar documentos compartidos, actualizar main y resolver conflictos por intención. Sin force push.

## Preguntas para cliente

Confirmar contacto, domicilio, horario y Maps; fotos autorizadas; historia real; productos; redes; ficha app; beneficios anunciables y propiedad de laexquisssita.com.

No hay proyecto Cloudflare creado, dominio enlazado, web publicada ni dependencias/build/pruebas de navegador. Las apps fueron revisadas como código, no ejecutadas.

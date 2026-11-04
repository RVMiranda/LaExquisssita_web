# Preview de revisión en Cloudflare Pages

Guía para dar al cliente un enlace de revisión que se actualice con cada push a una rama de trabajo. Consultada el 4 de noviembre de 2026. Los nombres de controles pueden variar ligeramente en el panel.

## Configuración recomendada

Conectar GitHub mediante **Pages con integración Git**, para que cada commit a una rama no productiva pueda generar un preview. Mantener `main` como rama de producción y crear previews desde `codex/landing-base` (la configuración también puede incluir el patrón `codex/*`). Esto no requiere enlazar un dominio ni tocar DNS.

En Cloudflare Dashboard:

1. Abrir **Workers & Pages → Create application → Pages → Connect to Git**.
2. Autorizar Cloudflare para acceder al repositorio GitHub `RVMiranda/LaExquisssita_web` y seleccionarlo.
3. Configurar el proyecto:

   | Campo | Valor |
   |---|---|
   | Production branch | `main` |
   | Framework preset | Astro (si aparece) |
   | Root directory | `/` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Build variable `NODE_VERSION` | `24.19.0` |

   El proyecto ya incluye `.nvmrc` con Node 24.19.0 y `package-lock.json`; Pages puede leer `.nvmrc` y el lockfile permite una instalación npm reproducible. Si se define `NODE_VERSION` en el dashboard, usar `24.19.0` tanto en Preview como en Production.

4. En configuración de builds/branch control, habilitar preview deployments para **All non-Production branches**, o elegir **Custom branches** e incluir `codex/landing-base` (o `codex/*`). Dejar `main` como Production branch. La integración Git crea previews de commits en ramas no productivas y puede crear un preview vinculado a un PR.
5. Guardar la configuración. Si la configuración ejecuta el primer build de `main`, puede fallar hasta que el sitio Astro se incorpore a esa rama; no cambies producción a `codex/landing-base` para evitarlo. Una vez activado el proyecto, sube un nuevo commit a `codex/landing-base` o abre un PR de esa rama para disparar el preview.
6. En **Workers & Pages → [proyecto] → Deployments**, abrir el despliegue marcado **Preview** y copiar la URL. Comparte con el cliente el alias de la rama, con formato `codex-landing-base.<nombre-del-proyecto>.pages.dev`, para que siga apuntando al commit más reciente de esa rama. Cloudflare también da un URL único por commit; ese URL conserva la versión exacta.

Los pushes futuros a esa rama disparan nuevos builds. Cuando termine el build, el alias de revisión muestra la versión recién generada. El panel y los checks de GitHub permiten revisar estado y logs si un build falla. Para pedir retroalimentación, comparte el alias junto con la lista de cambios que quieres validar; incorpora las notas y vuelve a hacer push a la misma rama.

## Privacidad y límites

- Las URLs `pages.dev` de preview son accesibles para cualquiera que reciba el enlace. El `noindex` que Cloudflare añade por defecto ayuda a evitar indexación, pero **no** restringe el acceso ni sustituye autenticación.
- Esta configuración de Git Integration no configura DNS ni dominio personalizado. No usar **Custom domains** hasta confirmar quién es propietario del dominio y autorizar el cambio.
- Las previews dependen de la integración Git de la cuenta Cloudflare y de que su instalación GitHub tenga acceso al repositorio.
- El mapa y las fuentes se cargan desde servicios externos; su disponibilidad depende de la conexión del visitante.
- No es edición colaborativa en tiempo real: el cliente verá cada cambio después de guardar, commit, push y completar el build de Cloudflare.

## Fuentes oficiales

- [Cloudflare Pages — integración Git](https://developers.cloudflare.com/pages/configuration/git-integration/)
- [Cloudflare Pages — previews](https://developers.cloudflare.com/pages/configuration/preview-deployments/)
- [Cloudflare Pages — controles de ramas](https://developers.cloudflare.com/pages/configuration/branch-build-controls/)
- [Cloudflare Pages — build de Astro](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
- [Cloudflare Pages — build image y versión Node](https://developers.cloudflare.com/pages/configuration/build-image/)

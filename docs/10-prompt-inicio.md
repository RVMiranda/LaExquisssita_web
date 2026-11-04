# Prompt para iniciar el chat del proyecto web

Copiar el texto siguiente como primer mensaje en el proyecto web. Esta instrucción habilita la implementación local; no el despliegue.

Vamos a iniciar la implementación de la web de La Exquisssita en este proyecto independiente.

Primero revisa el contexto, antes de modificar archivos:
1. Confirma la raíz del repositorio, git status, rama y remoto. Trabaja exclusivamente en el proyecto web; conserva cambios existentes y no modifiques las apps Android ni el manager.
2. Lee AGENTS.md, README.md, docs/01-propuesta.md hasta docs/09-validacion.md, brand/README.md y brand/asset-manifest.json. Inspecciona visualmente los logos existentes. Distingue decisiones actuales de evidencia histórica.
3. Resume brevemente lo aprobado, los pendientes reales y tu plan. Después continúa con la implementación; no te detengas solo en un plan ni vuelvas a pedir confirmación de decisiones ya aprobadas.

Contexto aprobado el 4 de noviembre de 2026:
- Tecnología: Astro. Usa generación estática, TypeScript y CSS con tokens propios; npm, versión de Node compatible fijada y lockfile. Verifica documentación oficial vigente antes de elegir versiones.
- Destino: Cloudflare; la propuesta actual es Pages con build npm run build y salida dist. Prepara compatibilidad y documentación, sin desplegar ni modificar DNS en esta fase.
- Propuesta aprobada: landing cálida, elegante, moderna y cercana, extensión de la app, con identidad vainilla/café/chocolate y las mascotas originales.
- Estructura: bienvenida; Quiénes somos; Nuestra historia; Carnitas y visita; Nuestra app; pie. Quiénes somos e Historia pueden compartir una composición, pero deben tener encabezados y contenido diferenciados.
- Datos confirmados: teléfono 919 673 2035, WhatsApp +52 919 673 2035; Periférico Oriente Sur s/n, Barrio Aeropuerto, Ocosingo, Chiapas; lunes a sábado 08:00–16:00 y domingo 08:00–15:00.
- CTA principal: Consultar por WhatsApp. No afirmar que el pedido está confirmado ni ofrecer delivery no verificado.

Pendientes que no deben bloquear la estructura:
- Historia real: fecha de inicio, fundadores, origen y momentos relevantes aún no proporcionados. Pregunta por ellos al inicio y avanza con el resto. No inventes tradición familiar, años de experiencia ni procesos artesanales.
- Quiénes somos puede usar un texto provisional basado exclusivamente en carnitas, Ocosingo y pedidos para llevar, marcado como borrador en el contenido interno.
- Prepara el componente y modelo de Historia. Si falta información, usa un estado editorial visible solo en desarrollo y omítelo del build público hasta disponer de texto aprobado. Registra que completar Historia es necesario para dar por terminada toda la landing.
- Faltan fotos autorizadas, pin de Maps, redes, ficha de tienda de la app y confirmación de propiedad del dominio. Omite enlaces inexistentes; usa la mascota como alternativa visual. No generes fotos de comida haciéndolas pasar por producto real.

Consulta docs/07-skills.md y aplica las skills pertinentes disponibles, especialmente frontend-design y las pautas de identidad. No presupongas instalaciones de otra máquina. Si una skill falta, consulta su fuente o continúa con los contratos; evita instalaciones globales y dependencias innecesarias.

Implementa una primera versión funcional y revisable:
- Trabaja en una rama codex/ apropiada; no sobrescribas ni reinicialices el repo.
- Conserva maestros y referencias, genera derivados optimizados si hacen falta.
- Contenido tipado separado de componentes; datos confirmados separados de borradores.
- Diseño responsive, HTML semántico, teclado/foco, contraste y reduced motion.
- Sin login, pagos, reservas, backend operativo ni panel administrativo.
- Sin datos reales de clientes ni QR personales en imágenes de la app.
- Ejecuta chequeo de tipos y build; valida enlaces y revisa visualmente escritorio/móvil cuando haya herramientas disponibles. No afirmes pruebas no realizadas.
- Actualiza documentación y handoff con cambios, comandos, resultados y pendientes.
- Entrega la primera versión local y sus instrucciones de ejecución. No publiques en Cloudflare, no modifiques DNS y no hagas push a main en esta fase.

Empieza por la revisión del repositorio y continúa con el trabajo que no dependa de información pendiente.

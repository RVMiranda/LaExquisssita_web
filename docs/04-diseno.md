# Contrato visual

Dirección: **una mesa abierta en Ocosingo**. Comida para despertar apetito, mascota para bienvenida y composición ordenada.

| Token | Valor | Uso |
|---|---|---|
| fondo | #FAF3E0 | Vainilla |
| marca | #7E392F | Acciones café rojizo |
| texto | #3D2723 | Chocolate |
| superficie | #E5C2A4 | Apoyo albaricoque |
| detalle | #B8860B | Dorado de mascota |
| acento | #A07324 | Detalles ocasionales |

No usar dorado/albaricoque para texto pequeño sin medir contraste. No se certifica contraste en esta fase.

Tipografía inicial propuesta: evaluar Source Sans 3, pesos 400/600/700, fallback system-ui. El 4 de noviembre de 2026 el cliente pidió probar My Soul para el nombre de marca y los encabezados, y Forum para el contenido restante. Esa combinación se integra como prueba de diseño, no como tipografía corporativa aprobada. Las fuentes se cargan desde Google Fonts; se requiere conexión para recibirlas y pueden aparecer los fallbacks si el proveedor no responde. La mascota y las fuentes dan el gesto editorial; revisar legibilidad antes de dar por aprobada la combinación.

H1 adaptable 36–64 px, cuerpo 18 px, auxiliar mínimo 14 px; lectura 55–70 caracteres. Contenedor máximo 1160 px, márgenes móviles 20 px, espaciado 4/8 px. Radios 12 px en botones y 20 px en fotografía cuando convenga. Evitar convertir cada bloque en tarjeta.

## Composición

Escritorio: cabecera ligera; hero con título/acciones a izquierda y foto real a derecha, mascota como bienvenida. Después, bloque editorial Quiénes somos y Nuestra historia, sin línea temporal si no hay hitos confirmados; luego foto de negocio/producto frente a dirección/horario. Finalmente club frente a captura pública de app.

Móvil: título, acción, foto o mascota, quiénes somos, historia, visita, app y pie. Orden DOM igual al visual, sin carruseles ni barras fijas que tapen contenido.

Sin fotos: mascota de medio cuerpo en hero sobre vainilla. No usar comida generada como supuesta fotografía real del negocio.

## Marca

Medio cuerpo para bienvenida, busto para cabecera. Conservar flor, expresión, cesta y bolso; sin deformar/recolorear/efectos. Fondo claro. Busto desde 48–64 px. Favicon 16 px requiere derivado posterior, no está resuelto.

Mascota protagonista una vez y discreta como identificador. Capturas con cuenta demostrativa, sin datos ni QR personales.

## Interacción

Foco visible, teclado, enlaces descriptivos, targets objetivo 48 px, zoom 200 %, prefers-reduced-motion. Feedback breve; sin autoplay, parallax, scroll hijacking ni vidrio decorativo.

La paleta se conserva por evidencia, no por tendencia. La singularidad vendrá de mascota, fotos propias y contenido local. Revisar si el resultado sigue siendo reconocible al ocultar el nombre.

## Prueba tipográfica e interacción — 4 de noviembre de 2026

My Soul se aplica al nombre y a H1/H2; Forum al texto, navegación, acciones y datos prácticos. La sección de app muestra una composición conceptual con cabecera, tarjeta y novedades. La prueba sigue abierta a evaluación del cliente. Se aplicaron los criterios pertinentes de la skill `apple-design`: escala tipográfica y legibilidad, realimentación discreta en controles, foco visible y respeto de `prefers-reduced-motion`. No se añadieron gestos ni animaciones de movimiento a esta página informativa.

Visita usa la ficha de Google Maps entregada por el cliente; el mapa es un iframe externo y depende de la disponibilidad de Google Maps y conexión del visitante. Se omite la ficha de tienda al no haber URL confirmada.

## Menú — 6 de noviembre de 2026

Las categorías del menú usan el disclosure nativo `<details>/<summary>` con apertura exclusiva mediante `name`, sin carrusel, autoplay ni dependencias de JavaScript. La categoría de tacos abre por defecto; el cliente controla el resto con clic o teclado. Los chips son etiquetas informativas, no controles de pedido. Se respetan foco visible y movimiento reducido.

La fotografía de bebidas es una imagen libre de Unsplash atribuida a A L, presentada como ilustrativa y no como producto/foto del restaurante. La sección se apoya en el contenido tipográfico del menú hasta recibir fotografías autorizadas de comida.

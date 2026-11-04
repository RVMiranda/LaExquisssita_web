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

Tipografía propuesta: evaluar Source Sans 3, pesos 400/600/700, fallback system-ui. No es una fuente corporativa confirmada. Verificar licencia y alojar WOFF2 localmente al implementar. La mascota aporta gesto: no añadir serif decorativa por defecto.

H1 adaptable 36–64 px, cuerpo 18 px, auxiliar mínimo 14 px; lectura 55–70 caracteres. Contenedor máximo 1160 px, márgenes móviles 20 px, espaciado 4/8 px. Radios 12 px en botones y 20 px en fotografía cuando convenga. Evitar convertir cada bloque en tarjeta.

## Composición

Escritorio: cabecera ligera; hero con título/acciones a izquierda y foto real a derecha, mascota como bienvenida. Después foto de negocio/producto frente a dirección/horario. Finalmente club frente a captura pública de app.

Móvil: título, acción, foto, visita, app y pie. Orden DOM igual al visual, sin carruseles ni barras fijas que tapen contenido.

Sin fotos: mascota de medio cuerpo en hero sobre vainilla. No usar comida generada como supuesta fotografía real del negocio.

## Marca

Medio cuerpo para bienvenida, busto para cabecera. Conservar flor, expresión, cesta y bolso; sin deformar/recolorear/efectos. Fondo claro. Busto desde 48–64 px. Favicon 16 px requiere derivado posterior, no está resuelto.

Mascota protagonista una vez y discreta como identificador. Capturas con cuenta demostrativa, sin datos ni QR personales.

## Interacción

Foco visible, teclado, enlaces descriptivos, targets objetivo 48 px, zoom 200 %, prefers-reduced-motion. Feedback breve; sin autoplay, parallax, scroll hijacking ni vidrio decorativo.

La paleta se conserva por evidencia, no por tendencia. La singularidad vendrá de mascota, fotos propias y contenido local. Revisar si el resultado sigue siendo reconocible al ocultar el nombre.

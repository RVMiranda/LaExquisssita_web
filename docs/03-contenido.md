# Contrato de contenido

Estructura aprobada y teléfono fijo, dirección y horarios confirmados el 4 de noviembre de 2026. WhatsApp, afirmaciones del copy y menú actual se confirmaron el 6 de noviembre de 2026. Los únicos importes que aparecen son ejemplos que compartió el cliente; no son precios de productos.

| Bloque | Texto / contenido | Acción |
|---|---|---|
| Cabecera | Busto + La Exquisssita; Nosotros; Menú; Visítanos; Nuestra app | Anclas |
| Bienvenida | H1: Se antojan unas carnitas. Se antoja La Exquisssita. Texto: Tradición y sabor inigualable. | Consultar por WhatsApp |
| Quiénes somos | Copy solicitado por el cliente, confirmado el 6 de noviembre de 2026 | Presentación del negocio |
| Nuestra historia | Fundación en 1998, Valentín Miranda Martínez y Beatriz Silva Bailón; continuidad familiar | Relato confirmado, contenido separado |
| Menú | Tacos y gorditas; carnes por kilo; chicharrones; chorizo; refrescos, jugos y aguas | Acordeón accesible por categorías; consultas por WhatsApp sin precios inventados |
| Visita | El sabor te espera. Mapa, dirección y horario | Cómo llegar; llamada |
| App | H2: Tu próxima visita empieza aquí. Texto: Conoce las novedades y lleva contigo tu tarjeta digital de La Exquisssita. | Conocer la app, solo con destino real |
| Pie | Nombre, contactos y redes confirmadas, textos legales aplicables | Sin enlaces vacíos |

Club: descubrir novedades, consultar tarjeta y presentarla en caja. No anunciar tasas de puntos, regalos específicos o iOS sin confirmar. Hasta tres productos destacados solo si se aprueban nombre, descripción, fotografía, disponibilidad y precio si se publica.

## Modelo editorial futuro

src/content/business.ts tipado: name, description, city, address, hours, phone, whatsapp, mapsUrl; app.androidUrl/iosUrl, socialLinks, canonicalUrl; featuredItems con nombre, descripción, imagen, alt y precio opcional. Añadir about y history con título, texto y estado editorial. Metadatos internos draft/confirmed, fecha y fuente.

Omitir opcionales ausentes. No mostrar metadatos al visitante. Un dato requerido sin confirmar impide aprobar publicación; no se rellena con ficción.

## Datos comerciales confirmados el 4 de noviembre de 2026

Confirmación: usuario responsable del proyecto en el chat de preparación.
- Dirección: Periférico Oriente Sur s/n, Barrio Aeropuerto, Ocosingo, Chiapas.
- Horario: lunes a sábado 08:00–16:00; domingo 08:00–15:00.
- Teléfono fijo: 919 673 2035. La línea de WhatsApp se confirmó después y se registra debajo.

## Enlaces

WhatsApp: https://wa.me/529191330424. Línea distinta a la fija, confirmada por el usuario el 6 de noviembre de 2026. Mensaje codificado para URL: «Hola, quisiera consultar un pedido para llevar en La Exquisssita».
Llamada: tel:+529196732035.
Maps: ficha confirmada por el usuario el 4 de noviembre de 2026: https://maps.app.goo.gl/wbjhmojxTzkYqQvd8. Se usa como destino del botón «Abrir ubicación en Google Maps» y como la ficha del mapa incrustado. Procedencia y validación en `docs/02-evidencia.md`.
App: no fabricar URL con applicationId. Sin ficha, omitir descarga y explicar club sin prometer disponibilidad. Wallet y deep links no confirmados.

## Material pendiente

Antes de publicar: solicitar y aprobar fotos reales de los alimentos. Línea fija, WhatsApp, copy de Quiénes somos, menú, dirección, horario y ficha de Maps confirmados.
Antes de enlazar app: ficha pública y beneficios anunciables.
Antes de dominio: propiedad y acceso Cloudflare/DNS.
Para enriquecer: 3–5 fotos autorizadas de comida servida, fachada y ambiente; redes sociales.

Primera versión sin formularios. No trasladar automáticamente el aviso legal de la app a la web.

## Historia y estado editorial

El 4 de noviembre de 2026, el usuario confirmó para publicación el inicio en 1998, sus fundadores, la continuidad en el mismo lugar, el manejo familiar y quién lleva el negocio actualmente. El modelo mantiene estado editorial `confirmed` y registra la procedencia. La redacción es una paráfrasis revisable. Si se cambia a `draft`, el componente muestra el estado solo en desarrollo y omite la sección del build público. No añadir cronología ni técnicas de preparación sin evidencia.

Quiénes somos se confirmó junto con sus afirmaciones a solicitud del cliente el 6 de noviembre de 2026. Su estado editorial pasa a `confirmed` en `src/content/business.ts`.

## Implementación — 4 de noviembre de 2026

La sección de visita ahora muestra dirección, horarios, llamada, mapa incrustado de la ficha confirmada y enlace «Abrir ubicación en Google Maps». El WhatsApp permanece en la bienvenida. La muestra conceptual de app presenta cabecera, tarjeta digital y novedades; su marco tiene hasta 350 px de ancho y la pantalla al menos 480 px de alto. Es una composición de referencia, no una medición ni captura de la app real.

Tipografía en evaluación con el cliente: My Soul para nombre y encabezados; Forum para el resto del contenido. El contrato original se conserva como histórico; la implementación y su revisión visual están registradas en `docs/09-validacion.md`.

## Menú actual — 6 de noviembre de 2026

Los datos del menú confirmados por el usuario se mantienen tipados en `src/content/menu.ts`; `MenuSection.astro` los presenta en disclosures nativos exclusivos, con una categoría abierta a la vez, operación por teclado y contenido disponible sin JavaScript. No es un sistema de pedidos: no hay carrito, precios de lista ni promesas de disponibilidad. El CTA consulta por WhatsApp.

Categorías: tacos y gorditas (diez cortes); carne para llevar por peso (¼, ½, ¾ y 1 kg o por importe, ejemplo $100); chicharrón de cáscara y polvito; chorizo por kilo (¼, ½ o por importe, ejemplo $30); refrescos, Boing y aguas naturales. No se inventaron precios.

Para bebidas se incluye una fotografía de cola de A L / Unsplash como recurso ilustrativo con atribución y fuente visible. No representa el inventario ni el establecimiento. No se añadieron fotos de alimentos; se solicitarán al cliente con permiso de publicación.

La ruta `/verificar-tu-cuenta-socio-laexquisssita/` confirma el estado del correo y anima un check de manera sutil. Invita a volver a la app para iniciar sesión y consultar tarjeta, visitas, puntos, novedades y recompensas descritos en el cliente Android. No incluye datos de la cuenta, enlaces no verificados a tiendas ni inicio de sesión automático.

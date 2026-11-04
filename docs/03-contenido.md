# Contrato de contenido

Estructura aprobada y teléfono, dirección y horarios confirmados por el usuario el 4 de noviembre de 2026. El copy sigue siendo una propuesta editorial.

| Bloque | Texto / contenido | Acción |
|---|---|---|
| Cabecera | Busto + La Exquisssita; Nosotros; Visítanos; Nuestra app | Anclas |
| Bienvenida | H1: Se antojan unas carnitas. Se antoja La Exquisssita. Texto: Conócenos en Ocosingo y consulta tu pedido para llevar. | Consultar por WhatsApp |
| Quiénes somos | H2: Quiénes somos. Borrador: Somos La Exquisssita, un negocio de carnitas en Ocosingo. Puedes visitarnos o consultar tu pedido para llevar. | Presentación sin promesas no verificadas |
| Nuestra historia | H2: Nuestra historia. Relato real pendiente: inicio, personas, origen y evolución. | No inventar cronología ni tradición familiar |
| Carnitas y visita | H2: Te esperamos en Ocosingo. Foto real, presentación, dirección y horario | Cómo llegar; llamada |
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
- Teléfono: 919 673 2035; WhatsApp: +52 919 673 2035.

## Enlaces

WhatsApp: https://wa.me/529196732035. Mensaje codificado para URL: «Hola, quisiera consultar un pedido para llevar en La Exquisssita».
Llamada: tel:+529196732035.
Maps: pin exacto pendiente, no deducir coordenadas.
App: no fabricar URL con applicationId. Sin ficha, omitir descarga y explicar club sin prometer disponibilidad. Wallet y deep links no confirmados.

## Material pendiente

Antes de publicar: pin de Maps si se ofrece Cómo llegar, aprobación de copy y derechos de las fotos utilizadas. Teléfono, dirección y horario ya confirmados.
Antes de enlazar app: ficha pública y beneficios anunciables.
Antes de dominio: propiedad y acceso Cloudflare/DNS.
Para enriquecer: 3–5 fotos de comida servida, fachada y ambiente; historia real, menú y redes.

Primera versión sin formularios. No trasladar automáticamente el aviso legal de la app a la web.

## Historia sin información definitiva

Solicitar fecha o etapa de inicio, quién impulsó el negocio, motivo de origen y dos o tres momentos relevantes. La ausencia de estos datos no bloquea maquetación ni otras secciones. Preparar componente y modelo editorial; mostrar pendiente solo en desarrollo y omitir del build público hasta aprobar un relato real. La sección seguirá pendiente de aceptación, aunque el resto sea funcional. No publicar «próximamente» o texto ficticio para simular historia terminada.

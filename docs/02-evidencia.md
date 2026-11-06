# Evidencia y procedencia

Revisión local de código/documentación el 3 de noviembre de 2026. No se ejecutaron apps ni se consultó producción.

CLIENTE: LaExquisssita, commit b4270b712b2f2af2b002414a71b8e5beea9b0a74, checkout limpio. MANAGER: ExquisssitaAppManager Android nativo, SHA no obtenido. FLUTTER: exquisssita_manager, referencia histórica.

Raíz Kotlin CLIENTE: app/src/main/java/com/mirandadevsource/laexquisssita/. MANAGER: app/src/main/java/com/mirandadevsource/exquisssitaappmanager/.

| Hallazgo | Fuente | Tratamiento |
|---|---|---|
| Carnitas y pedidos para llevar | CLIENTE features/home/ui/HomeScreen.kt, WhatsAppContactBanner | Base de propuesta, confirmar vigencia |
| WhatsApp 529196732035; llamada 9196732035 | Mismo archivo | Contacto candidato |
| Periférico Oriente Sur s/n, Barrio Aeropuerto, Ocosingo, Chiapas | Mismo archivo, sucursal | Confirmar y obtener pin |
| Lunes a sábado 08:00–16:00; domingo 08:00–15:00 | Mismo archivo, horario | Confirmar antes de publicar |
| laexquisssita.com | Mismo archivo, WebsiteBannerCard | Intención de dominio, no propiedad comprobada |
| Novedades, QR, puntos y recompensas | CLIENTE docs/ARCHITECTURE.md y features/loyalty/ui/LoyaltyScreen.kt | Explicar club sin cifras ni promesas específicas |
| Política semestral de recompensas en UI | CLIENTE LoyaltyScreen.kt | No convertir en campaña sin revisión |
| Registro de visitas por QR | MANAGER domain/usecases/loyalty/RegisterCustomerVisitUseCase.kt | Operación permanece en caja |
| Producto con precio en centavos, categoría e inventario | MANAGER domain/entity/Product.kt | Modelo no equivale a menú autorizado |
| Promoción con términos, fechas y estado | MANAGER domain/entity/Promotion.kt | No copiar campañas sin validar vigencia |
| Paleta vainilla, café rojizo, chocolate, albaricoque | MANAGER ui/theme/Color.kt; CLIENTE docs/ARCHITECTURE.md | Identidad actual |
| Familia tipográfica de sistema | CLIENTE ui/theme/Type.kt | Fuente web será propuesta nueva |
| Mascotas aprobadas y maestros | CLIENTE branding/la-exquisssita/README.md | Reutilizar sin rediseño |
| Paleta distinta en Flutter | FLUTTER docs/design-system.md; MANAGER docs/migration-plan.md | Referencia histórica, no mezclar |
| Contacto MirandaDevSource | CLIENTE features/profile/ui/SettingsScreen.kt | Del desarrollador, excluir de contacto comercial |

## No comprobado al corte inicial

Menú y precios actuales, fotos autorizadas, historia/fundación, preparación artesanal, delivery, testimonios, redes, ficha Play Store, iOS, dominio y horarios especiales. No se extrajeron clientes, ventas ni inventario real. La historia y los datos comerciales se actualizaron en las confirmaciones siguientes.

## Confirmaciones futuras

Registrar campo, valor, responsable, fecha y evidencia. Los datos encontrados en código Android fueron históricos/candidatos hasta la confirmación del usuario registrada abajo.

## Actualización confirmada — 4 de noviembre de 2026

El usuario confirmó en este chat la propuesta, Astro y los datos comerciales: teléfono 919 673 2035 (WhatsApp +52 919 673 2035), Periférico Oriente Sur s/n, Barrio Aeropuerto, Ocosingo, Chiapas; lunes a sábado 08:00–16:00, domingo 08:00–15:00. Esto reemplaza el estado candidato/pendiente de esas filas históricas. No se confirmó el pin de Maps ni la propiedad del dominio.

Añadió Quiénes somos y Nuestra historia al alcance. En ese momento aún no se había compartido el relato; la confirmación que sigue reemplaza ese estado pendiente.

## Confirmación de historia — 4 de noviembre de 2026

El usuario compartió para publicación que La Exquisssita se fundó en 1998 por Valentín Miranda Martínez y Beatriz Silva Bailón; que ha permanecido en el mismo lugar; que el negocio se ha manejado en familia, siguiendo sus tradiciones; y que actualmente lo lleva su hijo Valentín Miranda, quien atiende junto a su esposa Roselia Cruz y cuida el legado de los fundadores. El texto de `src/content/business.ts` es una paráfrasis editorial fiel a esos datos, no una cita textual. No se añadió método de preparación ni antigüedad distinta a 1998.

## Confirmación de ubicación — 4 de noviembre de 2026

El usuario proporcionó el enlace de Maps `https://maps.app.goo.gl/wbjhmojxTzkYqQvd8?g_st=iw` para La Exquisssita. La ficha enlazada se identificó como «Carnitas estilo Michoacán la EXQUISSSITA», en Periférico Oriente Sur s/n, Barrio Aeropuerto, Ocosingo, Chiapas. Se validó el pin de la ficha y se obtuvo su iframe oficial de «Compartir > Incorporar un mapa»; el botón público abre el enlace del negocio en Google Maps y el bloque Visitarnos incluye ese mapa. La coordenada de la ficha corresponde al lugar del enlace, no a una geocodificación deducida de la dirección. No se confirmó propiedad del dominio.

## Confirmaciones del cliente — 6 de noviembre de 2026

El usuario aclaró que `919 673 2035` es la línea fija para llamadas y que WhatsApp utiliza otra línea, `+52 919 133 0424`. Esta confirmación sustituye el número de WhatsApp anterior; el teléfono fijo permanece igual. También confirmó que las afirmaciones del borrador de «Quiénes somos» (negocio pionero, calidad, servicio, tradición y productos derivados del cerdo) corresponden al copy solicitado por el cliente; el contenido se registra como `confirmed` en `src/content/business.ts`.

El cliente compartió el menú actual: tacos y gorditas; chicharrón de cáscara y polvito; chorizo y carne por kilo con sus presentaciones/importe; refrescos, Boing y aguas naturales. El detalle exacto se mantiene en `src/content/menu.ts`, sin inventar precios.

## Procedencia de la fotografía de bebidas — 6 de noviembre de 2026

Para el grupo de bebidas se usa una fotografía ilustrativa de A L, publicada en Unsplash como «A glass of soda sitting on top of a wooden table». La [ficha de la foto](https://unsplash.com/photos/a-glass-of-soda-sitting-on-top-of-a-wooden-table-b2lznGjY97A) indica uso gratuito bajo la [Unsplash License](https://unsplash.com/license). Se generó un WebP optimizado en `public/menu/bebida-cola-ilustrativa.webp`. El texto alternativo y la leyenda aclaran que no es una foto del local ni del inventario. Las fotos de los alimentos quedan pendientes de material autorizado del cliente.

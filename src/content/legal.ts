export interface LegalSection {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
}

export const termsAndConditions: readonly LegalSection[] = [
  {
    title: '1. Objeto y aceptación',
    paragraphs: [
      'El presente acuerdo regula los términos y condiciones de uso de la aplicación móvil "La Exquisssita" y el funcionamiento del Programa de Lealtad (Club de Recompensas), operado por La Exquisssita en beneficio de sus clientes. El acceso, registro o utilización de la aplicación implica la aceptación plena e incondicional de estos términos.',
    ],
  },
  {
    title: '2. Requisitos de edad y consentimiento',
    paragraphs: [
      'Para crear una cuenta de socio en la aplicación se requiere tener un mínimo de 14 años de edad cumplidos. Las personas usuarias de entre 14 y 17 años declaran contar con la debida autorización y supervisión de sus padres o tutores legales para el uso de la aplicación y su participación en el Club de Recompensas.',
    ],
  },
  {
    title: '3. Tarjeta digital y carácter intransferible',
    paragraphs: [
      'Al registrarse, el socio recibe una Tarjeta Digital identificada con un código QR permanente. Dicho código QR, las visitas acumuladas, los puntos y las recompensas son estrictamente personales e intransferibles, pertenecientes en exclusiva al titular de la cuenta registrada. Queda prohibida su cesión, préstamo, venta o intercambio con terceras personas.',
    ],
  },
  {
    title: '4. Acreditación de visitas y puntos',
    items: [
      'La única vía válida y oficial para acumular puntos es mediante el registro de visitas presenciales en el establecimiento físico, presentando el código QR en caja al momento de su consumo.',
      'Se otorgarán exactamente 10 puntos por cada visita válida registrada conforme a las políticas operativas del restaurante.',
      'Ningún tercero, intermediario ni plataforma externa está facultado para emitir o validar puntos. La Exquisssita no vende puntos ni los compra a cambio de dinero o contraprestación económica de ningún tipo.',
      'Los puntos y visitas carecen de valor monetario intrínseco y en ningún caso son canjeables por dinero en efectivo o transferibles a cuentas bancarias.',
    ],
  },
  {
    title: '5. Vigencia y reinicio semestral',
    paragraphs: [
      'Con el propósito de dinamizar el programa y la concurrencia al establecimiento, los puntos acumulados y las recompensas del Club de Lealtad se reinician de manera semestral (cada seis meses). El socio reconoce y acepta que los puntos no utilizados o las recompensas no canjeadas dentro del semestre correspondiente expirarán de manera definitiva al término de dicho periodo, sin derecho a reclamación, reembolso o compensación retroactiva.',
    ],
  },
  {
    title: '6. Canje de recompensas y promociones',
    items: [
      'La Exquisssita se reserva el derecho de validar, conceder o rechazar cualquier solicitud de canje de recompensas o aplicación de promociones en caso de detectar anomalías o inconsistencias.',
      'El catálogo de recompensas, productos disponibles y promociones publicadas es dinámico y podrá ser modificado, sustituido o desactivado en cualquier momento conforme a la estacionalidad, disponibilidad de inventario o políticas operativas del negocio.',
    ],
  },
  {
    title: '7. Suspensión o cancelación de cuenta',
    paragraphs: [
      'La Exquisssita se reserva el derecho de suspender o cancelar la cuenta de cualquier socio de forma inmediata, definitiva, inobjetable y sin necesidad de previo aviso, cuando se detecte o se tenga fundada sospecha de mal uso de la aplicación, suplantación de identidad, abuso del club de recompensas, simulación de visitas o conductas contrarias a la buena fe comercial.',
    ],
  },
  {
    title: '8. Uso indebido y seguridad informática',
    paragraphs: ['Al usar la aplicación, la persona usuaria se compromete a no realizar actividades maliciosas, incluidas:'],
    items: [
      'Intentos de vulnerar o sortear las medidas de seguridad, autenticación o integridad de las bases de datos.',
      'Realizar ingeniería inversa, descompilación o extracción no autorizada del código fuente o de la propiedad intelectual de la aplicación.',
      'Introducir código malicioso, scripts automatizados o herramientas de explotación de vulnerabilidades.',
    ],
  },
  {
    title: '9. Infraestructura, disponibilidad y proveedores',
    items: [
      'La aplicación depende de servicios en la nube de terceros, como Supabase, para la autenticación, el almacenamiento y el procesamiento de información.',
      'En consecuencia, eventuales interrupciones técnicas, caídas de conectividad, latencias o saturaciones ajenas al control directo de La Exquisssita no generarán responsabilidad legal para el negocio ni facultarán al usuario para exigir indemnizaciones o compensaciones adicionales.',
      'Ante situaciones de fuerza mayor, ciberataques o secuestro de datos en la infraestructura en la nube, La Exquisssita no estará obligada al pago de rescates o demandas económicas, reservándose el derecho de restablecer y reiniciar (reboot) los datos desde respaldos seguros para salvaguardar la operación.',
    ],
  },
  {
    title: '10. Funcionamiento sin conexión y sincronización',
    paragraphs: [
      'La arquitectura de la aplicación contempla mecanismos de operación sin conexión temporal (offline-first). No obstante, el usuario reconoce que pueden presentarse fallos de sincronización local por problemas de red en los dispositivos. El negocio no asume responsabilidad por discrepancias originadas por falta de sincronización oportuna y se reserva la facultad de validar manualmente la legitimidad de cualquier registro pendiente.',
    ],
  },
  {
    title: '11. Distribución y actualizaciones',
    paragraphs: [
      'La aplicación oficial se distribuye exclusivamente a través de las tiendas autorizadas (Google Play Store y eventualmente Apple App Store). La Exquisssita no distribuye paquetes de instalación APK de manera no oficial ni se responsabiliza de versiones obtenidas de fuentes no verificadas. La aplicación podrá recibir actualizaciones, modificaciones o ser dada de baja temporal o definitivamente sin necesidad de previo aviso ni derecho a reclamo alguno.',
    ],
  },
] satisfies readonly LegalSection[];

export const privacyNotice: readonly LegalSection[] = [
  {
    title: '1. Responsable y contacto',
    paragraphs: [
      'La Exquisssita, con domicilio de operación en Periférico Oriente Sur s/n, Barrio Aeropuerto, Ocosingo, Chiapas, es responsable del tratamiento de los datos personales relacionados con la cuenta y el Club de Lealtad de la aplicación.',
      'Para dudas sobre este aviso o para ejercer derechos sobre tus datos, escribe a carnitaslaexquisssita@gmail.com.',
    ],
  },
  {
    title: '2. Datos que trata la aplicación',
    paragraphs: ['Según las funciones utilizadas, la aplicación puede tratar estas categorías de datos:'],
    items: [
      'Nombre completo y correo electrónico de la cuenta.',
      'Contraseña para el acceso con correo, gestionada por el proveedor de autenticación; o datos de identidad recibidos mediante el inicio de sesión con Google.',
      'Número celular, opcional y editable desde el perfil.',
      'Identificador de la cuenta, código QR de socio, visitas presenciales, saldo de puntos y canjes de recompensas.',
      'Token de notificaciones push y modelo del dispositivo Android cuando la cuenta inicia sesión y se habilita el registro del dispositivo.',
    ],
  },
  {
    title: '3. Datos que no solicita y permisos',
    items: [
      'La aplicación no solicita fecha o lugar de nacimiento para derivar o consultar la CURP, ni solicita la CURP.',
      'La aplicación no solicita fotografías ni copias de identificaciones oficiales como INE/IFE o pasaporte.',
      'El manifiesto de Android declara acceso a Internet y permiso para mostrar notificaciones. La aplicación no solicita permisos para leer contactos, galería privada, micrófono o registros de llamadas.',
      'El permiso de notificaciones se usa para avisos sobre promociones, novedades del menú y recompensas. Puedes desactivarlo en los ajustes de Android.',
    ],
  },
  {
    title: '4. Finalidades',
    paragraphs: ['Los datos se usan para:'],
    items: [
      'Crear, autenticar y proteger cuentas de socios.',
      'Administrar el perfil, la Tarjeta Digital, visitas, puntos y canjes en sucursal.',
      'Enviar notificaciones sobre promociones, confirmaciones de canje y novedades del menú cuando el dispositivo está registrado y las notificaciones están permitidas.',
      'Atender consultas y solicitudes relacionadas con la cuenta y los datos personales.',
    ],
  },
  {
    title: '5. Proveedores que intervienen',
    paragraphs: [
      'La aplicación no vende los datos personales. Para ofrecer sus funciones, transmite o permite que proveedores tecnológicos traten algunos datos: Supabase interviene en autenticación y servicios de base de datos; Google interviene cuando eliges iniciar sesión con Google; Firebase Cloud Messaging, un servicio de Google, entrega notificaciones push y utiliza un token de dispositivo. El token y el modelo del dispositivo también se registran en el servicio de datos de la aplicación para asociar las notificaciones con la cuenta.',
      'Estos proveedores reciben los datos técnicos necesarios para prestar esas funciones. Sus tratamientos también están sujetos a sus propios avisos y condiciones. La información no se comparte para venderla o alquilarla.',
    ],
  },
  {
    title: '6. Almacenamiento y medidas de seguridad',
    paragraphs: [
      'La cuenta y los datos del Club se gestionan mediante servicios de Supabase. El acceso a los datos de clientes está protegido por políticas de seguridad a nivel de fila (Row Level Security). La app también se comunica con los servicios externos para autenticación y notificaciones. Ningún sistema conectado a Internet puede garantizar seguridad absoluta.',
    ],
  },
  {
    title: '7. Conservación, derechos y eliminación de cuenta',
    paragraphs: [
      'Puedes actualizar tu nombre y teléfono desde Perfil. También puedes eliminar tu cuenta desde Ajustes > Eliminar mi cuenta. La app comunica que la baja es permanente, revoca el QR y cancela los puntos y la tarjeta.',
      'Después de la solicitud, la implementación de la app anonimiza el perfil y conserva un registro técnico mínimo: un HMAC del correo normalizado en una lista restringida para impedir que se vuelva a registrar, además de un registro anonimizado que conserva referencias necesarias para el historial. La documentación técnica actual no especifica un plazo de expiración para esos registros.',
      'Si no puedes acceder a la app, puedes iniciar una solicitud externa desde la página de eliminación de cuenta. Para atenderla, se solicitará identificar la cuenta asociada. No envíes contraseñas ni códigos QR.',
      'También puedes solicitar acceso, rectificación, cancelación u oposición (derechos ARCO) escribiendo a carnitaslaexquisssita@gmail.com. Incluye cómo podemos identificar la cuenta y qué solicitud deseas realizar; no compartas contraseñas. La atención de solicitudes se realizará conforme a la legislación aplicable.',
    ],
  },
] satisfies readonly LegalSection[];

export const accountDeletionMailto = `mailto:carnitaslaexquisssita@gmail.com?subject=${encodeURIComponent('Solicitud de eliminación de cuenta de socio')}&body=${encodeURIComponent('Solicito la eliminación de mi cuenta de socio de La Exquisssita.\n\nCorreo de la cuenta:\nNombre del perfil:\n\nNo incluyo contraseña ni código QR.')}`;

export type EditorialStatus = 'draft' | 'confirmed';

export interface EditorialText {
  title: string;
  text: string;
  status: EditorialStatus;
  note: string;
}

export interface BusinessContent {
  name: string;
  phone: { display: string; href: string };
  whatsapp: { href: string; message: string };
  maps: { href: string; embed: string; placeName: string };
  address: string;
  hours: ReadonlyArray<{ days: string; opens: string; closes: string }>;
  about: EditorialText;
  history: EditorialText;
  app: {
    title: string;
    text: string;
    features: ReadonlyArray<{ title: string; description: string }>;
  };
}

export const business = {
  name: 'La Exquisssita',
  phone: {
    display: '919 673 2035',
    href: 'tel:+529196732035',
  },
  whatsapp: {
    href: 'https://wa.me/529191330424?text=Hola%2C%20quisiera%20consultar%20un%20pedido%20para%20llevar%20en%20La%20Exquisssita',
    message: 'Hola, quisiera consultar un pedido para llevar en La Exquisssita',
  },
  maps: {
    href: 'https://maps.app.goo.gl/wbjhmojxTzkYqQvd8',
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.324707116443!2d-92.09043609999999!3d16.909267799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f2ebd84d5cb87d%3A0xf4e2fa283ee6648a!2sCarnitas%20estilo%20Michoac%C3%A1n%20la%20EXQUISSSITA!5e0!3m2!1ses-419!2smx!4v1793822725746!5m2!1ses-419!2smx',
    placeName: 'Carnitas estilo Michoacán la EXQUISSSITA',
  },
  address: 'Periférico Oriente Sur s/n, Barrio Aeropuerto, Ocosingo, Chiapas',
  hours: [
    { days: 'Lunes a sábado', opens: '08:00', closes: '16:00' },
    { days: 'Domingo', opens: '08:00', closes: '15:00' },
  ],
  about: {
    title: 'Quiénes somos',
    text: 'Somos Carnitas al estilo Michoacán La Exquisssita, una taquería fundada en Ocosingo y pioneros en la venta de carnitas. Además de nuestros exquisssitos tacos, ofrecemos otros productos derivados del cerdo, como chicharrón y chorizo. Nuestro negocio se distingue por ofrecer productos de alta calidad y un servicio excepcional, manteniendo siempre nuestras tradiciones y valores, siempre con el objetivo de satisfacer a nuestros clientes con el mejor sabor posible.',
    status: 'confirmed',
    note: 'Copy y afirmaciones solicitados por el cliente, confirmados por el usuario responsable el 6 de noviembre de 2026.',
  },
  history: {
    title: 'Un pedazo de historia',
    text: 'En 1998, don Valentín Miranda Martínez y doña Beatriz Silva Bailón fundaron La Exquisssita, con el objetivo de ofrecer a la comunidad el mejor sabor de carnitas al estilo Michoacán. Desde entonces, el negocio ha seguido adelante en familia, conservando sus tradiciones y convirtiendose en un referente de la gastronomía local. Hoy lo lleva su hijo, don Valentín Miranda, quien atiende personalmente junto a su esposa, Roselia Cruz. Con cariño y respeto, continúan el legado de quienes lo iniciaron. ',
    status: 'confirmed',
    note: 'Relato redactado a partir de la información compartida por el usuario responsable del proyecto el 4 de noviembre de 2026.',
  },
  app: {
    title: 'Tu próxima visita empieza aquí',
    text: 'Consulta las novedades de La Exquisssita y ten a mano tu tarjeta digital para presentarla en caja.',
    features: [
      {
        title: 'Tarjeta digital',
        description: 'Tenla a mano y preséntala en caja durante tu visita.',
      },
      {
        title: 'Novedades',
        description: 'Consulta lo que La Exquisssita comparte desde su app.',
      },
    ],
  },
} satisfies BusinessContent;

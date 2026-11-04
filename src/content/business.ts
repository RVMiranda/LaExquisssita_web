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
    href: 'https://wa.me/529196732035?text=Hola%2C%20quisiera%20consultar%20un%20pedido%20para%20llevar%20en%20La%20Exquisssita',
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
    text: 'Somos La Exquisssita, un negocio de carnitas en Ocosingo. Puedes visitarnos o escribirnos para consultar tu pedido para llevar.',
    status: 'draft',
    note: 'Borrador editorial basado solo en carnitas, Ocosingo y pedidos para llevar. Falta aprobación del negocio.',
  },
  history: {
    title: 'Nuestra historia',
    text: 'En 1998, don Valentín Miranda Martínez y doña Beatriz Silva Bailón fundaron La Exquisssita en este mismo lugar de Ocosingo. Desde entonces, el negocio ha seguido adelante en familia, conservando sus tradiciones. Hoy lo lleva su hijo, don Valentín Miranda, quien atiende personalmente junto a su esposa, Roselia Cruz. Con cariño y respeto, continúan el legado de quienes lo iniciaron.',
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

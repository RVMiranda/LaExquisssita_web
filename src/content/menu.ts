export interface MenuGroup {
  title: string;
  items: readonly string[];
  note?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  description: string;
  groups: readonly MenuGroup[];
  image?: {
    src: string;
    alt: string;
    credit: string;
    source: string;
  };
}

const meatCuts = [
  'Maciza',
  'Surtida',
  'Cuerito',
  'Buche',
  'Oreja',
  'Costilla',
  'Cachete',
  'Lengua',
  'Cabeza',
  'Hígado',
] as const;

export const menuCategories: readonly MenuCategory[] = [
  {
    id: 'tacos-gorditas',
    title: 'Tacos y gorditas',
    description: 'Elige el corte que más se te antoje.',
    groups: [
      {
        title: 'Carnes disponibles',
        items: meatCuts,
      },
    ],
  },
  {
    id: 'carne-por-kilo',
    title: 'Carne para llevar',
    description: 'Los mismos cortes, pesados por kilo para llevar.',
    groups: [
      {
        title: 'Cortes',
        items: meatCuts,
      },
      {
        title: 'Cómo pedir',
        items: ['¼ kg', '½ kg', '¾ kg', '1 kg'],
        note: 'También puedes pedir por importe; por ejemplo, $100.',
      },
    ],
  },
  {
    id: 'chicharron-chorizo',
    title: 'Chicharrón y chorizo',
    description: 'Dos clásicos para completar tu visita.',
    groups: [
      {
        title: 'Chicharrón',
        items: ['De cáscara', 'Polvito de chicharrón'],
      },
      {
        title: 'Chorizo por kilo',
        items: ['¼ kg', '½ kg'],
        note: 'También puedes pedir por importe; por ejemplo, $30.',
      },
    ],
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    description: 'Refrescos, jugos y aguas 100% naturales.',
    groups: [
      {
        title: 'Refrescos',
        items: [
          'Coca-Cola',
          'Fanta de naranja',
          'Fanta de fresa',
          'Fanta de durazno',
          'Fresca',
          'Manzana Mundet',
          'Sangría',
          'Mirinda',
          'Manzanita Sol',
        ],
      },
      {
        title: 'Jugos Boing',
        items: ['Mango', 'Fresa', 'Guayaba'],
      },
      {
        title: 'Aguas 100% naturales',
        items: ['Piña', 'Melón', 'Avena'],
      },
    ],
    image: {
      src: '/menu/bebida-cola-ilustrativa.webp',
      alt: 'Vaso de refresco de cola con hielo; imagen ilustrativa, no tomada en La Exquisssita.',
      credit: 'Foto de A L en Unsplash',
      source: 'https://unsplash.com/photos/a-glass-of-soda-sitting-on-top-of-a-wooden-table-b2lznGjY97A',
    },
  },
];

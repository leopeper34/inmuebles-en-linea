import paola from '../assets/paola.jpg';


const images = import.meta.glob('../assets/CB/*.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>
const imageList = Object.values(images)

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  constructionArea: number;
  type: 'Casa' | 'Departamento' | 'Villa';
  image: string;
  images: string[];
  description: string;
  features: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Villa de Lujo en Campestre',
    price: 4800000,
    location: 'Campestre, Aguascalientes, AGS',
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    constructionArea: 280,
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
    ],
    description: 'Espectacular villa moderna con acabados de lujo en la exclusiva zona Campestre de Aguascalientes. Cuenta con amplios espacios, jardín privado, alberca y todas las comodidades para una vida de lujo.',
    features: ['Jardín privado', 'Alberca', 'Garaje para 3 autos', 'Sistema de seguridad', 'Aire acondicionado', 'Cocina gourmet', 'Cuarto de servicio'],
    agent: {
      name: 'Joana Paola Ramirez',
      phone: '+52 449 218 7657',
      email: 'Joanaimobiliaria@gmail.com',
      image: paola
    }
  },
  {
    id: '2',
    title: 'Departamento Premium en Centro Histórico',
    price: 2800000,
    location: 'Centro Histórico, Aguascalientes, AGS',
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    constructionArea: 105,
    type: 'Departamento',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop'
    ],
    description: 'Elegante departamento en el corazón del Centro Histórico de Aguascalientes. Diseño contemporáneo con acabados de primera calidad y vista a la Catedral. Perfecta ubicación para disfrutar de la cultura y gastronomía local.',
    features: ['Vista al Centro Histórico', 'Balcón francés', 'Cocina integral', 'Amenidades del edificio', 'Estacionamiento techado', 'Seguridad 24/7'],
    agent: {
      name: 'Joana Paola Ramirez',
      phone: '+52 449 218 7657',
      email: 'Joanaimobiliaria@gmail.com',
      image: paola
    }
  },
  {
    id: '3',
    title: 'Casa Colonial Renovada en Barrio San Marcos',
    price: 3200000,
    location: 'Barrio San Marcos, Aguascalientes, AGS',
    bedrooms: 3,
    bathrooms: 2,
    area: 250,
    constructionArea: 210,   
    type: 'Casa',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'
    ],
    description: 'Hermosa casa colonial completamente renovada en el tradicional Barrio San Marcos, conservando su encanto original con todas las comodidades modernas. Ubicada a pasos de la famosa Feria de San Marcos.',
    features: ['Arquitectura colonial', 'Patio central', 'Chimenea', 'Techos altos', 'Cerca de la Feria de San Marcos', 'Pisos de cantera', 'Estacionamiento'],
    agent: {
      name: 'Joana Paola Ramirez',
      phone: '+52 449 218 7657',
      email: 'Joanaimobiliaria@gmail.com',
      image: paola
    }
  },
  {
    id: '4',
    title: 'Villa Contemporánea en Residencial Las Américas',
    price: 5500000,
    location: 'Las Américas, Aguascalientes, AGS',
    bedrooms: 4,
    bathrooms: 4,
    area: 380,
    constructionArea: 320,
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'
    ],
    description: 'Exclusiva villa contemporánea en el prestigioso fraccionamiento Las Américas. Diseño de vanguardia con espacios abiertos, tecnología domótica y acabados de la más alta calidad.',
    features: ['Domótica completa', 'Alberca infinity', 'Cocina premium', 'Vestidor principal', 'Área de BBQ', 'Gym privado', 'Oficina en casa'],
    agent: {
      name: 'Joana Paola Ramirez',
      phone: '+52 449 218 7657',
      email: 'Joanaimobiliaria@gmail.com',
      image: paola
    }
  },
  {
    id: '5',
    title: 'Casa Moderna en Bosques del Prado',
    price: 2900000,
    location: 'Bosques del Prado, Aguascalientes, AGS',
    bedrooms: 3,
    bathrooms: 2,
    area: 220,
    constructionArea: 180,
    type: 'Casa',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop'
    ],
    description: 'Moderna casa en privada con seguridad 24/7 en Bosques del Prado. Excelente ubicación cerca de centros comerciales, escuelas privadas y hospitales. Ideal para familias.',
    features: ['Seguridad 24/7', 'Áreas verdes comunes', 'Jardín privado', 'Estacionamiento doble', 'Cerca de Plaza Vestir', 'Casa club', 'Alberca comunitaria'],
    agent: {
      name: 'Joana Paola Ramirez',
      phone: '+52 449 218 7657',
      email: 'Joanaimobiliaria@gmail.com',
      image: paola
    }
  },
  {
    id: '6',
  title: 'Casa en Reserva Bosque Sereno',
  price: 2360000,
  location: 'Avenida Reserva Bosque Sereno 103 Reserva Bosque Sereno, 20326 Aguascalientes, Ags.',
  bedrooms: 3,
  bathrooms: 3,
  area: 120,
  constructionArea: 140.5,
  type: 'Casa',
  image: imageList[0],
  images: imageList.slice(0, 13),
  description: 'Te presento una propiedad que realmente destaca por su funcionalidad y comodidad. Esta casa es perfecta para quienes buscan un espacio acogedor y práctico.',
  features: ['Dos pisos', 'Estacionamiento 2 vehiculos', '3 Recamaras', '2/50 Baños', 'Patio', 'Zona lavado', 'Áreas verdes', 'Salon de eventos', 'Alberca climatizada', 'coto cerrado'],
    agent: {
      name: 'Joana Paola Ramirez',
      phone: '+52 449 218 7657',
      email: 'Joanaimobiliaria@gmail.com',
      image: paola
    }
  }
];
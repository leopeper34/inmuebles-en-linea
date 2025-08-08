import paola from '../assets/paola.jpg';


const allImages = import.meta.glob('../assets/propiedades/**/*.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>

// 2️⃣ Función para obtener imágenes por carpeta
function getImagesByFolder(folder: string) {
  return Object.entries(allImages)
    .filter(([path]) => path.includes(`/${folder}/`)) // Solo imágenes de esa carpeta
    .map(([, src]) => src)
}


export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  vehicles: number;
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
    title: 'Casa en Villas de Ntra. Sra. de la Asunción',
    price: 2400000,
    location: 'Villas de Ntra. Sra. de la Asunción 213 C. De Los Gallos Aguascalientes, Aguascalientes, AGS',
    bedrooms: 3,
    bathrooms: 2.5,
    vehicles: 3,
    area: 138,
    constructionArea: 185,
    type: 'Casa',
    image: getImagesByFolder('casa1')[0], // Imagen principal
    images: getImagesByFolder('casa1'),   // Todas las imágenes de esa propiedad
    description: 'Te presento una propiedad amplia en el sector de encinos (cerca de villa teresa) EXCELENTE OPORTUNIDAD',
    features: ['3 recamaras en planta alta','protecciones en ventanas','Jardín de gran tamaño', 'Sala de tv', 'Espacio para 3 autos', 'Sala comedor con piso laminado', 'Cocina integral con estufa y campana', 'Sistema de bomba y tinaco', 'Tanque estacionario','Medio baño planta baja'],
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
    vehicles: 3,
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
    vehicles: 3,
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
    vehicles: 3,
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
    vehicles: 3,
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
  price: 2375000,
  location: 'Avenida Reserva Bosque Sereno 103 Reserva Bosque Sereno, 20326 Aguascalientes, Ags.',
  bedrooms: 3,
  bathrooms: 2.5,
  vehicles: 2,
  area: 117,
  constructionArea: 140,
  type: 'Casa',
  image: getImagesByFolder('casa6')[0], // Imagen principal
  images: getImagesByFolder('casa6'),   // Todas las imágenes de esa propiedad
  description: 'Te presento una propiedad de dos plantas en coto con amenidades increibles como áreas verdes, alberca climatizada, juegos infantiles, cancha de futbol y basquetbol, asadores y salon de eventos',
  features: ['Dos pisos', 'Estacionamiento 2 vehiculos', '3 Recamaras', '2/50 Baños', 'Cocina equipada', 'Zona lavado',  'coto cerrado'],
    agent: {
      name: 'Joana Paola Ramirez',
      phone: '+52 449 218 7657',
      email: 'Joanaimobiliaria@gmail.com',
      image: paola
    }
  }
];
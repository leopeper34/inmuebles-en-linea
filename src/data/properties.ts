
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
  type: 'Casa' | 'Departamento' | 'Villa';
  image: string;
  images: string[];
  description: string;
  features: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
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
      name: 'María Elena González',
      phone: '+52 449 123 4567',
      email: 'maria@inmoluxags.com'
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
      name: 'Carlos Alberto Rodríguez',
      phone: '+52 449 987 6543',
      email: 'carlos@inmoluxags.com'
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
      name: 'Ana Patricia Martínez',
      phone: '+52 449 555 0123',
      email: 'ana@inmoluxags.com'
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
      name: 'Roberto Silva Hernández',
      phone: '+52 449 876 5432',
      email: 'roberto@inmoluxags.com'
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
      name: 'Laura Sofía Hernández',
      phone: '+52 449 234 5678',
      email: 'laura@inmoluxags.com'
    }
  },
  
{
  id: '6',
  title: 'Casa en Reserva Bosque Sereno',
  price: 2360000,
  location: 'Avenida Reserva Bosque Sereno 103 Reserva Bosque Sereno, 20326 Aguascalientes, Ags.',
  bedrooms: 3,
  bathrooms: 3,
  area: 140.5,
  type: 'Casa',
  image: imageList[0], 
  images: imageList.slice(0, 13),
  description: 'Casa moderna de dos plantas en residencial privado con seguridad. Cuenta con 3 recámaras, 2.5 baños, cocina integral , patio trasero y zona de lavado. Ideal para familias jóvenes.',
  features: ['Casa moderna', 'Estacionamiento 2 vehiculos', 'Seguridad 24/7', 'Alberca comunitaria climatizada', 'Asadores', 'Juegos infantiles', 'Áreas verdes', 'Salon de eventos'],
  agent: {
    name: 'Luis Martin Zamarripa',
    phone: '+52 449 537 1611',
    email: 'luiz977@gmail.com'
  }
}

    
  
];
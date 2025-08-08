import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-real-estate.jpg';
import { properties } from '@/data/properties';

const Hero = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    location: '',
    type: '',
    priceRange: ''
  });

  // Extraer ubicaciones únicas de las propiedades
  const uniqueLocations = [...new Set(properties.map(property => 
    property.location.split(',')[0].trim() // Tomar solo la primera parte antes de la coma
  ))];

  const handleSearch = () => {
    // Construir parámetros de búsqueda
    const searchParams = new URLSearchParams();
    
    if (searchData.location && searchData.location !== 'all') {
      searchParams.set('location', searchData.location);
    }
    if (searchData.type && searchData.type !== 'all') {
      searchParams.set('type', searchData.type);
    }
    if (searchData.priceRange && searchData.priceRange !== 'all') {
      searchParams.set('priceRange', searchData.priceRange);
    }
    
    // Navegar a la página de propiedades con los filtros
    navigate(`/propiedades?${searchParams.toString()}`);
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury Real Estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-navy-deep/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Tu hogar en
            <span className="text-luxury-gold block">Aguascalientes</span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Propiedades exclusivas en Aguascalientes, AGS. Experimenta la comodidad que mereces en la ciudad más bella de México.
          </p>

          {/* Search Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-luxury">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select onValueChange={(value) => setSearchData({...searchData, location: value})}>
                <SelectTrigger>
                  <MapPin className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Zona de Aguascalientes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las zonas</SelectItem>
                  {uniqueLocations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select onValueChange={(value) => setSearchData({...searchData, type: value})}>
                <SelectTrigger>
                  <Home className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Tipo de propiedad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="casa">Casa</SelectItem>
                  <SelectItem value="departamento">Departamento</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(value) => setSearchData({...searchData, priceRange: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Rango de precio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-2000000">Hasta $2,000,000</SelectItem>
                  <SelectItem value="2000000-3500000">$2,000,000 - $3,500,000</SelectItem>
                  <SelectItem value="3500000-5000000">$3,500,000 - $5,000,000</SelectItem>
                  <SelectItem value="5000000+">Más de $5,000,000</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="hero" size="lg" onClick={handleSearch} className="w-full">
                <Search className="h-5 w-5 mr-2" />
                Buscar
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold">∞</div>
              <div className="text-white/80">Propiedades</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold">15+</div>
              <div className="text-white/80">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold">29+</div>
              <div className="text-white/80">Clientes satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { properties } from '@/data/properties';

import { useToast } from '@/hooks/use-toast';
import { 
  Bed, Bath, Square, MapPin, Phone, Mail, ArrowLeft, 
  ChevronLeft, ChevronRight, Check, Heart, Share2, Calendar, Home, Car
} from 'lucide-react';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Propiedad no encontrada</h1>
            <Link to="/propiedades">
              <Button variant="luxury">Volver a propiedades</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0
    }).format(price);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleShare = async () => {
    const shareData = {
      title: property.title,
      text: `Mira esta increíble propiedad en ${property.location}`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Error sharing:', error);
        handleFallbackShare();
      }
    } else {
      handleFallbackShare();
    }
  };

  const handleFallbackShare = () => {
    const url = window.location.href;
    const text = `${property.title} - ${property.location}`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${text}\n${url}`).then(() => {
        toast({
          title: "Enlace copiado",
          description: "El enlace de la propiedad se ha copiado al portapapeles",
        });
      });
    } else {
      // Fallback para navegadores más antiguos
      const textArea = document.createElement('textarea');
      textArea.value = `${text}\n${url}`;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      toast({
        title: "Enlace copiado",
        description: "El enlace de la propiedad se ha copiado al portapapeles",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-4 sm:mb-6">
          <Link to="/propiedades" className="flex items-center text-primary hover:text-primary/80 text-sm sm:text-base">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Volver a propiedades
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Images and Main Info */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="relative mb-4 sm:mb-6">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                {property.images.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/50 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm">
                  {currentImageIndex + 1} / {property.images.length}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {property.images.length > 1 && (
                <div className="flex space-x-2 mt-3 sm:mt-4 overflow-x-auto pb-2">
                  {property.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${property.title} ${index + 1}`}
                      className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded cursor-pointer transition-opacity flex-shrink-0 ${
                        index === currentImageIndex ? 'opacity-100 ring-2 ring-primary' : 'opacity-70'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Property Details */}
            <Card>
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl sm:text-2xl mb-2 pr-4">{property.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground mb-3 sm:mb-4">
                      <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                      <a 
                        href={`https://maps.google.com/maps?q=${encodeURIComponent(property.location)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base hover:text-primary transition-colors cursor-pointer underline"
                      >
                        {property.location}
                      </a>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-muted-foreground mb-3 sm:mb-4">
                      {property.bedrooms > 0 && (
                        <div className="flex items-center">
                          <Bed className="h-4 w-4 mr-1" />
                          <span className="text-sm sm:text-base">{property.bedrooms} recámaras</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        <span className="text-sm sm:text-base">{property.bathrooms} baños</span>
                      </div>
                      <div className="flex items-center">
                        <Car className="h-4 w-4 mr-1" />
                        <span className="text-sm sm:text-base">{property.vehicles} vehículos</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="h-4 w-4 mr-1" />
                        <span className="text-sm sm:text-base">{property.area}m² terreno</span>
                      </div>
                      <div className="flex items-center">
                        <Home className="h-4 w-4 mr-1" />
                        <span className="text-sm sm:text-base">{property.constructionArea}m² construcción</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:flex-col sm:space-x-0 sm:space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsFavorite(!isFavorite)}
                      className={`${isFavorite ? 'text-red-500' : ''} sm:w-full`}
                    >
                      <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
                      <span className="hidden sm:inline ml-2">Favorito</span>
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleShare} className="sm:w-full">
                      <Share2 className="h-4 w-4" />
                      <span className="hidden sm:inline ml-2">Compartir</span>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    {formatPrice(property.price)}
                  </div>
                  <Badge variant="secondary" className="text-sm w-fit">
                    {property.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Descripción</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {property.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Características</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Card */}
          <div className="lg:col-span-1">
            <Card className="lg:sticky lg:top-8">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Contactar Agente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3">
                    <img
                      src={property.agent.image}
                      alt={property.agent.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg">{property.agent.name}</h3>
                  <p className="text-muted-foreground text-sm">Agente Inmobiliario</p>
                </div>

                <div className="space-y-3">
                  <Button variant="hero" className="w-full text-sm sm:text-base" asChild>
                    <a href={`tel:${property.agent.phone}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      Llamar ahora
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full text-sm sm:text-base bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600" 
                    asChild
                  >
                    <a 
                      href={`https://wa.me/4492187657?text=Hola, me interesa esta propiedad: ${encodeURIComponent(property.title)} ubicada en ${encodeURIComponent(property.location)}. ¿Me puede dar más informes?`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Mandar msg
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full text-sm sm:text-base" asChild>
                    <a href={`mailto:${property.agent.email}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Enviar email
                    </a>
                  </Button>
                </div>

                <div className="text-xs sm:text-sm text-muted-foreground space-y-1">
                  <div className="flex items-center">
                    <Phone className="h-3 w-3 mr-2 flex-shrink-0" />
                    <span className="break-all">{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-3 w-3 mr-2 flex-shrink-0" />
                    <span className="break-all">{property.agent.email}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <Button 
                    variant="luxury" 
                    className="w-full text-sm sm:text-base"
                    asChild
                  >
                    <a 
                      href={`https://wa.me/4492187657?text=Buenos días, me gustaría agendar una visita para la propiedad "${encodeURIComponent(property.title)}" ubicada en ${encodeURIComponent(property.location)}. ¿Cuándo podríamos coordinar? Gracias.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Agendar visita
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
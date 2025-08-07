import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PropertyCard from './PropertyCard';
import { properties } from '@/data/properties';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProperties = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProperties = properties.filter(property => {
    if (activeTab === 'all') return true;
    return property.type.toLowerCase() === activeTab;
  }).slice(0, 6);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Propiedades Destacadas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección de propiedades en las mejores ubicaciones
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-5 mb-8">
            <TabsTrigger value="all">Todas</TabsTrigger>
            <TabsTrigger value="casa">Casas</TabsTrigger>
            <TabsTrigger value="apartamento">Apartamentos</TabsTrigger>
            <TabsTrigger value="villa">Villas</TabsTrigger>
            <TabsTrigger value="oficina">Oficinas</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Link to="/propiedades">
            <Button variant="luxury" size="lg">
              Ver todas las propiedades
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Search, HandHeart, Shield, TrendingUp, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Búsqueda Personalizada',
      description: 'Te ayudamos a encontrar la propiedad perfecta según tus necesidades específicas.'
    },
    {
      icon: Home,
      title: 'Venta de Propiedades',
      description: 'Maximizamos el valor de tu propiedad con estrategias de marketing efectivas.'
    },
    {
      icon: HandHeart,
      title: 'Asesoría Integral',
      description: 'Acompañamiento completo en todo el proceso de compra o venta.'
    },
    {
      icon: Shield,
      title: 'Garantía Legal',
      description: 'Todos los trámites legales y documentación manejados por expertos.'
    },
    {
      icon: TrendingUp,
      title: 'Inversión Inmobiliaria',
      description: 'Análisis de mercado y oportunidades de inversión rentables.'
    },
    {
      icon: Users,
      title: 'Atención Personalizada',
      description: 'Recibe atención inmediata y de calidad. Nos importa ofrecerte el mejor servicio.'

    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos servicios integrales para satisfacer todas tus necesidades inmobiliarias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-hover-custom transition-all duration-300 bg-gradient-card border-none">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-navy-deep" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
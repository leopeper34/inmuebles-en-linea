import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, MapPin, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Clientes Satisfechos', value: '1,000+' },
    { icon: Award, label: 'Años de Experiencia', value: '15+' },
    { icon: MapPin, label: 'Ciudades', value: '20+' },
    { icon: TrendingUp, label: 'Propiedades Vendidas', value: '2,500+' }
  ];

  const team = [
    {
      name: 'María González',
      position: 'Directora General',
      experience: '15 años de experiencia',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Carlos Rodríguez',
      position: 'Agente Senior',
      experience: '12 años de experiencia',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Ana Martínez',
      position: 'Especialista en Lujo',
      experience: '10 años de experiencia',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Roberto Silva',
      position: 'Asesor Legal',
      experience: '18 años de experiencia',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre InmoLux
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Somos líderes en el mercado inmobiliario de lujo con más de 15 años de experiencia 
              conectando familias con sus hogares perfectos.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-navy-deep" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-gradient-card border-none shadow-card-custom">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Misión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Facilitar el proceso de compra y venta de propiedades inmobiliarias mediante 
                  un servicio personalizado, profesional y de alta calidad. Nos comprometemos 
                  a superar las expectativas de nuestros clientes, ofreciendo soluciones 
                  integrales y un acompañamiento completo en cada transacción.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-none shadow-card-custom">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Visión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser la empresa inmobiliaria líder en México, reconocida por nuestra 
                  excelencia en el servicio, innovación en procesos y compromiso con la 
                  satisfacción del cliente. Aspiramos a transformar la experiencia inmobiliaria 
                  mediante tecnología avanzada y un equipo humano excepcional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nuestros Valores</h2>
            <p className="text-xl text-muted-foreground">
              Los principios que guían nuestro trabajo diario
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Confianza</h3>
              <p className="text-muted-foreground">
                Construimos relaciones duraderas basadas en la transparencia y honestidad.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Excelencia</h3>
              <p className="text-muted-foreground">
                Nos esforzamos por superar expectativas en cada detalle de nuestro servicio.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Innovación</h3>
              <p className="text-muted-foreground">
                Adoptamos las últimas tecnologías para mejorar la experiencia del cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-muted-foreground">
              Profesionales dedicados a hacer realidad tus sueños inmobiliarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-hover-custom transition-all duration-300 bg-gradient-card border-none">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-luxury opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-2">{member.position}</Badge>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
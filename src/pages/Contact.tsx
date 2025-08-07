import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Phone, Mail, MapPin, 
  Facebook, Instagram, Twitter, Linkedin 
} from 'lucide-react';
import InteractiveMap from '@/components/InteractiveMap';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Llamar',
      number1: '449 267 5079',
      number2: '449 218 7657',
      action1: 'tel:+524492675079',
      action2: 'tel:+524492187657'
    },
    {
      icon: Mail,
      title: 'Email',
      email: 'contacto@inmolux.com',
      action: 'mailto:contacto@inmolux.com?subject=Necesito ayuda para vender mi casa'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      address: 'Montes Himalaya 905, Jardines de la Concepción II, Aguascalientes',
      action: 'https://maps.google.com/?q=Montes+Himalaya+905,+Jardines+de+la+Concepción+II,+Aguascalientes'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contáctanos
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Estamos aquí para ayudarte a encontrar la propiedad perfecta. 
              Contacta con nuestros expertos inmobiliarios.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Teléfonos */}
            <Card className="group hover:shadow-hover-custom transition-all duration-300 bg-gradient-card border-none">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8 text-navy-deep" />
                </div>
                <h3 className="font-semibold text-foreground mb-4 text-lg">Llamar</h3>
                <div className="space-y-3">
                  <a 
                    href="tel:+524492675079" 
                    className="block text-primary hover:text-primary/80 transition-colors font-medium text-lg"
                  >
                    449 267 5079
                  </a>
                  <a 
                    href="tel:+524492187657" 
                    className="block text-primary hover:text-primary/80 transition-colors font-medium text-lg"
                  >
                    449 218 7657
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="group hover:shadow-hover-custom transition-all duration-300 bg-gradient-card border-none">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8 text-navy-deep" />
                </div>
                <h3 className="font-semibold text-foreground mb-4 text-lg">Email</h3>
                <a 
                  href="mailto:contacto@inmolux.com?subject=Necesito ayuda para vender mi casa&body=Hola, me gustaría recibir información sobre cómo vender mi casa. Espero su respuesta." 
                  className="text-primary hover:text-primary/80 transition-colors font-medium text-lg"
                >
                  contacto@inmolux.com
                </a>
              </CardContent>
            </Card>

            {/* Ubicación */}
            <Card className="group hover:shadow-hover-custom transition-all duration-300 bg-gradient-card border-none md:col-span-2 lg:col-span-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-navy-deep" />
                </div>
                <h3 className="font-semibold text-foreground mb-4 text-lg">Ubicación</h3>
                <a 
                  href="https://maps.google.com/?q=Montes+Himalaya+905,+Jardines+de+la+Concepción+II,+Aguascalientes" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Montes Himalaya 905<br/>
                  Jardines de la Concepción II<br/>
                  Aguascalientes
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Mapa y redes sociales */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Interactive Map */}
            <Card className="bg-gradient-card border-none">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 text-center">Encuéntranos</h3>
                <InteractiveMap />
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-gradient-card border-none">
              <CardContent className="p-6 flex flex-col justify-center">
                <h3 className="font-semibold text-foreground mb-6 text-center">Síguenos en redes</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center justify-center h-12 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors group"
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 mr-2" />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
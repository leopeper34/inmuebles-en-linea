import { Link } from 'react-router-dom';
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-8 w-8 text-luxury-gold" />
              <span className="font-bold text-2xl">InmoLux</span>
            </div>
            <p className="text-white/80 mb-4">
              Tu aliado en bienes raíces de lujo. Más de 15 años conectando familias con sus hogares perfectos.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-luxury-gold cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-luxury-gold cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-luxury-gold cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-luxury-gold cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-luxury-gold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-luxury-gold transition-colors">Inicio</Link></li>
              <li><Link to="/propiedades" className="text-white/80 hover:text-luxury-gold transition-colors">Propiedades</Link></li>
              <li><Link to="/nosotros" className="text-white/80 hover:text-luxury-gold transition-colors">Nosotros</Link></li>
              <li><Link to="/contacto" className="text-white/80 hover:text-luxury-gold transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-luxury-gold">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-white/80">Compra de propiedades</li>
              <li className="text-white/80">Venta de propiedades</li>
              <li className="text-white/80">Asesoría legal</li>
              <li className="text-white/80">Inversión inmobiliaria</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-luxury-gold">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-luxury-gold" />
                <span className="text-white/80">+52 4495371611</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-luxury-gold" />
                <span className="text-white/80">+52 4492675079</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-luxury-gold" />
                <span className="text-white/80">contacto@inmolux.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-luxury-gold mt-1" />
                <span className="text-white/80">
                  Montes Himalaya 905<br />
                  Jardines de la Concepción II, Aguascalientes
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 InmoLux. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
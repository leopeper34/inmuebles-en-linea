import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-muted-foreground mb-4">¡Oops! Página no encontrada</p>
        <p className="text-muted-foreground mb-8">La página que buscas no existe o ha sido movida.</p>
        <a href="/" className="inline-flex items-center px-6 py-3 bg-gradient-luxury text-navy-deep font-semibold rounded-md hover:shadow-hover-custom transition-all duration-300">
          Volver al Inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;

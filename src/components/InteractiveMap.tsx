import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapReady, setIsMapReady] = useState(false);

  // Coordenadas exactas para Montes Himalaya 905, Jardines de la Concepción II, Aguascalientes
  const officeLocation: [number, number] = [-102.2916, 21.8853];

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken.trim()) return;

    try {
      mapboxgl.accessToken = mapboxToken.trim();
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: officeLocation,
        zoom: 15,
      });

      // Add marker for office location
      new mapboxgl.Marker({
        color: '#1e40af', // Primary color from design system
        scale: 1.2
      })
        .setLngLat(officeLocation)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(
              `<div class="p-2">
                <h3 class="font-semibold text-sm">InmoLux - Oficina Principal</h3>
                <p class="text-xs text-gray-600">Montes Himalaya 905<br/>Jardines de la Concepción II<br/>Aguascalientes, Ags.</p>
              </div>`
            )
        )
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Add fullscreen control
      map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right');

      setIsMapReady(true);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isMapReady && !mapboxToken) {
    return (
      <div className="w-full h-64 bg-muted rounded-lg flex flex-col items-center justify-center p-6 space-y-4">
        <div className="text-center text-muted-foreground">
          <MapPin className="h-8 w-8 mx-auto mb-2" />
          <p className="text-sm font-medium mb-2">Mapa Interactivo</p>
          <p className="text-xs mb-4">Para ver el mapa, necesitas un token de Mapbox</p>
        </div>
        <div className="w-full max-w-sm space-y-2">
          <Input
            type="text"
            placeholder="Ingresa tu token público de Mapbox"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="text-xs"
          />
          <Button 
            onClick={initializeMap}
            size="sm"
            className="w-full"
            disabled={!mapboxToken.trim()}
          >
            Cargar Mapa
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Obtén tu token en <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-card">
      <div ref={mapContainer} className="absolute inset-0" />
      {!isMapReady && mapboxToken && (
        <div className="absolute inset-0 bg-muted/80 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
            <p className="text-sm">Cargando mapa...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;
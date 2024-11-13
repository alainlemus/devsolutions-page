import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';

const GlobeSection = () => {
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState(600); // Tamaño inicial para escritorio

  useEffect(() => {
    // Ajusta el tamaño de la esfera dependiendo del tamaño de la ventana
    const updateCanvasSize = () => {
      setCanvasSize(window.innerWidth < 768 ? 300 : 600); // Reduce a 300 en móvil, mantiene 600 en escritorio
    };

    // Llama la función inicialmente y cuando cambia el tamaño de la ventana
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !canvasRef.current) return;

    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: canvasSize * 2, // Usando el tamaño dinámico
      height: canvasSize * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 4.2,
      mapSamples: 36000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [20.0836, -98.3699], size: 0.02 },
        { location: [20.5888, -100.3899], size: 0.02 },
        { location: [19.4326, -99.1332], size: 0.02 },
        { location: [15.8350, -96.3254], size: 0.02 },
        { location: [32.2226, -110.9747], size: 0.02 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
      }
    });

    return () => globe.destroy();
  }, [canvasSize]); // Actualiza el efecto si cambia el tamaño

  return (
    <section className="py-20 z-1">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center dark:text-white"></h2>
        <div className="flex justify-center">
          <canvas
            ref={canvasRef}
            style={{
              width: canvasSize,
              height: canvasSize,
              maxWidth: '100%',
              aspectRatio: 1,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default GlobeSection;

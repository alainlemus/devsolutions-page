import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Soluciones de Software a Medida</h1>
        <p className="text-xl mb-8">Desarrollamos aplicaciones innovadoras para impulsar su negocio</p>
        <a href="#contacto" className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Contáctanos</a>
      </div>
    </section>
  );
};

export default Hero;
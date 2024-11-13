import React from 'react';
import { Globe, Smartphone, Database, Code, Layout } from 'lucide-react';
import FadeInSection from './FadeInSection';

const services = [
  { icon: Globe, title: 'Sitios Web', description: 'Diseño y desarrollo de sitios web responsivos y modernos.' },
  { icon: Smartphone, title: 'Apps Móviles', description: 'Creación de aplicaciones móviles nativas y multiplataforma.' },
  { icon: Database, title: 'Bases de Datos', description: 'Diseño e implementación de bases de datos.' },
  { icon: Code, title: 'Software a Medida', description: 'Desarrollo de soluciones de software personalizadas para su negocio.' },
  { icon: Layout, title: 'Diseño UI/UX', description: 'Creación de interfaces intuitivas y experiencias de usuario atractivas.' },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-transparent">
      <div className="container px-4 mx-auto">
        <FadeInSection>
          <h2 className="mb-12 text-3xl font-bold text-center">Servicios</h2>
        </FadeInSection>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeInSection key={index}>
              <div className="p-6 transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                <service.icon className="w-12 h-12 mb-4 text-blue-600" />
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-800">{service.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
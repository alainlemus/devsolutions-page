import FadeInSection from './FadeInSection';

const detailedServices = [
  {
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos, responsivos y optimizados para buscadores. Utilizamos las últimas tecnologías para garantizar un rendimiento excepcional y una experiencia de usuario fluida.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
  },
  {
    title: "Aplicaciones Móviles",
    description: "Desarrollamos aplicaciones nativas y multiplataforma para iOS y Android. Nuestras apps son intuitivas, rápidas y ofrecen una experiencia de usuario excepcional.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
  },
  {
    title: "Bases de Datos",
    description: "Diseñamos e implementamos bases de datos eficientes y seguras. Optimizamos el rendimiento y garantizamos la integridad de los datos para aplicaciones de cualquier escala.",
    image: "https://www.grupoftp.com/noticias/wp-content/uploads/2015/09/bases-de-datos-empresas.png"
  },
  {
    title: "Software a Medida",
    description: "Desarrollamos soluciones de software personalizadas que se adaptan perfectamente a las necesidades específicas de su negocio. Utilizamos tecnologías modernas como React para crear aplicaciones robustas y escalables.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
  },
  {
    title: "Diseño UI/UX",
    description: "Creamos interfaces de usuario atractivas e intuitivas que mejoran la experiencia del usuario. Nuestros diseños son estéticamente agradables y funcionales, garantizando la satisfacción del usuario final.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
  }
];

const DetailedServices = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container px-4 mx-auto">
        <FadeInSection>
          <h2 className="mb-12 text-3xl font-bold text-center">Servicios en Detalle</h2>
        </FadeInSection>
        {detailedServices.map((service, index) => (
          <FadeInSection key={index}>
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-20`}>
              <div className="mb-8 md:w-1/2 md:mb-0">
                <img src={service.image} alt={service.title} className="w-full h-auto rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2 md:px-8">
                <h3 className="mb-4 text-2xl font-semibold">{service.title}</h3>
                <p className="leading-relaxed text-gray-600">{service.description}</p>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default DetailedServices;
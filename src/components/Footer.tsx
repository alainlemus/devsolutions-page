import React from 'react';
import { Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center mb-4 md:mb-0">
            <Code className="w-8 h-8 mr-2 text-blue-400" />
            <span className="text-xl font-bold">DevSolutions</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-footer">&copy; 2024 DevSolutions. Todos los derechos reservados.</p>
            <p className="mt-2 text-footer">Desarrollado con pasión y experiencia.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
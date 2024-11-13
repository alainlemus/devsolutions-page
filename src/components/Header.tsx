import React, { useState, useEffect } from 'react';
import { Code, Moon, Sun, Menu, X } from 'lucide-react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Obtener el valor de darkMode de localStorage al cargar
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
  }, []);

  // Aplicar la clase "dark" al body cuando cambia darkMode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  // Alternar modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Cambiar el estado sticky del header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejar el desplazamiento suave para enlaces de navegación
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsSidebarOpen(false); // Cerrar el menú móvil después del clic
  };

  // Cerrar el menú móvil cuando se hace clic fuera del aside
  const handleOverlayClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header
      className={`bg-white dark:bg-gray-800 transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0 right-0 z-50' : ''
      }`}
    >
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <div className="flex items-center">
          <Code className="w-8 h-8 mr-2 text-blue-600" />
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            DevSolutions
          </span>
        </div>

        {/* Menú para pantallas grandes */}
        <nav className="items-center hidden md:flex">
          <ul className="flex mr-6 space-x-6">
            <li>
              <a
                href="#inicio"
                onClick={(e) => handleNavClick(e, 'inicio')}
                className="text-gray-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                onClick={(e) => handleNavClick(e, 'servicios')}
                className="text-gray-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, 'contacto')}
                className="text-gray-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              >
                Contacto
              </a>
            </li>
          </ul>
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-200 rounded-full dark:bg-gray-700"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </nav>

        {/* Botón de menú hamburguesa para dispositivos móviles */}
        <button
          className="p-2 bg-gray-200 rounded-full md:hidden dark:bg-gray-700"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menú lateral para dispositivos móviles */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Fondo oscuro */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={handleOverlayClick}
          ></div>

          {/* Menú lateral con animación de deslizamiento */}
          <aside
            className={`transform transition-transform duration-700 ease-in-out bg-white dark:bg-gray-800 shadow-lg z-50 w-64 h-full p-6 flex flex-col ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 mr-2 text-blue-600" />
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                DevSolutions
              </span>
            </div>

            <ul className="space-y-4">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleNavClick(e, 'inicio')}
                  className="text-gray-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => handleNavClick(e, 'servicios')}
                  className="text-gray-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  onClick={(e) => handleNavClick(e, 'contacto')}
                  className="text-gray-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                >
                  Contacto
                </a>
              </li>
            </ul>

            <button
              onClick={toggleDarkMode}
              className="p-2 mt-6 bg-gray-200 rounded-full dark:bg-gray-700"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </aside>
        </div>
      )}
    </header>
  );
};

export default Header;

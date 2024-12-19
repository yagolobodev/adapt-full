import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaBars } from 'react-icons/fa';
import Nav from './Nav';
import SideMenu from './SideMenu';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-[#002060] shadow-lg' : 'bg-transparent'}`}>
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 text-sm hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Pronto para expandir seu negócio?{" "}
              <Link to="/contato" className="text-primary hover:text-primary-dark font-medium">
                Entre em contato <i className="fas fa-arrow-right ml-1" />
              </Link>
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-600">
                <i className="far fa-clock mr-2" />
                <span>Atendimento: 8:00 - 18:00</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Siga-nos:</span>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logotipo-adapt.png"
              alt="Adapt Full"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-300 ${isSticky ? 'text-white hover:text-white/80' : 'text-white hover:text-white/80'}`}
            >
              Home
            </Link>
            <Link
              to="/sobre"
              className={`text-sm font-medium transition-colors duration-300 ${isSticky ? 'text-white hover:text-white/80' : 'text-white hover:text-white/80'}`}
            >
              Sobre
            </Link>
            <Link
              to="/servicos"
              className={`text-sm font-medium transition-colors duration-300 ${isSticky ? 'text-white hover:text-white/80' : 'text-white hover:text-white/80'}`}
            >
              Serviços
            </Link>
            <Link
              to="/seja-um-consultor"
              className={`text-sm font-medium transition-colors duration-300 ${isSticky ? 'text-white hover:text-white/80' : 'text-white hover:text-white/80'}`}
            >
              Consultores Associados
            </Link>
            <Link
              to="/contato"
              className={`text-sm font-medium transition-colors duration-300 ${isSticky ? 'text-white hover:text-white/80' : 'text-white hover:text-white/80'}`}
            >
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleSidebar}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isSticky 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      <SideMenu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;

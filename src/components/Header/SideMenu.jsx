import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const SideMenu = ({ isSidebarOpen, toggleSidebar }) => {
  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/contato', label: 'Contato' },
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#' },
    { icon: 'fab fa-twitter', url: '#' },
    { icon: 'fab fa-linkedin-in', url: '#' },
    { icon: 'fab fa-instagram', url: '#' },
  ];

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <Link to="/" className="block">
                  <img src="/logo.svg" alt="Adapt Full" className="h-8" />
                </Link>
                <button
                  onClick={toggleSidebar}
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              <nav className="mb-8">
                <ul className="space-y-4">
                  {menuItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium block py-2"
                        onClick={toggleSidebar}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="border-t pt-6">
                <div className="mb-6">
                  <h6 className="text-sm font-semibold text-gray-500 mb-3">
                    Horário de Atendimento
                  </h6>
                  <p className="text-gray-700">
                    Segunda à Sexta: 8:00 - 18:00
                  </p>
                </div>

                <div>
                  <h6 className="text-sm font-semibold text-gray-500 mb-3">
                    Siga-nos
                  </h6>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        className="text-gray-400 hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={link.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;

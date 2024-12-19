import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
  const services = [
    { name: 'Consultoria', path: '/servicos' },
    { name: 'Assessoria', path: '/servicos' },
    { name: 'Mentoria', path: '/servicos' },
    { name: 'Academy', path: '/servicos' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Contato', path: '/contato' },
    { name: 'Consultores Associados', path: '/seja-um-consultor' },
  ];

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="w-4 h-4" />,
      label: 'Fale Conosco',
      value: '44 99152-2905',
      link: 'tel:+5544991522905',
    },
    {
      icon: <FaEnvelope className="w-4 h-4" />,
      label: 'Email',
      value: 'contato@adaptconsultoria.com.br',
      link: 'mailto:contato@adaptconsultoria.com.br',
    },
    {
      icon: <FaMapMarkerAlt className="w-4 h-4" />,
      label: 'Localização',
      value: 'Av. Carneiro Leão, 294, Zona Armazem - Maringá PR',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-primary pt-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Call to Action Section */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para
              <span className="block text-secondary mt-1">Trabalhar Conosco?</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Transforme seu negócio com soluções personalizadas e expertise comprovada em consultoria empresarial.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center text-white hover:text-secondary transition-colors"
            >
              Entre em Contato <FaChevronRight className="ml-2" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center"
                  >
                    <FaChevronRight className="mr-2 text-xs" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center"
                  >
                    <FaChevronRight className="mr-2 text-xs" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    className="group flex items-start hover:text-secondary transition-colors"
                  >
                    <span className="mr-3 mt-1 text-secondary group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                    <div>
                      <span className="block text-sm text-gray-400">{item.label}</span>
                      <span className="block">{item.value}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Adapt Full. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/politica-privacidade" className="text-gray-400 hover:text-secondary text-sm">
                Política de Privacidade
              </Link>
              <Link to="/termos-uso" className="text-gray-400 hover:text-secondary text-sm">
                Termos de Uso
              </Link>
              <Link to="/contato" className="text-gray-400 hover:text-secondary text-sm">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

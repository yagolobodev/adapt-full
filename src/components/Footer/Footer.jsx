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
              className="inline-flex items-center px-6 py-3 bg-secondary hover:bg-secondary-dark text-white font-medium rounded-md transition-colors"
            >
              Solicitar Proposta
            </Link>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-2">
            <h5 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">
              Links Rápidos
            </h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center text-gray-300 hover:text-secondary transition-colors"
                  >
                    <FaChevronRight className="w-3 h-3 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-3">
            <h5 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">
              Nossos Serviços
            </h5>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="inline-flex items-center text-gray-300 hover:text-secondary transition-colors"
                  >
                    <FaChevronRight className="w-3 h-3 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h5 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">
              Informações de Contato
            </h5>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    {info.icon}
                  </div>
                  <div>
                    <span className="block text-sm text-gray-400">{info.label}</span>
                    <a
                      href={info.link}
                      className="text-gray-300 hover:text-secondary transition-colors"
                      target={info.icon === <FaMapMarkerAlt /> ? '_blank' : undefined}
                      rel={info.icon === <FaMapMarkerAlt /> ? 'noopener noreferrer' : undefined}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
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

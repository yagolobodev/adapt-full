import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#002060] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="text-2xl font-bold">Adapt Full</Link>
            <p className="mt-4 text-sm text-gray-300">
              Transformando empresas através de gestão estratégica e resultados comprovados.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#FF0100] transition-colors">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF0100] transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF0100] transition-colors">
                <FaFacebookSquare className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF0100] transition-colors">
                <FaWhatsapp className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#FF0100] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-[#FF0100] transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-[#FF0100] transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-[#FF0100] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/servicos/consultoria" className="text-gray-300 hover:text-[#FF0100] transition-colors">
                  Consultoria
                </Link>
              </li>
              <li>
                <Link to="/servicos/assessoria" className="text-gray-300 hover:text-[#FF0100] transition-colors">
                  Assessoria
                </Link>
              </li>
              <li>
                <Link to="/servicos/mentoria" className="text-gray-300 hover:text-[#FF0100] transition-colors">
                  Mentoria
                </Link>
              </li>
              <li>
                <Link to="/servicos/academy" className="text-gray-300 hover:text-[#FF0100] transition-colors">
                  Academy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">
                <span className="block font-semibold">Telefone:</span>
                (XX) XXXX-XXXX
              </li>
              <li className="text-gray-300">
                <span className="block font-semibold">Email:</span>
                contato@adaptfull.com.br
              </li>
              <li className="text-gray-300">
                <span className="block font-semibold">Endereço:</span>
                São Paulo - SP
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-600 pt-8">
          <p className="text-center text-sm text-gray-300">
            {new Date().getFullYear()} Adapt Full. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

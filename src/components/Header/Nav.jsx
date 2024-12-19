import { Link } from 'react-router-dom';

const Nav = () => {
  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/seja-consultor', label: 'Seja um Consultor' },
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <nav className="hidden lg:flex items-center ml-8 sticky top-0">
      <ul className="flex space-x-6">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="text-white hover:text-primary-200 transition-colors duration-200 font-medium"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

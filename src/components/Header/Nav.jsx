import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/seja-um-consultor', label: 'Consultores Associados' },
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <nav className="hidden lg:flex items-center ml-8 sticky top-0">
      <ul className="flex space-x-6">
        {menuItems.map((item) => (
          <li key={item.path}>
            {item.path === '/seja-um-consultor' ? (
              <Link
                to={item.path}
                className={`text-lg font-semibold ${
                  location.pathname === item.path
                    ? 'text-[#FF0100]'
                    : 'text-[#002060] hover:text-[#FF0100]'
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                to={item.path}
                className="text-white hover:text-primary-200 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

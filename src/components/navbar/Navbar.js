import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <nav className="navbar">
      <h1 className="navbar-text">Bookstore CMS</h1>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

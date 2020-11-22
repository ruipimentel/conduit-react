import { Link, NavLink } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <nav id="header-nav">
      <div className="container">
        <Link
          to="/home"
          id="header-logo"
        >
          conduit
        </Link>
        <div className="header-float-right">
          <NavLink
            to="/home"
            className="header-menu"
          >
            Home
          </NavLink>
          <NavLink
            to="/login"
            className="header-menu"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="header-menu"
          >
            Cadastrar
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;

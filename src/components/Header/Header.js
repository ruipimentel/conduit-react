import './Header.css';

function Header() {
  return (
    <nav>
      <div className="container">
        <a
          href="/"
          id="header-logo"
        >
          conduit
        </a>
        <div className="header-float-right">
          <a
            href="/"
            className="header-menu"
          >
            Home
          </a>
          <a
            href="/login"
            className="header-menu"
          >
            Login
          </a>
          <a
            href="/register"
            className="header-menu"
          >
            Cadastrar
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;

import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Header: FunctionComponent = () => {
  return (
    <header>
      <div className="row">
        <div className="logo">
          <Link to="/" aria-label="Click for home page">
            <h1>Appointment App</h1>
          </Link>
        </div>
        <a
          href="#main-menu"
          id="main-menu-toggle"
          className="menu-toggle"
          aria-label="Open main menu"
        >
          <p>Menu</p>
          <span aria-hidden="true">
            <div className="hamburger-icon"></div>
            <div className="hamburger-icon"></div>
            <div className="hamburger-icon"></div>
          </span>
        </a>
      </div>
      <nav className="main-menu" id="main-menu" aria-label="Main Menu">
        <a
          href="#top"
          id="main-menu-close"
          className="menu-close"
          aria-label="close main menu"
        >
          <span aria-hidden="true">&#x2715;</span>
        </a>
        <ul>
          <li>
            <a href="/">Register</a>
          </li>
          <li>
            <a href="/">Log In</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a href="#main-menu-toggle" className="backdrop" hidden></a>
    </header>
  );
};

export default Header;

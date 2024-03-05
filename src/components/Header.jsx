import { useState } from 'react';

import { FaBars, FaX } from "react-icons/fa6";

import littleLemonLogo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  const [hamburger, setHamburger] = useState(false);

  return (
    <header className="container">
      <nav id="main-nav">
        <Link to="/">
          <img src={littleLemonLogo} alt="Little Lemon" />
        </Link>

        <button type="button" onClick={() => setHamburger(!hamburger)}>
          <FaBars size={32} color="#495e57" />
        </button>

        <ul className={hamburger ? 'active' : 'inactive'}>
          <button type="button" onClick={() => setHamburger(false)}>
            <FaX size={24} color="#495e57" />
          </button>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#!">About</a>
          </li>
          <li>
            <a href="#!">Menu</a>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <a href="#!">Order online</a>
          </li>
          <li>
            <a href="#!">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
import { useState } from 'react';

import { FaBars, FaX } from "react-icons/fa6";

import littleLemonLogo from '../assets/Logo.svg';

function Header() {
  const [hamburger, setHamburger] = useState(false);

  return (
    <header className="container">
      <nav id="main-nav">
        <a href="#!">
          <img src={littleLemonLogo} alt="Little Lemon" />
        </a>

        <button type="button" onClick={() => setHamburger(!hamburger)}>
          <FaBars size={32} color="#495e57" />
        </button>

        <ul className={hamburger ? 'active' : 'inactive'}>
          <button type="button" onClick={() => setHamburger(false)}>
            <FaX size={24} color="#495e57" />
          </button>
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">About</a>
          </li>
          <li>
            <a href="#!">Menu</a>
          </li>
          <li>
            <a href="#!">Reservations</a>
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
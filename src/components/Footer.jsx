import { Link } from 'react-router-dom';

import logo from '../assets/logo-white.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <footer>
      <div className="container">
        <img src={logo} alt="" />
        <div className="sitemap">
          <strong>Sitemap</strong>
          <nav>
            <ul>
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
        </div>
        <div className="contact">
          <strong>Contact Us</strong>
          <p>123 Way 456 Street Somewhere, USA</p>
          <p>1.888.888.8888</p>
          <p>
            <a href="mailto: customer@littlelemon.com">
              customer@littlelemon.com
            </a>
          </p>
        </div>
        <div className="socials">
          <strong>Social Media</strong>
          <nav>
            <ul>
              <li>
                <a href="#!">
                  <FaFacebook size={24} color="#fff" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <FaTwitter size={24} color="#fff" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <FaInstagram size={24} color="#fff" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
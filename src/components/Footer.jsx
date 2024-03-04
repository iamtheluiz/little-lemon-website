import logo from '../assets/logo-white.png';

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
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">About</a>
              </li>
              <li>
                <a href="#!">Reservations</a>
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
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import littleLemonLogo from '../assets/Logo.svg';

function Header() {
  return (
    <header className="container">
      <nav id="main-nav">
        <a href="#!">
          <img src={littleLemonLogo} alt="Little Lemon" />
        </a>
        
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
    </header>
  );
}

export default Header;
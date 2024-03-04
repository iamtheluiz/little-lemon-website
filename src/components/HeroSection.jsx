import heroImage from '../assets/restauranfood.jpg';

function HeroSection() {
  return (
    <section id="hero">
      <div className="container">
        <div className="information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <a className="btn" href="#!">Reserve a table</a>
        </div>
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
}

export default HeroSection;
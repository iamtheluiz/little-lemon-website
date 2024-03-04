import PropTypes from 'prop-types';

function RecipeCard(props) {
  return (
    <article>
      <img src={props.image} alt={props.title} />
      <header>
        <h3>{props.title}</h3>
        <span>${props.price}</span>
      </header>
      <p>{props.description}</p>
      <a href="#!">Order a delivery</a>
    </article>
  );
}

RecipeCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default RecipeCard;
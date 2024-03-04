import PropTypes from 'prop-types';

function TestimonialCard(props) {
  return (
    <article>
      <img src={props.image} alt={props.name} />
      <strong>{props.name}</strong>
      <p>{`"${props.content}"`}</p>
    </article>
  );
}

TestimonialCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default TestimonialCard;
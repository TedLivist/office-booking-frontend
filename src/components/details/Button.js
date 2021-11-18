import PropTypes from 'prop-types';

const Button = ({ name, clickHandler }) => {
  const handleClick = () => {
    clickHandler();
  };

  return (
    <button onClick={clickHandler ? handleClick : null} type="button">
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;

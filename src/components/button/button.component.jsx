import './button.styles.scss';

const Button = ({ children, kind, ...otherProps }) => {
  return (
    <button className={`button ${kind}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;

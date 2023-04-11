import './button.styles.scss';

const Button = ({ children, kind, ...otherProps }) => {
  return (
    <button className={`${kind}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;

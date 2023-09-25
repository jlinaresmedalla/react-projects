import classnames from "classnames";

const Button = (props) => {
  const {
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...aditionalProps
  } = props;

  const optionalClasses = classnames('flex items-center gap-2 m-1 px-3 py-1.5 border text-white', {
    'border-blue-500 bg-blue-600': primary,
    'border-gray-500 bg-gray-600': secondary,
    'border-green-500 bg-green-600': success,
    'border-yellow-500 bg-yellow-600': warning,
    'border-red-500 bg-red-600': danger,
    'rounded-full': rounded,
    'bg-white text-black': outline,
  });

  return <button {...aditionalProps} className={optionalClasses}>{children}</button>;
};

export default Button;

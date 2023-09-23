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
  } = props;

  const optionalClasses = classnames("m-1 px-3 py-1.5 border", {
    "border-blue-500 bg-blue-600": primary,
    "border-gray-500 bg-gray-600": secondary,
    "border-green-500 bg-green-600": success,
    "border-yellow-500 bg-yellow-600": warning,
    "border-red-500 bg-red-600": danger,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-700": outline && primary,
    "text-gray-700": outline && secondary,
    "text-green-700": outline && success,
    "text-yellow-700": outline && warning,
    "text-red-700": outline && danger,
  });

  return <button className={optionalClasses}>{children}</button>;
};

export default Button;

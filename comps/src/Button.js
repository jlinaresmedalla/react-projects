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

  const optionalClasses = classnames("m-1 px-3 py-1.5 border text-zinc-200", {
    "border-blue-500 bg-blue-600": primary,
    "border-gray-500 bg-gray-600": secondary,
    "border-green-500 bg-green-600": success,
    "border-yellow-500 bg-yellow-600": warning,
    "border-red-500 bg-red-600": danger,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-700": primary && outline,
    "text-gray-700": secondary && outline,
    "text-green-700": success && outline,
    "text-yellow-700": warning && outline,
    "text-red-700": danger && outline,
  });

  return <button className={optionalClasses}>{children}</button>;
};

export default Button;

import classnames from "classnames";

const Panel = ({ children, className, ...props }) => {
  const finalClassName = classnames(
    "border rounded shadow bg-white p-3 w-full",
    className
  );

  return (
    <div className={finalClassName} {...props}>
      {children}
    </div>
  );
};

export default Panel;

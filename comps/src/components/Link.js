import classnames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classnames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    console.log(event);
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  // eslint-disable-next-line
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {" "}
      {children}{" "}
    </a>
  );
}

export default Link;

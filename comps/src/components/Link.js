import { useContext } from 'react';
import NavigationContext from '../context/navigation.js';

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);
  console.log(NavigationContext,"sdasdasd");
  const handleClick = (event) => {
    event.preventDefault();

    navigate(to);
  };
  // eslint-disable-next-line
  return <a onClick={handleClick} > {children} </a>; 
 
}

export default Link;
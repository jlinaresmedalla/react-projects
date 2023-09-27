import { useContext } from 'react';
import NavigationContext from '../context/navigation.js';

function Route ({path, children}) {
    const {currenthPath} = useContext(NavigationContext);

    if (path === currenthPath){
        return children;
    }

    return <div>asd</div>;

}

export default Route;
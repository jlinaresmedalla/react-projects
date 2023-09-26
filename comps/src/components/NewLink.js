import React  from 'react';
import { Link } from 'react-router-dom';

const NewLink = ({children} ) => {
    return(
        <Link>{children}</Link>
    );
}

export default NewLink;
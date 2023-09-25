import { useState } from "react";
import './SearchBar.css';

function SearchBar({searchForImages}){

    const [inputValue, setInputValue] = useState('');

    const handleClick = (event) => {
        //console.log(event);
        event.preventDefault()
        searchForImages(inputValue);
    }

    const handleInputChange = (event) => {
        //console.log(event);
        setInputValue(event.target.value);
    //    setInputValue(event.target.value.replace(/[a-z]/,''));
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleClick}>
                <label>Enter Search Term</label>
                <input 
                        type="text"
                        placeholder="Write something"
                        value={inputValue}
                        onChange={handleInputChange}
                /> {/*inputValue.length < 10 && 'change it pls'*/} 
            </form>
        </div>
    );
}

export default SearchBar;
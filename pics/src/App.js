import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from './components/ImageList';
import { useState } from "react";

function App(){

    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        //console.log('Do a search with', term);
        const result = await searchImages(term);
        setImages(result);
    };

    return (
        <div>
            <SearchBar searchForImages = {handleSubmit} />
            <ImageList showImages = {images} />
        </div>
    )
}

export default App;
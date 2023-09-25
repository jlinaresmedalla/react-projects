import axios from 'axios';

const searchImages = async (term) => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID v95tG8GQMAqkoBPr272f-POWVtTPckKpBCX5RJY_KwQ'
        },
        params: {
            query: term
        }
    });
    return response.data.results;
};

export default searchImages;
import ImageShow from './ImageShow'
import './ImageList.css'

function ImageList({showImages}){

    const renderImages = showImages.map((number)=>{
        return (
            <div key={number.id}> 
                <ImageShow showUrl={number}/>
            </div>
        )
    });

    return (
        <div className="image-list"> 
            <div>{renderImages}</div>
        </div>
    )
}

export default ImageList;
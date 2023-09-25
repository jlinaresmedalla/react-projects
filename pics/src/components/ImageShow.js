function ImageShow({showUrl}){

    return (
        <div>
            <img alt={showUrl.alt_description} src={showUrl.urls.small}/>
        </div>
    )
}

export default ImageShow;
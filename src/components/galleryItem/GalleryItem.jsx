import './galleryItem.css'

const GalleryItem = ({items}) => {

    return(
        <div className="galleryItem" style={{gridRowEnd: `span ${Math.ceil(items.height / 100)}`}}>
            
        <img src={items.media} alt={"pins"} key={items.id}></img>
        </div>
    )
}

export default GalleryItem
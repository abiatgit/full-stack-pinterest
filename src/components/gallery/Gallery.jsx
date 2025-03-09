import "./gallery.css";
import items from "../../constant/pinimg";
import GalleryItem from "../galleryItem/GalleryItem";
const Gallery = () => {
  return (
    <div className="gallery">
      {items.map((item) => {
     return   <GalleryItem items={item} key={item.id} />;
      })}
    </div>
  );
};

export default Gallery;

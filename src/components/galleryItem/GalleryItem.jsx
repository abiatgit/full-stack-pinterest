import "./galleryitem.css";
import { Link } from "react-router";

const GalleryItem = ({ items }) => {
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(items.height / 100)}` }}
    >
      <img src={items.media} alt={"pins"} key={items.id}></img>
      <Link to={`/pin/${items.id}`} className="overlay" />
      <button className="saveButton"> save </button>

      <div className ="overlayIcons">
        <button>
          <img src="/general/share.svg" alt="" />
        </button>

        <button>
          <img src="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;

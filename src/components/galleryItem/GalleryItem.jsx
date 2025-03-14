import "./galleryitem.css";
import { Link } from "react-router";
import Image from "../image/image";

const GalleryItem = ({ item }) => {
  const optimizedHeight = (372 * item.height) / item.width;
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      {/* <img src={items.media} alt={"pins"} key={items.id}></img> */}
      <Image 
        urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
        path={item.media}
        alt={""}
        width={372}
        h={optimizedHeight}
      ></Image>

      
      <Link to={`/pin/${item.id}`} className="overlay" />
      <button className="saveButton"> save </button>

      <div className="overlayIcons">
        <button> 
          <Image path="/general/share.svg" alt="" />
        </button>

        <button>
          <Image path="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;

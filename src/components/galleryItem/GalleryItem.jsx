import "./galleryitem.css";
import { Link } from "react-router";
import { IKImage } from 'imagekitio-react';
const GalleryItem = ({ item }) => {
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      {/* <img src={items.media} alt={"pins"} key={items.id}></img> */}
      <IKImage
        urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
        path={item.media}
        transformation={[{
          height: 200,
          width: 200
        }]}
        alt="pin"
      />
      <Link to={`/pin/${item.id}`} className="overlay" />
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

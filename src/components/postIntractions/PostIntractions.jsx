import Image from "../image/image";
import "./postIntractions.css";
const PostIntractions = () => {
  return (
    <div className="postIntractions">
      <div className="intractionIcons">
        <Image path="/general/react.svg" alt="arrow" />
        <Image path="/general/share.svg" alt="share" />
        <Image path="/general/more.svg" alt="more" />
      </div>
      <button>Save</button>
    </div>
  );
};

export default PostIntractions;

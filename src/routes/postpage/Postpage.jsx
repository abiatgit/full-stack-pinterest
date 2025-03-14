import { Link } from "react-router";
import Image from "../../components/image/image";

import PostIntractions from "../../components/postIntractions/PostIntractions";
import "./postpage.css";
import Comments from "../../components/comments/Comments";
const Postpage = () => {
  return (
    <div className="postPage">
   <img
      src="https://ik.imagekit.io/dqcdsokqq/general/left-arrow-svgrepo-com.svg?updatedAt=1741986384092"
      height={"20"}
      width={"20"}

    />
      <div className="postContainer">
        <div className="postImage">
          <Image path="/pins/pin1.jpeg" alt="post image" w={736} />
        </div>
        <div className="postDetails">
          <PostIntractions />
          <Link to="/John" className="postUser">
            <Image path="/general/noAvatar.png" alt="avatar" w={26} h={26} />
            <span>Jonh doe</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default Postpage;

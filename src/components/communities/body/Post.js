import "./Post.css";
import { useState } from "react";
import heartIcon from "./images/heart.png";
import commentIcon from "./images/comment.png";
import { likePost, makeComment } from "../../../utils.js";
const Post = (props) => {
  const [post, setPost] = useState(props.post);
  const [userName, setUserName] = useState(
    `${post.firstName} ${post.firstName}: `
  );
  const [likeNumber, setLikeNumber] = useState(Object.keys(post.likes).length);
  const [comments, setComments] = useState(post.comments);
  const [hideComment, setHideComments] = useState(true);
  const [imageUrl, setImageUrl] = useState(
    post.picturePath !== undefined
      ? require("../../../pictures/" + post.picturePath)
      : null
  );
  const [userImageUrl, setuserImageUrl] = useState(
    props.post.userPicturePath !== undefined
      ? require("../../../pictures/" + props.post.userPicturePath)
      : null
  );
  const handleLikes = async () => {
    //(postId, userId, userToken)
    try {
      const resp = await likePost(
        post._id,
        localStorage.getItem("userId"),
        localStorage.getItem("userToken")
      );
      setPost(resp);
      setLikeNumber(Object.keys(resp.likes).length);
      alert("Successfully like / dislike!");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };
  const handleMakeComment = async () => {
    const subComment = document.getElementById("comment_input").value;
    try {
      const resp = await makeComment(
        post._id,
        `${userName}${subComment}`,
        localStorage.getItem("userToken")
      );
      setPost(resp);
      setComments(resp.comments);
      alert("Successfully make comment!");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };
  const handleHideComment = () => {
    setHideComments(!hideComment);
  };
  return (
    <>
      <div className="post-container">
        <div className="user-container">
          <img src={userImageUrl} style={{ width: "40px", height: "40px" }} />
          <div>{userName}</div>
        </div>

        <div className="header">{post.title}</div>
        <img src={imageUrl} style={{ width: "60%" }} />
        <p>{post.description}</p>
        <div className="heart-comment-container">
          <button>
            <img
              src={heartIcon}
              style={{ width: "24px", height: "24px" }}
              onClick={handleLikes}
            />
            {likeNumber}
          </button>
          <button onClick={handleHideComment}>
            <img src={commentIcon} style={{ width: "24px", height: "24px" }} />
            {post.length}
          </button>
        </div>
        {hideComment ? null : (
          <div id="comment_hide_session">
            <div id="fill_in0">
              <button onClick={handleMakeComment}>make comment</button>
              <input type="text" id="comment_input" name="comment"></input>
            </div>

            <div>comments:</div>
            {comments.map((cmt) => {
              return <div>{cmt}</div>;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Post;

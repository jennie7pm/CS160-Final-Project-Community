import "./Post.css";
import ProfileIcon from "./images/Profile.png";
import testImg from "./images/test.png";
import heartIcon from "./images/heart.png";
import commentIcon from "./images/comment.png";
export function Post(){
    return (
    <div className="post-container">
        <div className="user-container">
            <img src={ProfileIcon} style={{width: "40px", height: "40px"}}/>
            <div>user name</div>
        </div>
        <div className="header">
            Looking for a team
        </div>
        <img src={testImg} style={{width: "70%"}}/>
        <p>
            HIalgnv;nsbvb;n nb;akbjnf;gnsnfa anb;kknfavnk;lnal;nvban ban;PLUl4u3cNGP61Oq3tWYp6V_F
        </p>
        <div className="heart-comment-container">
            <button><img src={heartIcon} style={{width:"24px", height: "24px"}}/>4</button>
            <button><img src={commentIcon} style={{width:"24px", height: "24px"}}/>5</button>
        </div>
    </div>
    );
}
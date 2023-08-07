import "./Post.css";
import ProfileIcon from "./images/Profile.png"
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
        <p>
            HIalgnv;nsbvb;n nb;akbjnf;gnsnfa anb;kknfavnk;lnal;nvban ban;PLUl4u3cNGP61Oq3tWYp6V_F
        </p>
    </div>
    );
}
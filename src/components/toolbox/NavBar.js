import {Link} from "react-router-dom";
import "./NavBar.css";
import mode from './images/Moon.png'
import profileImage from './images/Profile.png';
export function NavBar(){

    return(<nav>
                <div className="nav-container">
                    <div className="nav-left-container">
                        <Link to="/" className="nav-link">Home</Link>
                    </div>
                    <div className="nav-right-container">
                        <Link to="/communities" className="nav-link">Community</Link>
                        <Link to="/resume-builder" className="nav-link">Resume Builder</Link>
                        <Link to="/resources" className="nav-link">Resources</Link>
                        <img src={mode} alt="mode switching" className="mode-icon nav-link" style={{ width: "24px", height: "24px"}}/>
                        <img src={profileImage} alt="profile" className="profile-pic nav-link" style={{ width: "48px", height: "48px"}}/>
                    </div>
                </div>
        </nav>);
}
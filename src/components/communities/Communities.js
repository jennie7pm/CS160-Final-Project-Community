import { NavBar } from "../toolbox/nav-bar/NavBar.js"
import { SideMenu } from "../toolbox/sideMenu/SideMenu.js";
import ProjectCollabIcon from "./images/Project-Collab.png";
import MentorshipIcon from "./images/Mentorship.png";
import PeerInterviewIcon from "./images/Peer-Interview.png";
import CareerExperienceIcon from "./images/Career-Exprience.png";

export function Communities(){
    let sideMenuRowArr = [['Project Collaboration', ProjectCollabIcon], ['Career Exprience', CareerExperienceIcon], ['Mentership', MentorshipIcon], ['Peer Intervies', PeerInterviewIcon]];
    return ( <>
                <NavBar navButtonSelection="communities"/>
                <SideMenu header="Communities" rowsArr={sideMenuRowArr}/>
            </>
            )
}
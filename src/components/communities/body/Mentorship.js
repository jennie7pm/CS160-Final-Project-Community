import MentorshipIcon from "../images/Mentorship.png";
import { BodyHeader } from "./BodyHeader.js";

export function Mentorship(){
    let description="A networking hub for Computer Science students and industry professionals to establish mentor-mentee relationships, fostering direct connections and supporting professional growth.";
    let titleArr = [MentorshipIcon, "Mentorship", description];
    return <><BodyHeader titleArr={titleArr}/></>
}
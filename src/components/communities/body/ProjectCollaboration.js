import ProjectCollabIcon from "../images/Project-Collab.png";
import { BodyHeader } from "../../toolbox/header /BodyHeader.js";
import { CreatePost } from "./CreatePost";

export function ProjectCollab(){
    let description = "Project Collaboration is a focused forum for student projects. Here, you can ask project-related questions, exchange ideas, or find team members for your projects. A practical platform for project discussion and team formation. Utilize this space for effective collaboration and knowledge exchange.";
    let titleArr = [ProjectCollabIcon, "Project Collaboration", description];
    return <><BodyHeader titleArr={titleArr}/>
            <CreatePost/>  
            </>;
}
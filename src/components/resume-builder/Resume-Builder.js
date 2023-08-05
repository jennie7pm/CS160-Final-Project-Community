import { NavBar } from "../toolbox/nav-bar/NavBar";
import { SideMenu } from "../toolbox/sideMenu/SideMenu.js";
export function ResumeBuilder(){
    let sideMenuRowArr = [['Profile', null], ['Education', null], ['Work Experience', null], ['Project', null], ['Tool', null], ['Award', null], ['LeaderShip', null], ['Finish', null]];
    return (<><NavBar navButtonSelection="resumeBuilder"/>
            <SideMenu header="Resume Builder" rowsArr={sideMenuRowArr}/>    
            </>);
}
import { SideMenu } from "../toolbox/sideMenu/SideMenu.js";
import plusIcon from '../toolbox/images/add.png';
import MyDocument from "./generate-pdf.js";
import React, { useState } from 'react';

export function Profile({setUserData}) {

    const handleProfileInputChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
        const { email, email_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: email_value }));
        const { githubaccount, github_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [githubaccount]: github_value }));
    };

    return (
        <><p> Profile </p>
            <div className="resume-section">
                <label>
                    Name:
                    <input type="text" name="name" placeholder="Chrisdeep" onChange={handleProfileInputChange} />
                </label>
                <br></br>
                <label>
                    Email:
                    <input type="text" name="email" placeholder="your.email@here.com" onChange={handleProfileInputChange} />
                </label>
                <br></br>
                <label>
                    GitHub Account:
                    <input type="text" name="github" placeholder="chrissdeep_" onChange={handleProfileInputChange} />
                </label>
            </div>
            <br></br></>
    )
}

export function Education() {
    return (
        <><p>Education</p>
            <div className="resume-section">
                <h4>Education 1</h4>
                <label>
                    Degree:
                    <input type="text" name="Degree" placeholder="Bachelor of Science (B.S.) in Computer Science" />
                </label>
                <br></br>
                <label>
                    Institution:
                    <input type="text" name="institution" placeholder="React University" />
                </label>
                <br></br>
                <label>
                    GPA:
                    <input type="text" name="GPA" placeholder="3.8" />
                </label>
                <br></br>
                <label>
                    Expected Graduation Date:
                    <input type="text" name="graduationdate" placeholder="May 2024" />
                </label>
                <br></br>
                <label>
                    Related Coursework:
                    <input type="text" name="course" placeholder="CS 61A, CS 61B" />
                </label>
            </div>
            <br></br></>
    )
}


export function FinishButton({showPDF, setShowPDF}) {
    // State to store user input data
    // const [showPDF, setShowPDF] = useState(false);

    // const [userData, setUserData] = useState({
    //     name: '',
    //     email: '',
    //     githubaccount: '',
    //     Degree: '',
    //     institution: '',
    //     gpa: '',
    //     egd: '',
    //     work: '',
    //     position: '',
    //     company: '',
    //     city: '',
    //     startdate: '',
    //     enddate: '',
    //     responsibility1: '',
    //     responsibility2: '',
    //     responsibility3: '',
    //     projectname: '',
    //     cont: '',
    //     contribution2: '',
    //     language1: '',
    //     tool1: '',
    //     // Add other fields as needed...
    // });

    // Function to handle the "Finish" button click
    const handleFinishClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log('clicked!');
        setShowPDF(true);
    };

    return (
        <form>
            <input onClick={handleFinishClick} type="submit" value="Finish" id="finish-button" />
        </form>
    )

}

export function ResumeBuilderBody() {
    const [showPDF, setShowPDF] = useState(false);

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        githubaccount: '',
    })

    return (<>
        {
            showPDF ? (
                <div>
                    <MyDocument userData={userData} />
                </div >
            ) : (
                <>
                    <Profile userData={userData} setUserData={setUserData} />
                    <Education />


                    <FinishButton showPDF={showPDF} setShowPDF={setShowPDF} />
                </>
            )
        }
    </>
    )

}


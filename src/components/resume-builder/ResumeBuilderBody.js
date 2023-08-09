import { SideMenu } from "../toolbox/sideMenu/SideMenu.js";
import plusIcon from '../toolbox/images/add.png';
import MyDocument from "./generate-pdf.js";
import React, { useState } from 'react';
import "./ResumeBuilderBody.css"

export function Profile({ setUserData }) {

    const handleProfileInputChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
        const { email, email_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: email_value }));
        const { githubaccount, github_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [githubaccount]: github_value }));
    };

    return (
        <><p className="heading"> Profile </p>
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
                    <input type="text" name="githubaccount" placeholder="chrissdeep_" onChange={handleProfileInputChange} />
                </label>
            </div>
            <br></br></>
    )
}

export function Education({ setUserData }) {

    const handleEducationInputChange = (event) => {

        const { name, value } = event.target;
        setUserData((prevData) => ({ ...prevData, [name]: value  }));
        const { uni, uni_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [uni]: uni_value }));
        const { gpa, gpa_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [gpa]: gpa_value }));
        const { egd, graduationdate_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [egd]: graduationdate_value }));
        const { work, course_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [work]: course_value }));
        console.log("education clicked")
        console.log("event", event)
        console.log("event.target", event.target)
        console.log("event.target.value", event.target.value)

    };

    return (
        <><p className="heading">Education</p>
            <div className="resume-section">
                {/* <h4>Education 1</h4> */}
                <label>
                    Degree:
                    <input type="text" name="degree" onChange={handleEducationInputChange} placeholder="Bachelor of Science (B.S.) in Computer Science" />
                </label>
                <br></br>
                <label>
                    Institution:
                    <input type="text" name="uni" onChange={handleEducationInputChange} placeholder="React University" />
                </label>
                <br></br>
                <label>
                    GPA:
                    <input type="text" name="gpa" onChange={handleEducationInputChange} placeholder="3.8" />
                </label>
                <br></br>
                <label>
                    Expected Graduation Date:
                    <input type="text" name="egd" onChange={handleEducationInputChange} placeholder="May 2024" />
                </label>
                <br></br>
                <label>
                    Related Coursework:
                    <input type="text" name="work" onChange={handleEducationInputChange} placeholder="CS 61A, CS 61B" />
                </label>
            </div>
            <br></br></>
    )
}


export function Experience({ setUserData }) {

    const handleExperienceInputChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
        const { company, company_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [company]: company_value }));
        const { location, location_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [location]: location_value }));
        const { startdate, startdate_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [startdate]: startdate_value }));
        const { enddate, enddate_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [enddate]: enddate_value }));
        const { responsibility1, responsibility1_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [responsibility1]: responsibility1_value }));
        const { responsibility2, responsibility2_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [responsibility2]: responsibility2_value }));
        const { responsibility3, responsibility3_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [responsibility3]: responsibility3_value }));
    };

    return (
        <><p className="heading">Experiences</p>
            <div className="resume-section">
                <label>
                    Position:
                    <input type="text" name="position" placeholder="Software Engineering Intern" onChange={handleExperienceInputChange} />
                </label>
                <br></br>
                <label>
                    Company:
                    <input type="text" name="company" placeholder="Google" onChange={handleExperienceInputChange} />
                </label>
                <br></br>
                <label>
                    City, State:
                    <input type="text" name="location" placeholder="Sunnyvale, CA" onChange={handleExperienceInputChange} />
                </label>
                <br></br>
                <label>
                    Start Date:
                    <input type="text" name="startdate" placeholder="May 2023" onChange={handleExperienceInputChange} />
                </label>
                <br></br>
                <label>
                    End Date:
                    <input type="text" name="enddate" placeholder="August 2023" onChange={handleExperienceInputChange} />
                </label>
                <br></br>
                <label>
                    Responsibility or Achievement 1:
                    <input type="text" name="responsibility1" onChange={handleExperienceInputChange} placeholder="Collaborated with the product development team to design, code, and implement new features in the company's main application, enhancing usability and performance. Utilized programming languages such as Python and Java, following Agile methodologies." />
                </label>
                <br></br>
                <label>
                    Responsibility or Achievement 2:
                    <input type="text" name="responsibility2" onChange={handleExperienceInputChange} placeholder="Identified and fixed critical bugs in existing software, leading to a 25% reduction in customer-reported issues. Conducted code reviews and refactoring sessions to improve overall code quality and maintainability, contributing to best practices within the development team." />
                </label>
                <br></br>
                <label>
                    Responsibility or Achievement 3:
                    <input type="text" name="responsibility3" onChange={handleExperienceInputChange} placeholder="Assisted in the creation and execution of automated test scripts, achieving a 40% reduction in manual testing time. Contributed to continuous integration (CI) and continuous deployment (CD) processes, enhancing the efficiency of development cycles and ensuring the reliability of software releases." />
                </label>
            </div></>
    )
}


export function Project({ setUserData }) {

    const handleProjectInputChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
        const { contribution1, contribution1_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [contribution1]: contribution1_value }));
        const { contribution2, contribution2_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [contribution2]: contribution2_value }));
    };

    return (
        <><p className="heading">Projects</p>
            <div className="resume-section">
                <h4>Project 1</h4>
                <label>
                    Title:
                    <input type="text" name="projectname" placeholder="SmartHealth Tracker" onChange={handleProjectInputChange} />
                </label>
                <br></br>
                <label>
                    Contribution 1:
                    <input type="text" name="contribution1" onChange={handleProjectInputChange} placeholder="Developed mobile and web applications using React Native and React.js, and integrated real-time health data from multiple wearable devices using APIs." />
                </label>
                <br></br>
                <label>
                    Contribution 2:
                    <input type="text" name="contribution2" onChange={handleProjectInputChange} placeholder="Implemented a personalized recommendation engine using machine learning algorithms that provided customized fitness and nutrition plans, and designed interactive features that led to a 30% increase in daily active users within three months." />
                </label>
            </div>
            <br></br></>
    )
}

export function Language({ setUserData }) {

    const handleLanguageInputChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));

    };

    return (
        <><p className="heading">Languages</p>
            <div className="resume-section">
                <label>
                    Language:
                    <input type="text" name="lang" placeholder="Python" onChange={handleLanguageInputChange} />
                </label>
            </div>
            <br></br> </>
    )
}

export function Tool({ setUserData }) {

    const handleLanguageInputChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <><p className="heading">Tool</p>
            <div className="resume-section">
                <label>
                    Tool:
                    <input type="text" name = "tool" placeholder="GitHub" onChange={handleLanguageInputChange}/>
                </label>
            </div>
            <br></br> </>
    )
}

export function Add({ onClick }) {
    return (
        <div className="add">
            <a href="#" onClick={onClick}>
                <img src={plusIcon} className="plus-icon" alt="Add" />
                Add
            </a>
        </div>
    );
}

// export function Add() {

//     const handleAddClick = (event) => {

//     };

//     return (
//         <div className="add">
//             <a href="#">
//                 <img src={plusIcon} name="language1" className="plus-icon" />
//                 Add 
//             </a>
//         </div>
//     )
// }



export function FinishButton({ userData, showPDF, setShowPDF }) {
    // State to store user input data

    // Function to handle the "Finish" button click
    const handleFinishClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log('clicked!');
        setShowPDF(true);
        console.log(userData)
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
        degree: '',
        uni: '',
        gpa: '',
        egd: '',
        work: '',
        position: '',
        company: '',
        location: '',
        startdate: '',
        enddate: '',
        responsibility1: '',
        responsibility2: '',
        responsibility3: '',
        projectname: '',
        contribution1: '',
        contribution2: '',
        language: '',
        tool: '',
    })


    const handleAddEducation = () => {
        setUserData((prevEducation) => [
            ...prevEducation,
            {
                degree: '',
                uni: '',
                gpa: '',
                egd: '',
                work: '',
            },
        ]);
    };

    return (<>
        {
            showPDF ? (
                <div>
                    <MyDocument userData={userData} />
                </div >
            ) : (
                <>
                    <div className="form-Body-container">
                        <Profile setUserData={setUserData} />
                        {/* {userData.map((education, index) => (
                        <Education
                            key={index}
                            index={index}
                            userData={userData}
                            setUserData={setUserData}
                        />
                        ))} */}
                        <Education setUserData={setUserData} />
                        <Add onClick={handleAddEducation} />
                        <Experience setUserData={setUserData} />
                        <Add />
                        <Project setUserData={setUserData} />
                        <Add />
                        <Language setUserData={setUserData} />
                        <Add />
                        <Tool setUserData={setUserData} />
                        <Add />

                        <FinishButton userData={userData} showPDF={showPDF} setShowPDF={setShowPDF} />
                    </div>
                </>
            )
        }
    </>
    )

}


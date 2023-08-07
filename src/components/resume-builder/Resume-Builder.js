import { NavBar } from "../toolbox/nav-bar/NavBar";
import { SideMenu } from "../toolbox/sideMenu/SideMenu.js";
import "./Resume-Builder.css"
import plusIcon from '../toolbox/images/add.png';
import MyDocument from "./generate-pdf"
import React, { useState } from 'react';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// function Sidebar() {
//     let sideMenuRowArr = [['Profile', null], ['Education', null], ['Work Experience', null], ['Project', null], ['Tool', null], ['Award', null], ['LeaderShip', null], ['Finish', null]];
//     return (<><NavBar navButtonSelection="resumeBuilder" />
//         <SideMenu header="Resume Builder" rowsArr={sideMenuRowArr} />
//     </>);
// }


function ResumeBuilder() {
    let sideMenuRowArr = [['Profile', null], ['Education', null], ['Work Experience', null], ['Project', null], ['Tool', null], ['Award', null], ['LeaderShip', null], ['Finish', null]];

    const [showPDF, setShowPDF] = useState(false);

    // State to store user input data
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        github: '',
        Degree: '',
        institution: '',
        GPA: '',
        graduationdate: '',
        course: '',
        position: '',
        company: '',
        city: '',
        startdate: '',
        enddate: '',
        responsibility1: '',
        responsibility2: '',
        responsibility3: '',
        title: '',
        contribution1: '',
        contribution2: '',
        language1: '',
        tool1: '',
        // Add other fields as needed...
    });

    // Function to handle input change and update user data state
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
        const { email, email_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: email_value }));
        const { github, github_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: github_value }));
        const { Degree, Degree_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: Degree_value }));
        const { institution, institution_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: institution_value }));
        const { GPA, GPA_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: GPA_value }));
        const { graduationdate, graduationdate_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: graduationdate_value }));
        const { course, course_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: course_value }));
        const { position, position_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: position_value }));
        const { company, company_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: company_value }));
        const { city, city_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: city_value }));
        const { startdate, startdate_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: startdate_value }));
        const { enddate, enddate_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: enddate_value }));
        const { responsibility1, responsibility1_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: responsibility1_value }));
        const { responsibility2, responsibility2_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: responsibility2_value }));
        const { responsibility3, responsibility3_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: responsibility3_value }));
        const { title, title_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: title_value }));
        const { contribution1, contribution1_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: contribution1_value }));
        const { contribution2, contribution2_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: contribution2_value }));
        const { language1, language1_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: language1_value }));
        const { tool1, tool1_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: tool1_value }));
    };

    // Function to handle the "Finish" button click
    const handleFinishClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log('clicked!');
        setShowPDF(true);
    };
    
    
    // State to store resume sections
    const [resumeSections, setResumeSections] = useState([
        {
        title: 'Profile',
        inputs: [{ label: 'Name', placeholder: 'Chrisdeep', name: 'name' }],
        },
    ]);
      
        // Function to add a new section
    const addSection = (sectionType) => {
        let newSection;
        switch (sectionType) {
        case 'Experience':
            newSection = {
            title: 'Experience',
            inputs: [
                { label: 'Position', placeholder: 'Software Engineering Intern', name: 'position' },
                { label: 'Company', placeholder: 'Google', name: 'company' },
                // Add other input fields for experience
            ],
            };
            break;
        case 'Project':
            newSection = {
            title: 'Project',
            inputs: [
                { label: 'Title', placeholder: 'SmartHealth Tracker', name: 'title' },
                { label: 'Contribution 1', placeholder: 'Developed mobile and web applications...', name: 'contribution1' },
                // Add other input fields for projects
            ],
            };
            break;
        case 'Language':
            newSection = {
            title: 'Language',
            inputs: [
                { label: 'Language', placeholder: 'Python', name: 'language' },
                // Add other input fields for languages
            ],
            };
            break;
        case 'Tool':
            newSection = {
            title: 'Tool',
            inputs: [
                { label: 'Tool', placeholder: 'GitHub', name: 'tool' },
                // Add other input fields for tools
            ],
            };
            break;
        default:
            return;
        }
        setResumeSections((prevSections) => [...prevSections, newSection]);
    };
    
    // Function to add a new input field to a resume section
    const addInputField = (sectionIndex) => {
        setResumeSections((prevSections) => {
        const newSections = [...prevSections];
        // Modify the inputs array based on section type (if needed)
        // For example, if you want to add new contribution fields for projects
        // newSections[sectionIndex].inputs.push({ label: `Contribution ${newSections[sectionIndex].inputs.length + 1}`, placeholder: '', name: `contribution${newSections[sectionIndex].inputs.length + 1}` });
        return newSections;
        });
    };
    


    return (<>
        <NavBar navButtonSelection="resumeBuilder" />
        <div className="container">
            <div className="sidebar">
                <SideMenu header="Resume Builder" rowsArr={sideMenuRowArr} />
            </div>
            <div className="formbody">
                {showPDF ? (
                    <div>
                        <MyDocument userData={userData} />
                    </div>
                ) : (
                    <div class="formxc">
                      
                        <div class="row">
                            {/* <div class="col-8"> */}
                                <form>
                                    <p> Profile </p>
                                    <div className="resume-section">

                                        <label>
                                            Name:
                                            <input type="text" name="name" placeholder="Chrisdeep" onChange={handleInputChange} />
                                        </label>
                                        <br></br>
                                        <label>
                                            Email:
                                            <input type="text" name="email" placeholder="your.email@here.com" onChange={handleInputChange} />
                                        </label>
                                        <br></br>
                                        <label>
                                            GitHub Account:
                                            <input type="text" name="github" placeholder="chrissdeep_" onChange={handleInputChange}/>
                                        </label>
                                    </div>
                                    <br></br>

                                    <p>Education</p>
                                    <div className="resume-section">
                                        <h4>Education 1</h4>
                                        <label>
                                            Degree:
                                            <input type="text" name="Degree" placeholder="Bachelor of Science (B.S.) in Computer Science" onChange={handleInputChange}/>
                                        </label>
                                        <br></br>
                                        <label>
                                            Institution:
                                            <input type="text" name="institution" placeholder="React University" onChange={handleInputChange}/>
                                        </label>
                                        <br></br>
                                        <label>
                                            GPA:
                                            <input type="text" name="GPA" placeholder="3.8" onChange={handleInputChange} />
                                        </label>
                                        <br></br>
                                        <label>
                                            Expected Graduation Date:
                                            <input type="text" name="graduationdate" placeholder="May 2024" onChange={handleInputChange} />
                                        </label>
                                        <br></br>
                                        <label>
                                            Related Coursework:
                                            <input type="text" name="course" placeholder="CS 61A, CS 61B" onChange={handleInputChange}/>
                                        </label>
                                    </div>
                                    <br></br>

                                    <p>Experiences</p>
                                    <div className="resume-section">
                                        <h4>Experience 1</h4>
                                        <label>
                                            Position:
                                            <input type="text" name="position" placeholder="Software Engineering Intern" onChange={handleInputChange}/>
                                        </label>
                                        <br></br>
                                        <label>
                                            Company:
                                            <input type="text" name="company" placeholder="Google" onChange={handleInputChange}/>
                                        </label>
                                        <br></br>
                                        <label>
                                            City, State:
                                            <input type="text" name="city" placeholder="Sunnyvale, CA" onChange={handleInputChange}/>
                                        </label>
                                        <br></br>
                                        <label>
                                            Start Date:
                                            <input type="text" name="startdate" placeholder="May 2023" onChange={handleInputChange}/>
                                        </label>
                                        <br></br>
                                        <label>
                                            End Date:
                                            <input type="text" name="enddate" placeholder="August 2023" onChange={handleInputChange}/>
                                        </label>
                                        <br></br>
                                        <label>
                                            Responsibility or Achievement 1:
                                            <input type="text" name="responsibility1" onChange={handleInputChange} placeholder="Collaborated with the product development team to design, code, and implement new features in the company's main application, enhancing usability and performance. Utilized programming languages such as Python and Java, following Agile methodologies." />
                                        </label>
                                        <br></br>
                                        <label>
                                            Responsibility or Achievement 2:
                                            <input type="text" name="responsibility2" onChange={handleInputChange} placeholder="Identified and fixed critical bugs in existing software, leading to a 25% reduction in customer-reported issues. Conducted code reviews and refactoring sessions to improve overall code quality and maintainability, contributing to best practices within the development team." />
                                        </label>
                                        <br></br>
                                        <label>
                                            Responsibility or Achievement 3:
                                            <input type="text" name="responsibility3" onChange={handleInputChange} placeholder="Assisted in the creation and execution of automated test scripts, achieving a 40% reduction in manual testing time. Contributed to continuous integration (CI) and continuous deployment (CD) processes, enhancing the efficiency of development cycles and ensuring the reliability of software releases." />
                                        </label>
                                    </div>

                                    <div className="add">
                                        <a href="#">
                                            <img src={plusIcon} className="plus-icon" />
                                            Add Experience
                                        </a>
                                    </div>



                                    { /*<div className="resume-section">
                                        <p>Experience 2</p>
                                        <label>
                                            Position:
                                            <input type="text" placeholder="Software Engineering Intern" />
                                        </label>
                                        <br></br>
                                        <label>
                                            Company:
                                            <input type="text" placeholder="Google" />
                                        </label>
                                        <br></br>
                                        <label>
                                            City, State:
                                            <input type="text" placeholder="Sunnyvale, CA" />
                                        </label>
                                        <br></br>
                                        <label>
                                            Start Date:
                                            <input type="text" placeholder="May 2023" />
                                        </label>
                                        <br></br>
                                        <label>
                                            End Date:
                                            <input type="text" placeholder="August 2023" />
                                        </label>
                                        <br></br>
                                        <label>
                                            Responsibility or Achievement 1:
                                            <input type="text" placeholder="Collaborated with the product development team to design, code, and implement new features in the company's main application, enhancing usability and performance. Utilized programming languages such as Python and Java, following Agile methodologies." />
                                        </label>
                                        <br></br>
                                        <label>
                                            Responsibility or Achievement 2:
                                            <input type="text" placeholder="Identified and fixed critical bugs in existing software, leading to a 25% reduction in customer-reported issues. Conducted code reviews and refactoring sessions to improve overall code quality and maintainability, contributing to best practices within the development team." />
                                        </label>
                                        <br></br>
                                        <label>
                                            Responsibility or Achievement 3:
                                            <input type="text" placeholder="Assisted in the creation and execution of automated test scripts, achieving a 40% reduction in manual testing time. Contributed to continuous integration (CI) and continuous deployment (CD) processes, enhancing the efficiency of development cycles and ensuring the reliability of software releases." />
                                        </label>
                                    </div>

                                    <br></br>

                                    <div className="resume-section">
                                        <p>Experience 3</p>
                                        <label>
                                            Position:
                                            <input type="text" placeholder="Software Engineering Intern" />
                                        </label>
                                        <br></br>
                                        <label>
                                            Company:
                                            <input type="text" placeholder="Google" />
                                        </label>
                                        <br></br>
                                        <label>
                                            City, State:
                                            <input type="text" placeholder="Sunnyvale, CA" />
                                        </label>
                                        <br></br>
                                        <label>
                                            Start Date:
                                            <input type="text" placeholder="May 2023" />
                                        </label>
                                        <br></br>
                                        <label>
                                            End Date:
                                            <input type="text" placeholder="August 2023" />
                                        </label>
                                        <br></br>
                                        <label>
                                            Responsibility or Achievement 1:
                                            <input type="text" placeholder="Collaborated with the product development team to design, code, and implement new features in the company's main application, enhancing usability and performance. Utilized programming languages such as Python and Java, following Agile methodologies." />
                                        </label>
                                        <br></br>
                                        <label>
                                            Responsibility or Achievement 2:
                                            <input type="text" placeholder="Identified and fixed critical bugs in existing software, leading to a 25% reduction in customer-reported issues. Conducted code reviews and refactoring sessions to improve overall code quality and maintainability, contributing to best practices within the development team." />
                                        </label>
                                        <br></br>
                                        <label>
                                            Responsibility or Achievement 3:
                                            <input type="text" placeholder="Assisted in the creation and execution of automated test scripts, achieving a 40% reduction in manual testing time. Contributed to continuous integration (CI) and continuous deployment (CD) processes, enhancing the efficiency of development cycles and ensuring the reliability of software releases." />
                                        </label>
                </div> */}

                                    <br></br>

                                    <p>Projects</p>
                                    <div className="resume-section">
                                        <h4>Project 1</h4>
                                        <label>
                                            Title:
                                            <input type="text" name="title" placeholder="SmartHealth Tracker" onChange={handleInputChange}/>
                                        </label>
                                        <br></br>
                                        <label>
                                            Contribution 1:
                                            <input type="text" name="contribution1" onChange={handleInputChange} placeholder="Developed mobile and web applications using React Native and React.js, and integrated real-time health data from multiple wearable devices using APIs." />
                                        </label>
                                        <br></br>
                                        <label>
                                            Contribution 2:
                                            <input type="text" name="contribution2" onChange={handleInputChange} placeholder="Implemented a personalized recommendation engine using machine learning algorithms that provided customized fitness and nutrition plans, and designed interactive features that led to a 30% increase in daily active users within three months." />
                                        </label>
                                    </div>
                                    <div className="add">
                                        <a href="#">
                                            <img src={plusIcon} name="language1" className="plus-icon" />
                                            Add Project
                                        </a>
                                    </div>
                                    <br></br>

                                    <p>Languages</p>
                                    <div className="resume-section">
                                        <h4>Language 1</h4>
                                        <label>
                                            Language:
                                            <input type="text" name="tool1" placeholder="Python" onChange={handleInputChange}/>
                                        </label>
                                        <br></br>
                                        { /*<label>
                                            Language 2:
                                            <input type="text" placeholder="Java" />
                                        </label>
                                        <br></br>
                                        <label>
                                            Language 3:
                                            <input type="text" placeholder="C++" />
                                        </label>
                                        <br></br>
                                        <label>
                                            Language 4:
                                            <input type="text" placeholder="HTML" />
                                        </label>
                                        <br></br>
                                        <label>
                                            Language 5:
                                            <input type="text" placeholder="CSS" />
                                        </label>
                                        <br></br>
                                        <label>
                                            Language 6:
                                            <input type="text" placeholder="JavaScript" />
            </label> */}
                                    </div>
                                    <div className="add">
                                        <a href="#">
                                            <img src={plusIcon} className="plus-icon" onChange={handleInputChange}/>
                                            Add Language
                                        </a>
                                    </div>
                                    <br></br>

                                    <p>Tools</p>
                                    <div className="resume-section">
                                        <h4>Tool 1</h4>
                                        <label>
                                            Tool:
                                            <input type="text" placeholder="GitHub" onChange={handleInputChange}/>
                                        </label>
                                        { /*<br></br>
                                        <label>
                                            Tool 2:
                                            <input type="text" placeholder="SwiftUI" />
                                        </label>
                                        <br></br>
                                        <label>
                                            Tool 3:
                                            <input type="text" placeholder="Figma" />
        </label> */}
                                    </div>
                                    <div className="add">
                                        <a href="#">
                                            <img src={plusIcon} className="plus-icon" />
                                            Add Tool
                                        </a>
                                    </div>
                                    <br></br>

                                    <input onClick={handleFinishClick} type="submit" value="Finish" id="finish-button" />
                                </form>

                            {/* </div> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
    )
}


export { ResumeBuilder }
import "./Resume-Builder.css"
import plusIcon from './toolbox/images/add.png'; 
import MyDocument from "./generate-pdf"
import React, { useState } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export function ResumeBuilder() {

    const [showPDF, setShowPDF] = useState(false);

    // State to store user input data
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        // Add other fields as needed...
    });

    // Function to handle input change and update user data state
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Function to handle the "Finish" button click
    const handleFinishClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log('clicked!');
        setShowPDF(true);
    };


    return (
        <div className="resume-builder">
            {showPDF ? (
                <div>
                    <MyDocument userData={userData}/>
                </div>
            ) : (
                <div class="container">
                    <div class="row">
                        <div class="col">header</div>
                        <div class="w-100"></div>
                        <div class="col-4 resume-contents">
                            side bar
                        </div>
                        <div class="col-8">
                            <form>
                                <p> Profile </p>
                                    <div className="resume-section">
                                
                                    <label>
                                        Name:
                                        <input type="text" name="name" placeholder="Chrisdeep" onChange={handleInputChange}/>
                                    </label>
                                    <br></br>
                                    <label>
                                        Email:
                                        <input type="text" placeholder="your.email@here.com" />
                                    </label>
                                    <br></br>
                                    <label>
                                        GitHub Account:
                                        <input type="text" placeholder="chrissdeep_" />
                                    </label>
                                </div>
                                <br></br>

                                <p>Education</p>
                                <div className="resume-section">
                                    <h4>Education 1</h4>
                                    <label>
                                        Degree:
                                        <input type="text" placeholder="Bachelor of Science (B.S.) in Computer Science" />
                                    </label>
                                    <br></br>
                                    <label>
                                        Institution:
                                        <input type="text" placeholder="React University" />
                                    </label>
                                    <br></br>
                                    <label>
                                        GPA:
                                        <input type="text" placeholder="3.8" />
                                    </label>
                                    <br></br>
                                    <label>
                                        Expected Graduation Date:
                                        <input type="text" placeholder="May 2024" />
                                    </label>
                                    <br></br>
                                    <label>
                                        Related Coursework:
                                        <input type="text" placeholder="CS 61A, CS 61B" />
                                    </label>
                                </div>
                                <br></br>

                                <p>Experiences</p>
                                <div className="resume-section">
                                    <h4>Experience 1</h4>
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

                                <div className="add">
                                    <a href="#">
                                        <img src={plusIcon} className="plus-icon" />
                                        Add Experience
                                    </a>
                                </div>


        
                                {/* <div className="resume-section">
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
                                        <input type="text" placeholder="SmartHealth Tracker" />
                                    </label>
                                    <br></br>
                                    <label>
                                        Contribution 1:
                                        <input type="text" placeholder="Developed mobile and web applications using React Native and React.js, and integrated real-time health data from multiple wearable devices using APIs." />
                                    </label>
                                    <br></br>
                                    <label>
                                        Contribution 2:
                                        <input type="text" placeholder="Implemented a personalized recommendation engine using machine learning algorithms that provided customized fitness and nutrition plans, and designed interactive features that led to a 30% increase in daily active users within three months." />
                                    </label>
                                </div>
                                <br></br>

                                <p>Languages</p>
                                <div className="resume-section">
                                    <h4>Language 1</h4>
                                    <label>
                                        Language:
                                        <input type="text" placeholder="Python" />
                                    </label>
                                    <br></br>
                                    {/* <label>
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
                                <br></br>
                                
                                <p>Tools</p>
                                <div className="resume-section">
                                    <h4>Tool 1</h4>
                                    <label>
                                        Tool:
                                        <input type="text" placeholder="GitHub" />
                                    </label>
                                    {/* <br></br>
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

                                <br></br>

                                <input onClick={handleFinishClick} type="submit" value="Finish" id="finish-button" />
                            </form>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
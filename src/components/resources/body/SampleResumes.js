import "./SampleResumes.css";
import SampleResumeIcon from "../images/icons/sampleresume.png";
import LinkIcon from "../images/icons/link arrow.png";

function Resume({ position, file }) {
  return (
    <button className="resume-button" onClick={() => window.open(file)}>
      <p>{position}</p>
      <img className="small-icon" src={LinkIcon}></img>
    </button>
  );
}

const resumes = [
  { position: "AI Engineer", file: "file_link_1" },
  { position: "IT Project Manager", file: "file_link_2" },
  { position: "Blockchain Developer", file: "file_link_3" },
  { position: "IT Support Specialist", file: "file_link_4" },
  { position: "Business Intelligence Analyst", file: "file_link_4" },
  { position: "Machine Learning Engineer", file: "file_link_4" },
  { position: "Cloud Engineer", file: "file_link_4" },
  { position: "Mobile App Developer", file: "file_link_4" },
  { position: "Computer Vision Engineer", file: "file_link_4" },
  { position: "Network Administrator", file: "file_link_4" },
  { position: "Cybersecurity Analyst", file: "" },
  { position: "Quality Assurance (QA) Engineer", file: "" },
  { position: "Data Scientist", file: "" },
  { position: "Research Scientist", file: "" },
  { position: "Database Administrator", file: "" },
  { position: "Software Developer", file: "" },
  { position: "DevOps Engineer", file: "" },
  { position: "Systems Analyst", file: "" },
  { position: "Embedded Systems Developer", file: "" },
  { position: "Technical Writer", file: "" },
  { position: "Game Developer", file: "" },
  { position: "UX/UI Designer", file: "" },
  { position: "IoT Developer", file: "" },
  { position: "Web Developer", file: "" },
];

export function SampleResumes() {
  return (
    <div className="content">
      <div className="title">
        <img
          className="title-icon"
          src={SampleResumeIcon}
          alt="Sample Resume Icon"
        ></img>
        <h1>Sample Resumes</h1>
      </div>
      <div className="sample-resume-container">
        {resumes.map((resume, index) => (
          <Resume key={index} position={resume.position} file={resume.file} />
        ))}
      </div>
    </div>
  );
}
export default SampleResumes;

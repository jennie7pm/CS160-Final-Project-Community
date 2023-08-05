import "./Resources.css";
import LinkIcon from "./images/icons/link arrow.png";
import InternshipSearchIcon from "./images/icons/internshipsearch.png";
import LinkedInLogo from "./images/logos/linkedin.png";
import GlassdoorLogo from "./images/logos/glassdoor.png";
import IndeedLogo from "./images/logos/indeed.png";
import HandshakeLogo from "./images/logos/handshake.png";
import OttaLogo from "./images/logos/otta.png";
import ZiprecruiterLogo from "./images/logos/ziprecruiter.png";
import GoldmanSachsLogo from "./images/logos/goldmansachs.png";

import { useCallback } from "react";

export function InternshipSearch() {
  const openLinkedIn = useCallback(() => {
    window.open("https://linkedin.com/");
  }, []);

  const openGlassdoor = useCallback(() => {
    window.open("https://www.glassdoor.com/");
  }, []);

  const openIndeed = useCallback(() => {
    window.open("https://www.indeed.com/");
  }, []);

  const openHandshake = useCallback(() => {
    window.open("https://joinhandshake.com/");
  }, []);

  const openOtta = useCallback(() => {
    window.open("https://otta.com/");
  }, []);

  const openZiprecruiter = useCallback(() => {
    window.open("https://www.ziprecruiter.com/");
  }, []);

  return (
    <div className="body">
      <div className="sidebar"></div>
      <div className="content">
        <div className="title">
          <img
            className="title-icon"
            src={InternshipSearchIcon}
            alt="Data Structures and Algorithms"
          ></img>
          <h1>Internship Search</h1>
        </div>
        <div className="section">
          <div className="section-header">
            <h2>Tools</h2>
          </div>
          <div className="tool-container">
            <button className="tool-card" onClick={openLinkedIn}>
              <img
                className="icon"
                alt="LinkedIn logo"
                src={LinkedInLogo}
              ></img>
              <p>LinkedIn</p>
            </button>
            <button className="tool-card" onClick={openGlassdoor}>
              <img
                className="icon"
                alt="Glassdoor logo"
                src={GlassdoorLogo}
              ></img>
              <p>Glassdoor</p>
            </button>
            <button className="tool-card" onClick={openIndeed}>
              <img className="icon" alt="Indeed logo" src={IndeedLogo}></img>
              <p>Indeed</p>
            </button>
            <button className="tool-card" onClick={openHandshake}>
              <img
                className="icon"
                alt="Handshake logo"
                src={HandshakeLogo}
              ></img>
              <p>Handshake</p>
            </button>
            <button className="tool-card" onClick={openOtta}>
              <img className="icon" alt="Otta logo" src={OttaLogo}></img>
              <p>Otta</p>
            </button>
            <button className="tool-card" onClick={openZiprecruiter}>
              <img
                className="icon"
                alt="Ziprecruiter logo"
                src={ZiprecruiterLogo}
              ></img>
              <p>ZipRecruiter</p>
            </button>
          </div>
        </div>
        <div className="section">
          <div className="section-header">
            <h2>Open Positions</h2>
          </div>
          <div className="resources-container">
            <div className="position-card">
              <img
                className="icon"
                alt="Goldman Sachs logo"
                src={GoldmanSachsLogo}
              ></img>
              <p>Goldman Sachs</p>
              <div className="column-container">
                <p>Multiple locations</p>
              </div>
              <div className="column-container">
                <button className="link-button">
                  <p>Analyst</p>
                  <img className="small-icon" src={LinkIcon}></img>
                </button>
              </div>
            </div>
            <div className="position-card">
              <img
                className="icon"
                alt="Goldman Sachs logo"
                src={GoldmanSachsLogo}
              ></img>
              <div className="column-container">
                <p>Walmart</p>
              </div>
              <div className="column-container">
                <p>Multiple locations</p>
              </div>
              <div className="column-container">
                <button className="link-button">
                  <p>Analyst</p>
                  <img className="small-icon" src={LinkIcon}></img>
                </button>
                <button className="link-button">
                  <p>Analyst</p>
                  <img className="small-icon" src={LinkIcon}></img>
                </button>
                <button className="link-button">
                  <p>Analyst</p>
                  <img className="small-icon" src={LinkIcon}></img>
                </button>
                <button className="link-button">
                  <p>Analyst</p>
                  <img className="small-icon" src={LinkIcon}></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternshipSearch;

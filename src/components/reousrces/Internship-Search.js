import "./Resources.css";
import Tool from "./Tool";
import LinkIcon from "./images/icons/link arrow.png";
import InternshipSearchIcon from "./images/icons/internshipsearch.png";
import LinkedInLogo from "./images/logos/linkedin.png";
import GlassdoorLogo from "./images/logos/glassdoor.png";
import IndeedLogo from "./images/logos/indeed.png";
import HandshakeLogo from "./images/logos/handshake.png";
import OttaLogo from "./images/logos/otta.png";
import ZiprecruiterLogo from "./images/logos/ziprecruiter.png";
import GoldmanSachsLogo from "./images/logos/goldmansachs.png";

function OpenPosition({ company, location, position, links }) {
  return (
    <div className="position-card">
      <div className="company-container">
        <img className="icon" alt={company.name} src={company.logo}></img>
        <p>{company.name}</p>
      </div>
      <div className="location-container">
        {location.map((loc, index) => (
          <p key={index}>{loc}</p>
        ))}
      </div>
      <div className="link-container">
        {position.map((pos, index) => (
          <button
            className="link-button"
            key={index}
            onClick={() => window.open(links[index])}
          >
            <p>{pos}</p>
            <img className="small-icon" src={LinkIcon}></img>
          </button>
        ))}
      </div>
    </div>
  );
}

export function InternshipSearch() {
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
            <Tool
              name={"LinkedIn"}
              logo={LinkedInLogo}
              link={"https://linkedin.com/"}
            />
            <Tool
              name={"Glassdoor"}
              logo={GlassdoorLogo}
              link={"https://www.glassdoor.com/"}
            />
            <Tool
              name={"Indeed"}
              logo={IndeedLogo}
              link={"https://www.indeed.com/"}
            />
            <Tool
              name={"Handshake"}
              logo={HandshakeLogo}
              link={"https://joinhandshake.com/"}
            />
            <Tool name={"Otta"} logo={OttaLogo} link={"https://otta.com/"} />
            <Tool
              name={"Ziprecruiter"}
              logo={ZiprecruiterLogo}
              link={"https://www.ziprecruiter.com/"}
            />
          </div>
        </div>
        <div className="section">
          <div className="section-header">
            <h2>Open Positions</h2>
          </div>
          <div className="resources-container">
            <OpenPosition
              company={{ name: "Goldman Sachs", logo: GoldmanSachsLogo }}
              location={["Multiple locations"]}
              position={["Analyst"]}
            />
            <OpenPosition
              company={{ name: "KPMG", logo: GoldmanSachsLogo }}
              location={["Multiple locations"]}
              position={["Engineering & IT"]}
            />
            <OpenPosition
              company={{ name: "Optiver", logo: GoldmanSachsLogo }}
              location={["Chicago, IL", "Austin, TX"]}
              position={[
                "Quantitative Trading",
                "HFT Research",
                "Software Engineering",
              ]}
            />
            <OpenPosition
              company={{ name: "Walmart", logo: GoldmanSachsLogo }}
              location={["Multiple locations"]}
              position={[
                "Software Engineering",
                "Systems Engineering",
                "Cybersecurity",
                "Data Science",
              ]}
            />
            <OpenPosition
              company={{ name: "Apple", logo: GoldmanSachsLogo }}
              location={["Multiple locations"]}
              position={["Software Engineering", "ML/AI", "Engineering PM"]}
            />
            <OpenPosition
              company={{ name: "Neuralink", logo: GoldmanSachsLogo }}
              location={["Fremont, CA", "Austin, TX"]}
              position={["Software Engineering"]}
            />
            <OpenPosition
              company={{ name: "Certik", logo: GoldmanSachsLogo }}
              location={["Multiple locations"]}
              position={["Development", "Platform Engineering", "Full-stack"]}
            />
            <OpenPosition
              company={{ name: "D.E. Shaw", logo: GoldmanSachsLogo }}
              location={["New York, NY"]}
              position={[
                "Software Development",
                "Systems Technical PM",
                "Systems Administration",
                "Systems Technology",
              ]}
            />
            <OpenPosition
              company={{ name: "Bank of America", logo: GoldmanSachsLogo }}
              location={["Multiple locations"]}
              position={["Global Technology Analyst"]}
            />
            <OpenPosition
              company={{ name: "Protiviti", logo: GoldmanSachsLogo }}
              location={["Phoenix, AZ"]}
              position={["Technology Consulting"]}
            />
            <OpenPosition
              company={{ name: "Mercedes-Benz", logo: GoldmanSachsLogo }}
              location={["Sunnyvale, CA"]}
              position={["Data Products"]}
            />
            <OpenPosition
              company={{ name: "LUMEN", logo: GoldmanSachsLogo }}
              location={["Sunnyvale, CA"]}
              position={["Various positions"]}
            />
            <OpenPosition
              company={{ name: "JPMorgan Chase", logo: GoldmanSachsLogo }}
              location={["Multiple locations"]}
              position={["Software Engineering", "AI and Data Science"]}
            />
            <OpenPosition
              company={{ name: "Citadel", logo: GoldmanSachsLogo }}
              location={["Multiple locations"]}
              position={[
                "Software Engineering",
                "Investment and Trading",
                "Quant Research",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternshipSearch;

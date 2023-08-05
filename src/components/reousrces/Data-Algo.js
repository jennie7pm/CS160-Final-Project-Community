import "./Resources.css";
import Tool from "./Tool";
import DataAlgoIcon from "./images/icons/dataalgo.png";

import LeetCodeLogo from "./images/logos/leetcode.png";
import HackerRankLogo from "./images/logos/hackerrank.png";
import TopCoderLogo from "./images/logos/topcoder.png";
import GeeksforGeeksLogo from "./images/logos/geeksforgeeks.png";
import CodilityLogo from "./images/logos/codility.png";
import AlgoExpertLogo from "./images/logos/algoexpert.png";

export function DataAlgo() {
  return (
    <div className="body">
      <div className="sidebar"></div>
      <div className="content">
        <div className="title">
          <img
            className="title-icon"
            src={DataAlgoIcon}
            alt="Data Structures and Algorithms"
          ></img>
          <h1>Data Structures and Algorithms</h1>
        </div>
        <div className="section">
          <div className="section-header">
            <h2>Practice Tools</h2>
          </div>
          <div className="tool-container">
            <Tool
              name={"LeetCode"}
              logo={LeetCodeLogo}
              link={"https://leetcode.com/"}
            />
            <Tool
              name={"HackerRank"}
              logo={HackerRankLogo}
              link={"https://www.hackerrank.com/"}
            />
            <Tool
              name={"TopCoder"}
              logo={TopCoderLogo}
              link={"https://www.topcoder.com/"}
            />
            <Tool
              name={"GeeksforGeeks"}
              logo={GeeksforGeeksLogo}
              link={"https://www.geeksforgeeks.org/"}
            />
            <Tool
              name={"Codility"}
              logo={CodilityLogo}
              link={"https://www.codility.com/"}
            />
            <Tool
              name={"AlgoExpert"}
              logo={AlgoExpertLogo}
              link={"https://www.algoexpert.io/product"}
            />
          </div>
        </div>
        <div className="section">
          <div className="section-header">
            <h2>Resources</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataAlgo;

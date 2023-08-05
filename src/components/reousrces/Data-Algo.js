import "./Resources.css";
import DataAlgoIcon from "./images/icons/dataalgo.png";
import LeetCodeLogo from "./images/logos/leetcode.png";
import HackerRankLogo from "./images/logos/hackerrank.png";
import TopCoderLogo from "./images/logos/topcoder.png";
import GeeksforGeeksLogo from "./images/logos/geeksforgeeks.png";
import CodilityLogo from "./images/logos/codility.png";
import AlgoExpertLogo from "./images/logos/algoexpert.png";
import { useCallback } from "react";

export function DataAlgo() {
  const openLeetCode = useCallback(() => {
    window.open("https://leetcode.com/");
  }, []);

  const openHackerRank = useCallback(() => {
    window.open("https://www.hackerrank.com/");
  }, []);

  const openTopCoder = useCallback(() => {
    window.open("https://www.topcoder.com/");
  }, []);

  const openGeeksforGeeks = useCallback(() => {
    window.open("https://www.geeksforgeeks.org/");
  }, []);

  const openCodility = useCallback(() => {
    window.open("https://www.codility.com/");
  }, []);

  const openAlgoExpert = useCallback(() => {
    window.open("https://www.algoexpert.io/product");
  }, []);

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
            <button className="tool-card" onClick={openLeetCode}>
              <img
                className="icon"
                alt="LeetCode logo"
                src={LeetCodeLogo}
              ></img>
              <p>LeetCode</p>
            </button>
            <button className="tool-card" onClick={openHackerRank}>
              <img
                className="icon"
                alt="hackerrank logo"
                src={HackerRankLogo}
              ></img>
              <p>HackerRank</p>
            </button>
            <button className="tool-card" onClick={openTopCoder}>
              <img
                className="icon"
                alt="TopCoder logo"
                src={TopCoderLogo}
              ></img>
              <p>TopCoder</p>
            </button>
            <button className="tool-card" onClick={openGeeksforGeeks}>
              <img
                className="icon"
                alt="GeeksforGeeks logo"
                src={GeeksforGeeksLogo}
              ></img>
              <p>GeeksforGeeks</p>
            </button>
            <button className="tool-card" onClick={openCodility}>
              <img
                className="icon"
                alt="Codility logo"
                src={CodilityLogo}
              ></img>
              <p>Codility</p>
            </button>
            <button className="tool-card" onClick={openAlgoExpert}>
              <img
                className="icon"
                alt="AlgoExpert logo"
                src={AlgoExpertLogo}
              ></img>
              <p>AlgoExpert</p>
            </button>
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

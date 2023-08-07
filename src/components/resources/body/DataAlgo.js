import "./DataAlgo.css";
import React, { useState, useRef, useEffect } from "react";

import Tool from "../Tool";
import DataAlgoIcon from "../images/icons/dataalgo.png";
import LinkIcon from "../images/icons/link arrow.png";
import CollapseIcon from "../images/icons/collapse.png";

import LeetCodeLogo from "../images/logos/leetcode.png";
import HackerRankLogo from "../images/logos/hackerrank.png";
import TopCoderLogo from "../images/logos/topcoder.png";
import GeeksforGeeksLogo from "../images/logos/geeksforgeeks.png";
import CodilityLogo from "../images/logos/codility.png";
import AlgoExpertLogo from "../images/logos/algoexpert.png";
import { BodyHeader } from "../../toolbox/header /BodyHeader";

function Collapsible({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0";
    }
  }, [isOpen]);

  return (
    <div className={`collapsible ${isOpen ? "collapsible-open" : ""}`}>
      <button
        className="collapsible-button"
        onClick={() => {
          setIsOpen(!isOpen);
          setIsRotated(!isRotated);
        }}
      >
        <p>{title}</p>
        <img
          className={`small-icon rotate ${isRotated ? "rotate-180" : ""}`}
          src={CollapseIcon}
        />
      </button>
      <div
        ref={contentRef}
        className={`collapsible-container ${
          isOpen ? "collapsible-container-open" : ""
        }`}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}

function Resources({ resources, links }) {
  return (
    <div className="link-container">
      {resources.map((res, index) => (
        <button
          className="link-button"
          key={index}
          onClick={() => window.open(links[index])}
        >
          <p>{res}</p>
          <img className="small-icon" src={LinkIcon}></img>
        </button>
      ))}
    </div>
  );
}

export function DataAlgo() {
  let titleArr = [DataAlgoIcon, "Data Structures and Algorithms", '']
  return (
    <>
    <BodyHeader titleArr={titleArr}/>
    <div className="content">
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
        <div className="resources-container">
          <Collapsible title="Algorithmic Complexity / Big-O / Asymptotic Analysis">
            <Resources
              resources={[
                "[Video] Harvard CS50 - Asymptotic Notation",
                "[Video] Derek Banas - Big-O Notation",
                "[Video] Professor Byrne - Big-O Notation",
                "[Video] Professor Skiena - Analysis of Algorithms",
                "[Video] UC Berkeley CS61B - Asymptotic Analysis",
                "[Video] Professor Byrne - Amortized Analysis",
                "[Article] TopCoder - Computational Complexity: Part 1",
                "[Article] TopCoder - Computational Complexity: Part 2",
                "[Article] Big-O Cheat Sheet",
                "[Video] Micheal Sambol - Big-O Notation in 5 Minutes",
              ]}
              links={[
                "https://www.youtube.com/watch?v=iOq5kSKqeR4",
                "https://www.youtube.com/watch?v=V6mKVRU1evU",
                "https://www.youtube.com/watch?v=ei-A_wy5Yxw&index=2&list=PL1BaGV1cIH4UhkL8a9bJGG356covJ76qN",
                "https://www.youtube.com/watch?v=z1mkCe3kVUA",
                "https://archive.org/details/ucberkeley_webcast_VIS4YDpuP98",
                "https://www.youtube.com/watch?v=B3SpQZaAZP4&index=10&list=PL1BaGV1cIH4UhkL8a9bJGG356covJ76qN",
                "https://www.topcoder.com/thrive/articles/Computational%20Complexity%20part%20one",
                "https://www.topcoder.com/thrive/articles/Computational%20Complexity%20part%20two",
                "http://bigocheatsheet.com/",
                "https://www.youtube.com/watch?v=__vX2sjlpXU",
              ]}
            />
          </Collapsible>
          <Collapsible title="Arrays">
            <Resources
              resources={[
                "[Video] Harvard CS50 - Arrays",
                "[Video] UC San Diego - Arrays",
                "[Video] UC Berkeley CS61B - Linear and Multi-dimensional Arrays",
                "[Video] UC San Diego - Dynamic Arrays",
                "[Video] Hermant Maurya - Jagged Arrays",
              ]}
              links={[
                "https://www.youtube.com/watch?v=tI_tIZFyKBw&t=3009s",
                "https://www.coursera.org/lecture/data-structures/arrays-OsBSF",
                "https://archive.org/details/ucberkeley_webcast_Wp8oiO_CZZE",
                "https://www.coursera.org/lecture/data-structures/dynamic-arrays-EwbnV",
                "https://www.youtube.com/watch?v=1jtrQqYpt7g",
              ]}
            />
          </Collapsible>
          <Collapsible title="Linked Lists">
            <Resources
              resources={[
                "[Video] Harvard CS50 - Linked Lists",
                "[Video] UC San Diego - Singly-linked Lists",
                "[Video] UC Berkeley CS61B - Linked Lists: Part 1",
                "[Video] UC Berkeley CS61B - Linked Lists: Part 2",
                "[Video] Micheal Sambol - Linked Lists in 4 Minutes",
                "[Video] UC San Diego - Core: Linked Lists vs. Arrays",
                "[Video] UC San Diego - In the Real World: Lists vs. Arrays",
                "[Video] Bjarne Stroustrup - Why You Should Avoid Linked Lists",
                "[Video] UC San Diego - Doubly-linked Lists",
              ]}
              links={[
                "https://www.youtube.com/watch?v=tI_tIZFyKBw&t=3009s",
                "https://www.coursera.org/lecture/data-structures/singly-linked-lists-kHhgK",
                "https://archive.org/details/ucberkeley_webcast_htzJdKoEmO0",
                "https://archive.org/details/ucberkeley_webcast_-c4I3gFYe3w",
                "https://www.youtube.com/watch?v=F8AbOfQwl1c",
                "https://www.coursera.org/lecture/data-structures-optimizing-performance/core-linked-lists-vs-arrays-rjBs9",
                "https://www.coursera.org/lecture/data-structures-optimizing-performance/in-the-real-world-lists-vs-arrays-QUaUd",
                "https://www.youtube.com/watch?v=YQs6IC-vgmo",
                "https://www.coursera.org/lecture/data-structures/doubly-linked-lists-jpGKD",
              ]}
            />
          </Collapsible>
          <Collapsible title="Stacks">
            <Resources
              resources={[
                "[Video] UC San Diego - Stacks",
                "[Video] Micheal Sambol - Stacks in 3 Minutes",
              ]}
              links={[
                "https://www.coursera.org/lecture/data-structures/stacks-UdKzQ",
                "https://www.youtube.com/watch?v=KcT3aVgrrpU",
              ]}
            />
          </Collapsible>
          <Collapsible title="Queues">
            <Resources
              resources={[
                "[Video] UC San Diego - Queues",
                "[Article] Wikipedia - Circular Buffer / FIFO",
                "[Video] Micheal Sambol - Queues in 3 Minutes",
              ]}
              links={[
                "https://www.coursera.org/lecture/data-structures/queues-EShpq",
                "https://en.wikipedia.org/wiki/Circular_buffer",
                "https://www.youtube.com/watch?v=D6gu-_tmEpQ",
              ]}
            />
          </Collapsible>
          <Collapsible title="Hash Tables">
            <Resources
              resources={[
                "[Video] MIT 6.006 - Hashing with Chaining",
                "[Video] MIT 6.006 - Table Doubling & Karp-Rabin",
                "[Video] MIT 6.006 - Open Addressing & Cryptographic Hashing",
                "[Video] PyCon 2010 - The Mighty Dictionary",
                "[Video] PyCon 2017 - The Dictionary Even Mighter",
                "[Video] MIT 6.006 - Randomization: Universal & Perfect Hashing",
                "[Video] MIT 6.854 - Perfect Hashing",
                "[Video] Michael Sambol - Hash Tables in 4 Minutes",
                "[Video] UC San Diego - Core: Hash Tables",
                "[Video] UC San Diego - Phone Book Data Structure",
                "[Video] UC San Diego - Julia's Diary",
                "[Video] UC San Diego - Julia's Bank",
              ]}
              links={[
                "https://www.youtube.com/watch?v=0M_kIqhwbFo&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&index=9",
                "https://www.youtube.com/watch?v=BRO7mVIFt08&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&index=10",
                "https://www.youtube.com/watch?v=rvdJDijO2Ro&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&index=11",
                "https://www.youtube.com/watch?v=C4Kc8xzcA68",
                "https://www.youtube.com/watch?v=66P5FMkWoVU",
                "https://www.youtube.com/watch?v=z0lJ2k0sl1g&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&index=12",
                "https://www.youtube.com/watch?v=N0COwN14gt0&list=PL2B4EEwhKD-NbwZ4ezj7gyc_3yNrojKM9&index=5",
                "https://www.youtube.com/watch?v=knV86FlSXJ8",
                "https://www.coursera.org/lecture/data-structures-optimizing-performance/core-hash-tables-m7UuP",
                "https://www.coursera.org/lecture/data-structures-optimizing-performance/core-hash-tables-m7UuP",
                "https://www.coursera.org/lecture/data-structures/instant-uploads-and-storage-optimization-in-dropbox-DvaIb",
                "https://www.coursera.org/lecture/data-structures/distributed-hash-tables-tvH8H",
              ]}
            />
          </Collapsible>
          <Collapsible title="Binary Search">
            <Resources
              resources={[
                "[Video] Harvard CS50 - Binary Search",
                "[Article] Khan Academy - Binary Search",
                "[Article] TopCoder - Binary Search",
                "[Article] LeetCode - Powerful Ultimate Binary Search Template",
                "[Video] Michael Sambol - Binary Search in 4 Minutes",
              ]}
              links={[
                "https://www.youtube.com/watch?v=D5SrAga1pno",
                "https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search",
                "https://www.topcoder.com/thrive/articles/Binary%20Search",
                "https://leetcode.com/discuss/general-discussion/786126/python-powerful-ultimate-binary-search-template-solved-many-problems",
                "https://www.youtube.com/watch?v=fDKIpRe8GW4",
              ]}
            />
          </Collapsible>
          <Collapsible title="Bitwise Operations">
            <Resources
              resources={[
                "[Article] Bits Cheat Sheet",
                "[Article] Wikipedia - Word (Computer Architecture)",
                "[Video] Make School - Bit Manipulation",
                "[Video] C Programming Tutorial: Bitwise Operators",
                "[Article] Wikipedia - Bit Manipulation",
                "[Article] Wikipedia - Bitwise Operation",
                "[Article] Stanford - Bit Twiddling Hacks",
                "[Article] Stephan Brumme - The Bit Twiddler",
                "[Resource] Stephan Brumme - Interactive Bit Manipulator",
                "[Video] MIT 6.172 - Bit Hacks",
              ]}
              links={[
                "https://github.com/jwasham/coding-interview-university/blob/main/extras/cheat%20sheets/bits-cheat-sheet.pdf",
                "https://en.wikipedia.org/wiki/Word_(computer_architecture)",
                "https://www.youtube.com/watch?v=7jkIUgLC29I",
                "https://www.youtube.com/watch?v=d0AwjSpNXR0",
                "https://en.wikipedia.org/wiki/Bit_manipulation",
                "https://en.wikipedia.org/wiki/Bitwise_operation",
                "https://graphics.stanford.edu/~seander/bithacks.html",
                "https://bits.stephan-brumme.com/",
                "https://bits.stephan-brumme.com/interactive.html",
                "https://www.youtube.com/watch?v=ZusiKXcz_ac",
              ]}
            />
          </Collapsible>
        </div>
      </div>
    </div>
    </>
  );
}
export default DataAlgo;

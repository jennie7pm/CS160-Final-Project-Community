import React, { useState, useRef, useEffect } from "react";
import "./DataAlgo.css";

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

function Collapsible({ title, content }) {
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
        <Resources resources={content} />
      </div>
    </div>
  );
}

function Resources({ resources }) {
  return (
    <div className="link-container">
      {resources.map((res, index) => (
        <button
          className="link-button"
          key={index}
          onClick={() => window.open(res.link)}
        >
          <p>
            {"[" + res.type + "]"} {res.owner} - {res.name}
          </p>
          <img className="small-icon" src={LinkIcon}></img>
        </button>
      ))}
    </div>
  );
}

const tools = [
  { name: "LeetCode", logo: LeetCodeLogo, link: "https://leetcode.com/" },
  {
    name: "HackerRank",
    logo: HackerRankLogo,
    link: "https://www.hackerrank.com/",
  },
  { name: "TopCoder", logo: TopCoderLogo, link: "https://www.topcoder.com/" },
  {
    name: "GeeksforGeeks",
    logo: GeeksforGeeksLogo,
    link: "https://www.geeksforgeeks.org/",
  },
  { name: "Codility", logo: CodilityLogo, link: "https://www.codility.com/" },
  {
    name: "AlgoExpert",
    logo: AlgoExpertLogo,
    link: "https://www.algoexpert.io/product",
  },
];

const resourceCollection = [
  {
    title: "Algorithmic Complexity / Big-O / Asymptotic Analysis",
    content: [
      {
        type: "Video",
        owner: "Harvard CS50",
        name: "Asymptotic Notation",
        link: "https://www.youtube.com/watch?v=iOq5kSKqeR4",
      },
      {
        type: "Video",
        owner: "Derek Banas",
        name: "Big-O Notation",
        link: "https://www.youtube.com/watch?v=V6mKVRU1evU",
      },
      {
        type: "Video",
        owner: "Professor Byrne",
        name: "Big-O Notation",
        link: "https://www.youtube.com/watch?v=ei-A_wy5Yxw&index=2&list=PL1BaGV1cIH4UhkL8a9bJGG356covJ76qN",
      },
      {
        type: "Video",
        owner: "Professor Skiena",
        name: "Analysis of Algorithms",
        link: "https://www.youtube.com/watch?v=z1mkCe3kVUA",
      },
      {
        type: "Video",
        owner: "UC Berkeley CS61B",
        name: "Asymptotic Analysis",
        link: "https://archive.org/details/ucberkeley_webcast_VIS4YDpuP98",
      },
      {
        type: "Video",
        owner: "Professor Byrne",
        name: "Amortized Analysis",
        link: "https://www.youtube.com/watch?v=B3SpQZaAZP4&index=10&list=PL1BaGV1cIH4UhkL8a9bJGG356covJ76qN",
      },
      {
        type: "Article",
        owner: "TopCoder",
        name: "Computational Complexity: Part 1",
        link: "https://www.topcoder.com/thrive/articles/Computational%20Complexity%20part%20one",
      },
      {
        type: "Article",
        owner: "TopCoder",
        name: "Computational Complexity: Part 2",
        link: "https://www.topcoder.com/thrive/articles/Computational%20Complexity%20part%20two",
      },
      {
        type: "Article",
        owner: "TO-DO",
        name: "Big-O Cheat Sheet",
        link: "http://bigocheatsheet.com/",
      },
      {
        type: "Video",
        owner: "Micheal Sambol",
        name: "Big-O Notation in 5 Minutes",
        link: "https://www.youtube.com/watch?v=__vX2sjlpXU",
      },
    ],
  },
  {
    title: "Arrays",
    content: [
      {
        type: "Video",
        owner: "Harvard CS50",
        name: "Arrays",
        link: "https://www.youtube.com/watch?v=tI_tIZFyKBw&t=3009s",
      },
      {
        type: "Video",
        owner: "UC San Diego",
        name: "Arrays",
        link: "https://www.coursera.org/lecture/data-structures/arrays-OsBSF",
      },
      {
        type: "Video",
        owner: "UC Berkeley CS61B",
        name: "Linear and Multi-dimensional Arrays",
        link: "https://archive.org/details/ucberkeley_webcast_Wp8oiO_CZZE",
      },
      {
        type: "Video",
        owner: "UC San Diego",
        name: "Dynamic Arrays",
        link: "https://www.coursera.org/lecture/data-structures/dynamic-arrays-EwbnV",
      },
      {
        type: "Video",
        owner: "Hermant Maurya",
        name: "Jagged Arrays",
        link: "https://www.youtube.com/watch?v=1jtrQqYpt7g",
      },
    ],
  },
  {
    title: "Linked Lists",
    content: [
      {
        type: "Video",
        owner: "Harvard CS50",
        name: "Linked Lists",
        link: "https://www.youtube.com/watch?v=tI_tIZFyKBw&t=3009s",
      },
      {
        type: "Video",
        owner: "UC San Diego",
        name: "Singly-linked Lists",
        link: "https://www.coursera.org/lecture/data-structures/singly-linked-lists-kHhgK",
      },
      {
        type: "Video",
        owner: "UC Berkeley CS61B",
        name: "Linked Lists: Part 1",
        link: "https://archive.org/details/ucberkeley_webcast_htzJdKoEmO0",
      },
      {
        type: "Video",
        owner: "UC Berkeley CS61B",
        name: "Linked Lists: Part 2",
        link: "https://archive.org/details/ucberkeley_webcast_-c4I3gFYe3w",
      },
      {
        type: "Video",
        owner: "Micheal Sambol",
        name: "Linked Lists in 4 Minutes",
        link: "https://www.youtube.com/watch?v=F8AbOfQwl1c",
      },
      {
        type: "Video",
        owner: "UC San Diego",
        name: "Core: Linked Lists vs. Arrays",
        link: "https://www.coursera.org/lecture/data-structures-optimizing-performance/core-linked-lists-vs-arrays-rjBs9",
      },
      {
        type: "Video",
        owner: "UC San Diego",
        name: "In the Real World: Lists vs. Arrays",
        link: "https://www.coursera.org/lecture/data-structures-optimizing-performance/in-the-real-world-lists-vs-arrays-QUaUd",
      },
      {
        type: "Video",
        owner: "Bjarne Stroustrup",
        name: "Why You Should Avoid Linked Lists",
        link: "https://www.youtube.com/watch?v=YQs6IC-vgmo",
      },
      {
        type: "Video",
        owner: "UC San Diego",
        name: "Doubly-linked Lists",
        link: "https://www.coursera.org/lecture/data-structures/doubly-linked-lists-jpGKD",
      },
    ],
  },
  {
    title: "Stacks",
    content: [
      {
        type: "Video",
        owner: "UC San Diego",
        name: "Stacks",
        link: "https://www.coursera.org/lecture/data-structures/stacks-UdKzQ",
      },
      {
        type: "Video",
        owner: "Micheal Sambol",
        name: "Stacks in 3 Minutes",
        link: "https://www.youtube.com/watch?v=KcT3aVgrrpU",
      },
    ],
  },
  {
    title: "Queues",
    content: [
      {
        type: "Video",
        owner: "UC San Diego",
        name: "Queues",
        link: "https://www.coursera.org/lecture/data-structures/queues-EShpq",
      },
      {
        type: "Article",
        owner: "Wikipedia",
        name: "Circular Buffer / FIFO",
        link: "https://en.wikipedia.org/wiki/Circular_buffer",
      },
      {
        type: "Video",
        owner: "Micheal Sambol",
        name: "Queues in 3 Minutes",
        link: "https://www.youtube.com/watch?v=D6gu-_tmEpQ",
      },
    ],
  },
  {
    title: "Hash Tables",
    content: [
      {
        type: "Video",
        owner: "MIT 6.006",
        name: "Hashing with Chaining",
        link: "https://www.youtube.com/watch?v=0M_kIqhwbFo&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&index=9",
      },
      {
        type: "Video",
        owner: "MIT 6.006",
        name: "Table Doubling & Karp-Rabin",
        link: "https://www.youtube.com/watch?v=BRO7mVIFt08&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&index=10",
      },
      {
        type: "Video",
        owner: "MIT 6.006",
        name: "Open Addressing & Cryptographic Hashing",
        link: "https://www.youtube.com/watch?v=rvdJDijO2Ro&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&index=11",
      },
      {
        type: "Video",
        owner: "PyCon 2010",
        name: "The Mighty Dictionary",
        link: "https://www.youtube.com/watch?v=C4Kc8xzcA68",
      },
      {
        type: "Video",
        owner: "PyCon 2017",
        name: "The Dictionary Even Mighter",
        link: "https://www.youtube.com/watch?v=66P5FMkWoVU",
      },
      {
        type: "Video",
        owner: "MIT 6.006",
        name: "Randomization: Universal & Perfect Hashing",
        link: "https://www.youtube.com/watch?v=z0lJ2k0sl1g&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&index=12",
      },
      {
        type: "Video",
        owner: "MIT 6.854",
        name: "Perfect Hashing",
        link: "https://www.youtube.com/watch?v=N0COwN14gt0&list=PL2B4EEwhKD-NbwZ4ezj7gyc_3yNrojKM9&index=5",
      },
      {
        type: "Video",
        owner: "Michael Sambol",
        name: "Hash Tables in 4 Minutes",
        link: "https://www.youtube.com/watch?v=knV86FlSXJ8",
      },
      {
        type: "Video",
        owner: "UC San Diego",
        name: "Core: Hash Tables",
        link: "https://www.coursera.org/lecture/data-structures-optimizing-performance/core-hash-tables-m7UuP",
      },
      {
        type: "Video",
        owner: "UC San Diego",
        name: "Phone Book Data Structure",
        link: "https://www.coursera.org/lecture/data-structures-optimizing-performance/core-hash-tables-m7UuP",
      },
      {
        type: "Video",
        owner: "UC San Diego",
        name: "Julia's Diary",
        link: "https://www.coursera.org/lecture/data-structures/instant-uploads-and-storage-optimization-in-dropbox-DvaIb",
      },
      {
        type: "Video",
        owner: "UC San Diego",
        name: "Julia's Bank",
        link: "https://www.coursera.org/lecture/data-structures/distributed-hash-tables-tvH8H",
      },
    ],
  },
  {
    title: "Binary Search",
    content: [
      {
        type: "Video",
        owner: "Harvard CS50",
        name: "Binary Search",
        link: "https://www.youtube.com/watch?v=D5SrAga1pno",
      },
      {
        type: "Article",
        owner: "Khan Academy",
        name: "Binary Search",
        link: "https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search",
      },
      {
        type: "Article",
        owner: "TopCoder",
        name: "Binary Search",
        link: "https://www.topcoder.com/thrive/articles/Binary%20Search",
      },
      {
        type: "Article",
        owner: "LeetCode",
        name: "Powerful Ultimate Binary Search Template",
        link: "https://leetcode.com/discuss/general-discussion/786126/python-powerful-ultimate-binary-search-template-solved-many-problems",
      },
      {
        type: "Video",
        owner: "Michael Sambol",
        name: "Binary Search in 4 Minutes",
        link: "https://www.youtube.com/watch?v=fDKIpRe8GW4",
      },
    ],
  },
  {
    title: "Bitwise Operations",
    content: [
      {
        type: "Article",
        owner: "GitHub",
        name: "Bits Cheat Sheet",
        link: "https://github.com/jwasham/coding-interview-university/blob/main/extras/cheat%20sheets/bits-cheat-sheet.pdf",
      },
      {
        type: "Article",
        owner: "Wikipedia",
        name: "Word (Computer Architecture)",
        link: "https://en.wikipedia.org/wiki/Word_(computer_architecture)",
      },
      {
        type: "Video",
        owner: "Make School",
        name: "Bit Manipulation",
        link: "https://www.youtube.com/watch?v=7jkIUgLC29I",
      },
      {
        type: "Video",
        owner: "YouTube",
        name: "C Programming Tutorial: Bitwise Operators",
        link: "https://www.youtube.com/watch?v=d0AwjSpNXR0",
      },
      {
        type: "Article",
        owner: "Wikipedia",
        name: "Bit Manipulation",
        link: "https://en.wikipedia.org/wiki/Bit_manipulation",
      },
      {
        type: "Article",
        owner: "Wikipedia",
        name: "Bitwise Operation",
        link: "https://en.wikipedia.org/wiki/Bitwise_operation",
      },
      {
        type: "Article",
        owner: "Stanford",
        name: "Bit Twiddling Hacks",
        link: "https://graphics.stanford.edu/~seander/bithacks.html",
      },
      {
        type: "Article",
        owner: "Stephan Brumme",
        name: "The Bit Twiddler",
        link: "https://bits.stephan-brumme.com/",
      },
      {
        type: "Resource",
        owner: "Stephan Brumme",
        name: "Interactive Bit Manipulator",
        link: "https://bits.stephan-brumme.com/interactive.html",
      },
      {
        type: "Video",
        owner: "MIT 6.172",
        name: "Bit Hacks",
        link: "https://www.youtube.com/watch?v=ZusiKXcz_ac",
      },
    ],
  },
];

export function DataAlgo() {
  return (
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
          {tools.map((tool) => (
            <Tool
              name={tool.name}
              logo={tool.logo}
              link={tool.link}
              key={tool.name}
            />
          ))}
        </div>
      </div>
      <div className="section">
        <div className="section-header">
          <h2>Resources</h2>
        </div>
        <div className="resources-container">
          {resourceCollection.map((topic, index) => (
            <Collapsible
              title={topic.title}
              content={topic.content}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default DataAlgo;

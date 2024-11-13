import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import Education from "../components/Resume/Education";
import Experience from "../components/Resume/Experience";
import Skills from "../components/Resume/Skills";
import Courses from "../components/Resume/Courses";
import References from "../components/Resume/References";

import courses from "../data/resume/courses";
import degrees from "../data/resume/degrees";
import work from "../data/resume/work";
import { skills, categories } from "../data/resume/skills";

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Courses: () => <Courses data={courses} />,
  References: () => <References />,
};

const downloadFile = () => {
  const link = document.createElement("a");
  link.href = "/Resume.pdf"; // Path to your file in the public folder
  link.download = "Resume.pdf"; // The name of the file to download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link); // Clean up after download
};
const Resume = () => (
  <Main
    title="Resume"
    description="Aayush Dongol's Resume. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link to="resume">Resume</Link>
            <button
              style={{
                borderRadius: "20px",
                height: "50px",
                textAlign: "center",
                fontSize: "11px",
              }}
              onClick={downloadFile}
            >
              Download
            </button>
          </h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      <div>
        <div className="title">
          <h3 style={{
            textAlign:"center"
          }}>Summary</h3>
          <p>
            As a software developer, I am deeply fascinated by the potential of
            data analysis, artificial intelligence, and machine learning on the
            field of software’s. I have a strong desire to apply my skills
            within a large development team, eagerly tackling complex problems
            and consistently seeking ways to enhance user efficiency. Aspiring
            to learn about Data Analysis, Machine Learning and AI and develop
            modern systems that seamlessly integrate these technologies,
            creating intelligent and efficient solutions. I have 3 years of
            experience in the field of software development working in
            applications such as E-Learning platforms and other survey based
            applications and have done some internships in the field of data
            analysis. Additionally, I have a passion for fitness and regularly
            engage in gym activities to maintain a balanced lifestyle. I am also
            committed to social work, aiming to contribute positively to the
            community whenever possible.
          </p>
        </div>
      </div>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;

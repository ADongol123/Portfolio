import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";
import dayjs from "dayjs";
import Cell from "../components/Projects/Cell";
import data from "../data/projects";
import { FaArrowRightLong } from "react-icons/fa6";
const Projects = () => {
  const [repos, setRepos] = useState([]);
  const username = "ADongol123";
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <Main title="Projects" description="Learn about Aayush Dongol's projects.">
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2>
              <Link to="/projects">Projects</Link>
            </h2>
            <p>A selection of Projects</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "10px",
            }}
          >
            <a href="https://github.com/ADongol123" target="_blank">
              <button>Show All</button>
            </a>
          </div>
        </header>
        {repos?.map((project) => (
          <div className="cell-container">
            <article className="mini-post">
              <header>
                <h3>
                  <a href={project?.link}>{project?.name}</a>
                </h3>
                <time className="published">
                  {dayjs(data.pubDate).format("MMMM, YYYY")}
                </time>
              </header>
              <div className="description">
                <p>{data.desc}</p>
              </div>
            </article>
            {/* <FaArrowRightLong /> */}
          </div>
        ))}
      </article>
    </Main>
  );
};

export default Projects;

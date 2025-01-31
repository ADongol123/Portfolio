import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";
import dayjs from "dayjs";
import Cell from "../components/Projects/Cell";
import data from "../data/projects";
import { FaArrowRightLong } from "react-icons/fa6";
import { Profiledata } from "../data/projects/data";
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
  console.log(Profiledata);
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
      </article>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {Profiledata?.map((details) => (
          <div
            style={{
              display: "flex",
              backgroundColor: "white",
              padding: "20px",
              gap: "20px",
            }}
          >
            <div>
              <img
                style={{
                  height: "300px",
                  width: "300px",
                  borderRadius: "10%",
                }}
                src={details?.url}
                alt="Profile"
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <a
                  style={{ width: "100%" }}
                  href={details?.github}
                  target="_blank"
                >
                  <button style={{ width: "100%" }}>Code</button>
                </a>
                {details?.medium && (
                  <a
                    style={{ width: "100%" }}
                    href={details?.medium}
                    target="_blank"
                  >
                    <button style={{ width: "100%" }}>Medium</button>
                  </a>
                )}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                columnGap: "-100px !important",
              }}
            >
              <h1>{details?.title}</h1>
              {/* {details?.highlights?.map((subvalue) => ( */}
              <ul>
                {details?.description?.split("<br/>").map((line, index) => (
                  <li
                    key={index}
                    style={{
                      gap: "-100px ",
                    }}
                  >
                    {line}
                    <br />
                    <br />
                  </li>
                ))}
              </ul>

              {/* ))} */}
            </div>
          </div>
        ))}
      </div>
    </Main>
  );
};

export default Projects;

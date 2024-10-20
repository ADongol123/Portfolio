import React from "react";
import Main from "../layouts/Main";
import { Link } from "react-router-dom";
import Cell from "../components/Projects/Cell";
import data from "../data/projects";

const Blog = () => {
  return (
    <Main title="About" description="Learn about Aayush Dongol">
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2>
              <Link to="/blog">My Blogs</Link>
            </h2>
            <p>A selection of my blogs</p>
          </div>
        </header>
        {data.map((project) => (
          <Cell data={project} key={project.title} />
        ))}
      </article>
    </Main>
  );
};

export default Blog;

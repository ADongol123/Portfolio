import React, { useState, useEffect } from "react";
import Main from "../layouts/Main";
import { Link } from "react-router-dom";
import Cell from "../components/Projects/Cell";
import data from "../data/projects";
import Blog1 from "../images/blog_1.png";
import Blog2 from "../images/blog_2.jpg";
import Blog3 from "../images/blog_3.jpeg";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const images = [
    {
      id: 1,
      image: Blog1,
    },
    {
      id: 2,
      image: Blog2,
    },
    {
      id: 3,
      image: Blog3,
    },
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ayussh222dongol`
        );
        const data = await response.json();
        setBlogs(data.items);
      } catch (error) {
        console.error("Error fetching Medium feed:", error);
      }
    };

    fetchBlogs();
  }, []);

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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "10px",
            }}
          >
            <a href="https://medium.com/@ayussh222dongol"
            target="_blank"
            >
              <button>Show All</button>
            </a>
          </div>
        </header>
        {blogs?.map((project, index) => (
          <Cell data={project} key={index} images={images} index={index} />
        ))}
      </article>
    </Main>
  );
};

export default Blog;

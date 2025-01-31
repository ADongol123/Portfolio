import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import BlogImage from "../../images/blog_1.png";
const Cell = ({ data, images, index }) => (
  // <a href={data?.link} target='_blank'>
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a target="_blank" href={data.link}>{data?.title}</a>
        </h3>
        <time className="published">
          {dayjs(data.pubDate).format("MMMM, YYYY")}
        </time>
      </header>
      <a
        href={data.link}
        className="image"
        style={{ height: "300px", width: "100%", objectFit: "cover" }}
      >
        <img src={BlogImage} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
  // </a>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;

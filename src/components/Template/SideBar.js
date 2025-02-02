import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import ProfileImage from '../../images/profile.jpg';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={ProfileImage} alt="" />
      </Link>
      <header>
        <h2>Aayush Dongol</h2>
        <p>
          <a href="mailto:ayussh222dongol@gmail.com">ayussh222dongol@gmail.com</a>
        </p>
      </header>
    </section>
{/* 
    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Aayush.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section> */}

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;

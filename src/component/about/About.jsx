import React from 'react'
import "./about.css";
import skutan from "../../img/skutan.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"


const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src={skutan}
            alt=""
            className="about-image"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me - From Customer Success to Coding</h1>
        <p className="about-sub">
        </p>
        <p className="about-description">
          After a couple of years at on the business/Customer Success side at two Saas companies in San Francisco I decided it was time to jump to the product side and I started learning programing on the side. 4 months ago I took the leap and enrolled in a bootcamp and I have never regretted it. I now spend my time learning and building web apps.
        </p>
        <p className="about-description-platforms">
         Find me on the platforms below
        </p>
        <div className="about-social-container">
          <a href="https://github.com/tagilv" className="about-social github"
          >
          <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/viktortagil/" className="about-social linkedin"
          >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.instagram.com/viktortagil/" className="about-social instagram"
          >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </div>
  )
}

// note added

export default About

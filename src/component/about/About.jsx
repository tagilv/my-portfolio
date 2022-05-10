import React from 'react'
import "./about.css"
import skutan from "../../img/skutan.png"

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
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          Add something here that is rather long but not too long here to make this look good
        </p>
        <p className="about-description">
          This is where a longer desciption goes This is where a longer desciption goes This is where a longer desciption goes This is where a longer desciption goes This is where a longer desciption goes This is where a longer desciption goes This is where a longer desciption goes This is where a longer desciption goes This is where a longer desciption goes
        </p>
      </div>
    </div>
  )
}

export default About

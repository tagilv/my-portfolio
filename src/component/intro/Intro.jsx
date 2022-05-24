import React from 'react'
import "./intro.css"
import profile3 from "../../img/profile3.png"

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-intro">Hello, my name is</h2>
          <h1 className="intro-name"> Viktor Tägil </h1>
          <div className="intro-title">
            {/* <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">Paid Social Expert</div>
              <div className="intro-title-item">Traveller</div>
              <div className="intro-title-item">Language Lover</div>
            </div> */}
          </div>
          <p className="intro-description">
            I am a Web developer based in Berlin and my main languages are Ruby on Rails, JS and React. I build websites for myself and for smaller businesses. This page was built with React.
          </p>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src={profile3} alt="" className="intro-img"/>
      </div>
    </div>
  )
}

export default Intro

import React from 'react'
import "./intro.css"
import profile from "../../img/profile.png"
import profile2 from "../../img/profile2.png"
import profile3 from "../../img/profile3.png"

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-name"> Viktor Tägil </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Paid Social Expert</div>
              <div className="i-title-item">Traveller</div>
              <div className="i-title-item">Language Lover</div>
            </div>
          </div>
          <div>
            I am building websites for myself and smaller businesses.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={profile3} alt="" className="i-img"/>
      </div>
    </div>
  )
}

export default Intro

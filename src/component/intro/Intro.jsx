import React from 'react'
import "./intro.css"
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
          <p>
            I am building websites for myself and smaller businesses.
          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
               id="vector_3"
               d="M9 37.5H60"
               stroke-width="3"
               stroke-miterlimit="10"
               stroke-linecap="round"
               stroke-linejoin="round"
              />
            </g>
            <path
              id="vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          <g id="Group_2">
            <path
              id="vector_5"
              d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={profile3} alt="" className="i-img"/>
      </div>
    </div>
  )
}

export default Intro

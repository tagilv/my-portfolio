import React from 'react'
import "./contact.css"
import email from "../../img/email.svg"
import { useRef, useState, useContext } from "react"
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faContactCard } from '@fortawesome/free-solid-svg-icons';
// <FontAwesomeIcon icon={faContactCard}></FontAwesomeIcon>

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_y9rl4od',
        'template_l27maf9',
        formRef.current,
        'fFpYdFaUonutCpLqj'
      )
      .then((result) => {
        console.log(result.text);
        setDone(true)
      },
      (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
          <div className="contact-left">
            <h1 className="contact-title">Contact me</h1>
            <div className="contact-info">
                <div className="contact-info-item">
                  <img
                    src={email}
                    alt="viktor.tagil@gmail.com"
                    className="contact-icon"
                  />
                </div>
            </div>
          </div>
          <div className="contact-right">
            <p className="contact-description">Message me belowMessage me belowMessage me belowMessage me belowMessage me belowMessage me belowMessage me below
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input style={{backgroundColor: darkMode && "rgb(51,51,51)"}}type="text" placeholder="Name" name="user_name"></input>
              <input style={{backgroundColor: darkMode && "rgb(51,51,51)"}}type="text" placeholder="Subject" name="user_subject"></input>
              <input style={{backgroundColor: darkMode && "rgb(51,51,51)"}}type="text" placeholder="Email" name="user_email"></input>
              <textarea style={{backgroundColor: darkMode && "rgb(51,51,51)"}}rows="5" placeholder="Message" name="message"/>
              <button>Submit</button>
              {done && "Thank you for your message"}
            </form>
          </div>
      </div>
    </div>
  )
}

export default Contact

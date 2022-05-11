import React from 'react'
import "./contact.css"
import email from "../../img/email.svg"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faContactCard } from '@fortawesome/free-solid-svg-icons';
// <FontAwesomeIcon icon={faContactCard}></FontAwesomeIcon>

function Contact() {
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
          <div className="contact-left">
            <h1 className="contact-title">Contact me here or send an email to viktor.tagil@gmail.com</h1>
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
            <p className="contact-description">Message me below
            </p>
            <form>
              <input type="text" placeholder="Name" name="user_name"></input>
              <input type="text" placeholder="Subject" name="user_subject"></input>
              <input type="text" placeholder="Email" name="user_email"></input>
              <textarea rows="5" placeholder="Message" name="message"/>
              <button>Submit</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Contact

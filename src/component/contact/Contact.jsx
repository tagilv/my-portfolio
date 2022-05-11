import React from 'react'
import "./contact.css"
import email from "../../img/email.svg"
import { useRef, useState} from "react"
import emailjs from '@emailjs/browser';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faContactCard } from '@fortawesome/free-solid-svg-icons';
// <FontAwesomeIcon icon={faContactCard}></FontAwesomeIcon>

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

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
            <p className="contact-description">Message me belowMessage me belowMessage me belowMessage me belowMessage me belowMessage me belowMessage me below
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" name="user_name"></input>
              <input type="text" placeholder="Subject" name="user_subject"></input>
              <input type="text" placeholder="Email" name="user_email"></input>
              <textarea rows="5" placeholder="Message" name="message"/>
              <button>Submit</button>
              {done && "Thank you for your message"}
            </form>
          </div>
      </div>
    </div>
  )
}

export default Contact

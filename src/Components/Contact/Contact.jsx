import React, { useRef, useState } from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';
// import { useRef } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_t0rrhsw', 'template_gltps8u', form.current, 'sKzqakygd1hvEYeDM')
          .then((result) => {
              console.log(result.text);
              setDone(true);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span  style={{color: darkMode? 'white': ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blurl" style={{background: "ABF1FF94"}}>
                    
                </div>
            </div>
        </div>

          <div className="c-right">

            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='user_name' className='form-control user' placeholder='Name' />
                <input type='email' name='user_email' className='form-control user' placeholder='Email' />
                <textarea name='message' className='form-control user' placeholder='Message' />
                <input type='submit' value='Send' className='button' />
                <span>{done && "Thanks for Contacting me!"}</span>

                <div className="blur c-blurl" style={{background: "var(--purple)"}}>

                </div>
            </form>
          </div>
    </div>
  )
}

export default Contact

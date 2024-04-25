import React, { useRef } from 'react';
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_01w8dly', 
    'template_4ylmr2m', 
    form.current, 
    'dYy9-PfHJ5uiBBuWJ')
      .then(
        result => console.log(result.text),
        error => console.log(error.text)
      );
  };
  return (
    <section id='contact'>
      <div className='page'>
      <h3>Get In Touch</h3>
      <h2>Contact Me</h2>

      <div className="container contact_container">

        <div className="contact_options">
          <article className='contact_option'>
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>minji.k.suh@gmail.com</h5>
            <a href= "mailto:minji.k.suh@gmail.com">Send a message</a>
          </article>

          <article className='contact_option'>
            <AiOutlinePhone />
            <h4>Phone</h4>
            <h5>(404) 642-0400</h5>
            <a href="tel:404-642-0400">Call Me</a>
          </article>
        </div>
        <form ref ={form} onSubmit = {sendEmail}>
          <input type="text" name="name" placeholder = "Your Full Name" required />
          <input type="email" name = "email" placeholder = "Your Email" required />
          <textarea name = "message" rows ="7" placeholder = "Your Message" required/>
          <button type = 'submit' className = 'btn btn-primary'>Send Message</button>
        </form>
      </div>
      </div>
    </section>
  )
}

export default Contact
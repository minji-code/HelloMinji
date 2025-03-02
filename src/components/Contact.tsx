import React, { useRef, FormEvent } from 'react';
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai';
import emailjs from '@emailjs/browser';
// import './Contact.css';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        'service_01w8dly', 
        'template_4ylmr2m', 
        form.current, 
        'dYy9-PfHJ5uiBBuWJ'
      )
        .then(
          result => console.log(result.text),
          error => console.log(error.text)
        );
    }
  };

  return (
    <div className='page justify-center' id='contact'>
      <div className='header'>
        <h3>Get In Touch</h3>
        <h2>Contact Me</h2>
      </div>

      <div className='flex justify-center items-center gap-24'>
        <div className='flex flex-col gap-3'>
          <div className='contact_option'>
              <AiOutlineMail />
              <h4>Email</h4>
              <h5>minji.k.suh@gmail.com</h5>
              <a className='text-[var(--color-dark)]' href="mailto:minji.k.suh@gmail.com">Send a message</a>
          </div>
          <div className='contact_option'>
              <AiOutlinePhone />
              <h4>Phone</h4>
              <h5>(404) 642-0400</h5>
              <a className='text-[var(--color-dark)]' href="tel:404-642-0400">Call Me</a>
          </div>
        </div>
        <form className='flex flex-col gap-4 w-[40vw]' ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows={7} placeholder="Your Message" required/>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </div>
  )
}

export default Contact 
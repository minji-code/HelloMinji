import React from 'react'
import cv from '../assets/resume.pdf'
import ME from '../assets/profilepic.png'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import './Home.css'

const Home = () => {
  return (
    <section className = 'home'id='home'>
          <h5>Hello, I'm</h5>
          <h1>Minji Kim</h1>
          <h5>Fullstack Developer</h5> 

        <div className="container home_container">

          <div className="btns">
            <a href ={cv} download className='btn'>Download Resume</a>
            <a href = "#contact" className='btn btn-primary'>Contact Me</a>
          </div>

          <div className="socials">
            <a href = "https://www.linkedin.com/in/alswl92" target = "_blank" rel="noopener noreferrer"><BsLinkedin/></a>
            <a href = "http://github.com/alswl92" target = "_blank" rel="noopener noreferrer"><BsGithub/></a>
          </div>

          <div className="me">
            <div className="me_image">
              <img src ={ME} alt= "me" />
            </div>
          </div>

          <h5 className='scroll_down'>Scroll Down</h5>
          
          </div>
        
    </section>
  )
}

export default Home
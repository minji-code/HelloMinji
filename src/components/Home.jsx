import React from 'react'
import cv from '../assets/Minji_K_Suh_Resume.pdf'
import ME from '../assets/profilepic.png'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import './Home.css'

const Home = () => {
  return ( 
    <section className = 'home'id='home'>
      <div className='page'>
          <h3>Hello, I'm</h3>
          <h1>Minji Kim Suh</h1>
          <h3>Software Engineer</h3> 

        <div className="container home_container">

          <div className="btns">
            <a href ={cv} download className='btn'>Download Resume</a>
            <a href = "#contact" className='btn btn-primary'>Contact Me</a>
          </div>

          <div className="socials">
            <a href = "https://www.linkedin.com/in/minji-k-suh" target = "_blank" rel="noopener noreferrer"><BsLinkedin/></a>
            <a href = "http://github.com/minji-code" target = "_blank" rel="noopener noreferrer"><BsGithub/></a>
          </div>

          <div className="me">
            <div className="me_image">
              <img src ={ME} alt= "me" />
            </div>
          </div>

          <h5 className='scroll_down'>Scroll Down</h5>
          
        </div>
      </div>
        
    </section>
  )
}

export default Home
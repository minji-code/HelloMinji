import React from 'react'
import cv from '../assets/Minji_K_Suh_Resume.pdf'
import ME from '../assets/profilepic.png'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Home: React.FC = () => {
  return ( 
    <div className='page justify-center' id='home'>
      <div className="header">
        <div>Hello, I'm</div>
        <h1>Minji Kim Suh</h1>
        <h3>Software Engineer</h3> 
      </div>
      <div className='flex justify-center gap-4 p-8'>
        <a href={cv} download className="btn">Download Resume</a>
        <a href="#contact" className="btn btn-primary">Contact Me</a>
      </div>
      <div className='flex justify-around items-center p-8'>
        <div className='flex flex-col text-2xl gap-4'>
          <a href="https://www.linkedin.com/in/minji-k-suh" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
          </a>
          <a href="http://github.com/minji-code" target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </a>
        </div>
        <div>
          <div className="me">
            <div className="me_image">
              <img src={ME} alt="me" />
            </div>
          </div>
        </div>
        <h5 className='rotate-90 font-thin self-center text-[1.2rem]'>Scroll Down</h5>
      </div>
    </div>
  )
}

export default Home 
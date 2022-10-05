import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer_socials">
        <a href = "http://linkedin.com" target = "_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href = "http://github.com" target = "_blank" rel="noopener noreferrer"><BsGithub/></a>
      </div>

      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="/#project">Project</a></li>
        <li><a href="/#experience">Experience</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </footer>
  )
}

export default Footer
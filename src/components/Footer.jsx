import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer_socials">
        <a href = "https://www.linkedin.com/in/alswl92/" target = "_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href = "http://github.com/alswl92" target = "_blank" rel="noopener noreferrer"><BsGithub/></a>
      </div>

      <ul className='permalinks'>
        <li>Minji Kim</li>
      </ul>
    </footer>
  )
}

export default Footer
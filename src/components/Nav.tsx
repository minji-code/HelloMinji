import React from 'react'
import {Link} from 'react-scroll'
import {AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineMail} from 'react-icons/ai'
import {BsFilePerson} from 'react-icons/bs'

const Nav: React.FC = () => {
  return (
    <nav>
      <Link to='home' spy={true} smooth={true} offset={-80} duration={500}><AiOutlineHome /></Link>
      <Link to='project' spy={true} smooth={true} offset={-30} duration={500}><AiOutlineFundProjectionScreen /></Link>
      <Link to='experience' spy={true} smooth={true} offset={-30} duration={500}><BsFilePerson /></Link>
      <Link to='contact' spy={true} smooth={true} offset={-30} duration={500}><AiOutlineMail /></Link>
    </nav>
  )
}

export default Nav 
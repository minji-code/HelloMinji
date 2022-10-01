import React from 'react'
import {Link} from 'react-scroll'
import {AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineMail} from 'react-icons/ai'
import {BsFilePerson} from 'react-icons/bs'
import './Nav.css'

const Nav = () => {

  return (
    <nav>
      <Link to= 'home' spy={true} smooth={true} offset={50} duration={50} ><AiOutlineHome /></Link>
      <Link to = 'project' spy={true} smooth={true} offset={5} duration={50}><AiOutlineFundProjectionScreen /></Link>
      <Link to ='experience'spy={true} smooth={true} offset={5} duration={50}><BsFilePerson /></Link>
      <Link to='contact'spy={true} smooth={true} offset={5} duration={50} ><AiOutlineMail /></Link>
    </nav>
  )
}

export default Nav
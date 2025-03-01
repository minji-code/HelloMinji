import React from 'react'
import cv from '../assets/Minji_K_Suh_Resume.pdf' 
import{DiCss3, DiJavascript, DiReact, DiMysql,DiLinux, DiGitBranch } from 'react-icons/di'
import {FaPython, FaLaravel,FaTerminal,FaAws} from 'react-icons/fa'
import './Experience.css'

const Experience: React.FC = () => {
  return (
    <section id='experience'>
      <div className='page'>
        <h3>What I Can Do</h3>
        <h2>Experience</h2>
        <div className="experience_btn">
          <a href={cv} download className='btn'>Download Resume</a>
        </div>
        <div className="container experience_container">
          <div className="experience_content">
            <div className="item">
              <DiJavascript className='icon'/>
              <h4 className='hide'>JavaScript | jQuery</h4>
            </div>

            <div className="item">
              <FaLaravel className='icon'/>
              <h4 className='hide'>Laravel | PHP</h4>
            </div>

            <div className="item">
              <FaPython className='icon'/>
              <h4 className='hide'>Python</h4>
            </div>

            <div className="item">
              <DiCss3 className='icon'/>
              <h4 className='hide'>HTML | CSS</h4>
            </div>

            <div className="item">
              <FaTerminal className='icon'/>
              <h4 className='hide'>C++ | Java</h4>
            </div>

            <div className="item">
              <DiReact className='icon'/>
              <h4 className='hide'>React and React-Native</h4>
            </div>

            <div className="item">
              <DiLinux className='icon'/>
              <h4 className='hide'>Linux</h4>
            </div>

            <div className="item">
              <DiGitBranch className='icon'/>
              <h4 className='hide'>Git | Github | Version Control</h4>
            </div>

            <div className="item">
              <DiMysql className='icon'/>
              <h4 className='hide'>MySql</h4>
            </div>

            <div className="item">
              <FaAws className='icon'/>
              <h4 className='hide'>AWS S3</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 
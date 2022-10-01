import React from 'react'
import cv from '../assets/resume.pdf'
import './Experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Working Experience</h5>
      <h2>Short Resume</h2>
      <div className="experience_btn">
      <a href ={cv} download className='btn'>Download CV</a>
      </div>
      
      <div className="container experience_container">

        <div className="experience_skills">
            <div className="skill">
              <div className='skill_title'>
              <h3>Backend </h3>
                <h3>Development</h3>
              </div>
                <ul className='skill_list'>
                  <li>Python</li>
                  <li>Java</li>
                  <li>OOP</li>
                  <li>SQL</li>
                  <li>Git</li>
                </ul>
            </div>
            <div className="skill">
            <div className='skill_title'>
              <h3>Frontend </h3>
              <h3> Development</h3>
              </div>
                <ul className='skill_list'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Java Script</li>
                  <li>React</li>
                  <li>React Native</li>
                </ul>
            </div>
            <div className="skill">
            <div className='skill_title'>
              <h3>Design </h3> 
                <h3>Tool</h3>
              </div>
                <ul className='skill_list'>
                  <li>Figma</li>
                  <li>Canva</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe Premiere</li>
                  <li>Storyline 360</li>
                </ul>
            </div>
        </div>

        <div className="timeline">

            <div className="wrap tl_right">
            <div className="tl_content">
              <h4>2020-2022</h4>
              <h3><b>OneTrust, LLC</b></h3>
              <h4>Instructional Design Consultant</h4>
              <h5>Developed and manage instructional materials. 
                Planned and manage meetings with clients and collaborations 
                with multiple teams across. </h5>
            </div>
            </div>

            <div className="wrap tl_left">
            <div className="tl_content">
              <h4>2019</h4>
              <h3><b>Georgia Institue of Technology</b></h3>
              <h5>Bachelor of Science in Industrial Engineering </h5>
            </div>
            </div>

            <div className="wrap tl_right">
            <div className="tl_content">
              <h4>2013-2017</h4>
              <h3><b>JSW Law Group</b></h3>
              <h4>Paralegal</h4>
              <h5>Consulted clients starting from intake to settlement 
                of their personal injuryt cases.   </h5>
            </div>
            </div>
        </div>
        
        </div>

    </section>
  )
}

export default Experience
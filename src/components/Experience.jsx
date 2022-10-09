import React from 'react'
import cv from '../assets/resume.pdf'
import{DiHtml5, DiCss3, DiJavascript, DiReact, DiGithubBadge, DiNodejs} from 'react-icons/di'
import {FaPython, FaJava, FaFigma} from 'react-icons/fa'
import {SiCanva, SiAdobeillustrator,} from 'react-icons/si'
import './Experience.css'
import {Navigation} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Experience = () => {

  return (
    <section id='experience'>
      <h5>What I Can Do</h5>
      <h2>Experience</h2>
      <div className="experience_btn">
      <a href ={cv} download className='btn'>Download Resume</a>
      </div>
      <div className="container experience_container">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <h3 className='l_title'>Frontend Development</h3>
          <div className="list frontend">
            <div className="item">
            <DiHtml5  className='icon html'/>
            <h4>HTML</h4>
            </div>
            <div className="item">
            <DiCss3  className = 'icon css'/>
            <h4>CSS</h4>
            </div>
            <div className="item">
            <DiJavascript  className = 'icon js'/>
            <h4>JavaScript</h4>
            </div>
            <div className="item">
            <DiReact className = 'icon r'/>
            <h4>React</h4>
            </div>         
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className='l_title' >Backend Development</h3>
          <div className="list backend">
            <div className="item">
            <FaPython className = 'icon python'/>
            <h4>Python</h4>
            </div>
            <div className="item">
            <FaJava className = 'icon java'/>
            <h4>Java</h4>
            </div>
            <div className="item">
            <DiNodejs className='icon nodejs'/>
            <h4>Node.js</h4>
            </div>
            <div className="item">
            <DiGithubBadge className='icon git'/>
            <h4>Git</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
        <h3 className='l_title'>Design Tool</h3>
          <div className="list design">
            <div className="item">
            <FaFigma className = 'icon figma'/>
            <h4>Figma</h4>
            </div>
            <div className="item">
            <SiCanva className = 'icon canva'/>
            <h4>Canva</h4>
            </div>
            <div className="item">
            <SiAdobeillustrator  className='icon illustrator'/>
            <h4>Illustrator</h4>
            </div>
            <div className="item">
            <div className="icon sl">sl</div>
            <h4>Storyline360</h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>


    </section>
  )
}

export default Experience
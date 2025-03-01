import React from 'react'
import cv from '../assets/Minji_K_Suh_Resume.pdf' 
import{DiCss3, DiJavascript, DiReact, DiMysql,DiLinux, DiGitBranch } from 'react-icons/di'
import {FaPython, FaLaravel,FaTerminal,FaAws} from 'react-icons/fa'

const Experience: React.FC = () => {

  const expList = [
    {
      icon: DiJavascript,
      title: 'JavaScript | jQuery'
    },
    {
      icon: FaLaravel,
      title: 'Laravel | PHP'
    },
    {
      icon: FaPython,
      title: 'Python'
    },
    {
      icon: DiCss3,
      title: 'HTML | CSS'
    },
    {
      icon: FaTerminal,
      title: 'C++ | Java'
    },
    {
      icon: DiReact,
      title: 'React and React-Native'
    },
    {
      icon: DiLinux,
      title: 'Linux'
    },
    {
      icon: DiGitBranch,
      title: 'Git | Github | Version Control'
    },
    {
      icon: DiMysql,
      title: 'MySql'
    },
    {
      icon: FaAws,
      title: 'AWS S3'
    }
  ]

  return (
    <div className='page justify-center items-center' id='experience'>
      <div className='header'>
        <h3>What I Can Do</h3>
        <h2>Experience</h2>
      </div>

      <div className="flex justify-center pb-8">
        <a href={cv} download className='btn'>Download Resume</a>
      </div>

      <div className='flex flex-col'>
        <div>
          FrontEnd
        </div>
        <div>
          BackEnd
        </div>
        <div>
          Other
        </div>

      </div>

      {/* <div className="flex flex-wrap h-[50vh] w-[80vw] rounded-2xl mb-12 bg-[var(--color-light)] p-20 gap-20 overflow-hidden">
        {expList.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <div key={index} className="expItem">
              <Icon className='rounded-2xl p-4 text-[max(7rem)]'/>
              <h4 className=''>{exp.title}</h4>
            </div>
          );
        })}
      </div> */}
    </div>
  )
}

export default Experience 

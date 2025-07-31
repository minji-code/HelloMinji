import React from 'react'
import cv from '../assets/Minji_K_Suh_Resume.pdf' 
import {FaAws} from 'react-icons/fa'
import { TbApi } from "react-icons/tb";
import { SiNextdotjs, SiTailwindcss, SiReact, SiTypescript, SiJavascript,SiPython, SiLaravel,SiPhp,SiNodedotjs,SiCplusplus,SiMysql,SiPostgresql,SiGit,SiLinux} from "react-icons/si";


const Skills: React.FC = () => {

  const skillList= [
    {
      category:'Frontend ',
      icon: SiReact,
      title: 'React'
    },
    {
      category:'Frontend ',
      icon: SiNextdotjs,
      title: 'Next.js'
    },
    {
      category:'Frontend ',
      icon: SiTailwindcss,
      title: 'Tailwind CSS'
    },
    {
      category:'Frontend ',
      icon: SiTypescript, 
      title: 'Typescript'
    },
    {
      category:'Frontend ',
      icon: SiJavascript ,
      title: 'JavaScript | jQuery'
    },
    {
      category:'Backend ',
      icon: SiPython,
      title: 'Python'
    },
    {
      category:'Backend ',
      icon: SiLaravel,
      title: 'Laravel'
    },
    {
      category:'Backend ',
      icon: SiPhp,
      title: 'PHP'
    },
    {
      category:'Backend ',
      icon: SiNodedotjs,
      title:'Node.js'
    },
    {
      category:'Backend ',
      icon: TbApi,
      title:'API'
    },
    {
      category:'Backend ',
      icon: SiCplusplus,
      title:'C++'
    },
    {
      category:'Database',
      icon: SiMysql,
      title: 'MySql'
    },
    {
      category:'Database',
      icon:SiPostgresql,
      title:'PostgreSql'
    },
    {
      category:'Tool & Others',
      icon: SiGit ,
      title: 'Git'
    },
    {
      category:'Tool & Others',
      icon:SiLinux ,
      title: 'Linux'
    },
    {
      category:'Tool & Others',
      icon: FaAws,
      title: 'AWS'
    },
  ]

  return (
    <div className='page justify-center items-center gap-10' id='skills'>
      <div className='header'>
        <h3>What I Can Do</h3>
        <h2>Skills</h2>
      </div>

      <div className='flex flex-wrap gap-8 justify-center'>
        {Array.from(new Set(skillList.map(skill => skill.category))).map((category) => (
          <div key={category} className='bg-[var(--color-light)] p-6 rounded-lg w-60 shadow-xl'>
            <h3 className='font-semibold mb-4'>{category}</h3>
            <hr className='border-t-2 border-black mb-4' />
            <div className='flex flex-col gap-4'>
              {skillList
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <div key={index} className='flex items-center gap-3 p-3'>
                    {skill.icon && <skill.icon className='text-2xl' />}
                    <span>{skill.title}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills 

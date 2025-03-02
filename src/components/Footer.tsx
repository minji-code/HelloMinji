import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Footer: React.FC = () => {
  return (
    <footer className='bg-[var(--color-accentB)] py-12 mt-32 w-full'>
      <div className="flex justify-center gap-8 m-8">
        <a className='footer_socials' href="https://www.linkedin.com/in/minji-k-suh" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a className='footer_socials' href="http://github.com/minji-code" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
      </div>

      <div className='header mb-16'>
        <h3>Minji Kim Suh</h3>
        <h4>Software Engineer</h4>
      </div>
    </footer>
  )
}

export default Footer 
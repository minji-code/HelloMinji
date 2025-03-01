import React from 'react'
import IMG1 from '../assets/project1.png'
import IMG2 from '../assets/project2.png'
import IMG3 from '../assets/project3.png'
import IMG4 from '../assets/project4.png'
import IMG5 from '../assets/project5.png'
import IMG6 from '../assets/project6.png'

const Project: React.FC = () => {

  const projectList = [
    {
      image: IMG6,
      alt: 'moviesearch',
      title: 'ReactNative - MovieSearch',
      link: "https://github.com/minji-code/MovieDataBase_mobile",
      demo: ""
    },
    {
      image: IMG5,
      alt: 'icecream_website',
      title: 'IceCream Ecommerce App',
      link: "https://github.com/minji-code/IceCreamScoop",
      demo: "https://minji-code.github.io/IceCreamScoop/"
    },
    {
      image: IMG3,
      alt: 'memorygame',
      title: 'Memory Game',
      link: "https://github.com/minji-code/Memory_Game",
      demo: "https://minji-code.github.io/Memory_Game/"
    },
    {
      image: IMG2,
      alt: 'weatherapp',
      title: 'Weather Search Application',
      link: "https://github.com/minji-code/Weather_App",
      demo: "https://minji-code.github.io/Weather_App/"
    },
    {
      image: IMG4,
      alt: 'CRUDapp',
      title: 'Contact CRUD application',
      link: "https://github.com/minji-code/contactlist",
      backendLink: "https://github.com/minji-code/express"
    },
    {
      image: IMG1,
      alt: 'calculatorapp',
      title: 'Calculator Web Application',
      link: "https://github.com/minji-code/MyCalculator",
      demo: "https://minji-code.github.io/MyCalculator/"
    }
  ]
  return (
    <div className='page justify-center' id='project'>
      <div className='flex flex-col items-center'>
        <h3>My Recent Work</h3>
        <h2>Projects</h2>
      </div>

      <div className='flex flex-wrap gap-16 justify-center'>
        {projectList.map((project, index) => (
          <article key={index} className='bg-[var(--color-accentA)] rounded-lg relative max-w-[315px] min-w-[270px]'>
            <div className="bg-[var(--color-light)] p-[1.3rem] rounded-lg text-[var(--color-dark)] relative left-[1rem] bottom-[1rem]">
              <div className="w-full h-[max(10rem)] rounded-lg overflow-hidden">
                <img src={project.image} alt={project.alt} />
              </div>
              <h4 className='p-2'>{project.title}</h4>
              <div className='flex gap-2'>
                {project.backendLink ? (
                  <>
                    <a href={project.link} className='btn' target='_blank' rel="noopener noreferrer">FrontEnd</a>
                    <a href={project.backendLink} className='btn' target='_blank' rel="noopener noreferrer">BackEnd</a>
                  </>
                ) : (
                  <>
                    <a href={project.link} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                    {project.demo && (
                      <a href={project.demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                    )}
                  </>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Project 
import React from 'react'
import './Project.css'
import ComingSoon from '../assets/ComingSoon.png'
import IMG1 from '../assets/project1.png'


const Project = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project_container">

        <article className='project_item'>
          <div className="project_item_wrap">
            <div className="project_item_image">
                <img src = {IMG1} alt=''/>
            </div>
            <h4>Calculator Web Application</h4>
            <div className='project_btn'>
              <a href='https://github.com/alswl92/MyCalculator' className='btn' target= '_blank' rel="noopener noreferrer">Github</a>
              <a href = 'https://alswl92.github.io/MyCalculator/' className='btn btn-primary' target= '_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
          </article>

          <article className='project_item'>
          <div className="project_item_wrap">
            <div className="project_item_image">
                <img src = {ComingSoon} alt=''/>
            </div>
            <h4>project title</h4>
            <div className='project_btn'>
              <a href='https://github.com/alswl92/' className='btn' target= '_blank' rel="noopener noreferrer">Github</a>
              <a href = 'https://github.com/alswl92/' className='btn btn-primary' target= '_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
          </article>

          <article className='project_item'>
          <div className="project_item_wrap">
            <div className="project_item_image">
                <img src = {ComingSoon} alt=''/>
            </div>
            <h4>Coming Soon...</h4>
            <div className='project_btn'>
              <a href='https://github.com/alswl92/' className='btn' target= '_blank' rel="noopener noreferrer">Github</a>
              <a href = 'https://github.com/alswl92/' className='btn btn-primary' target= '_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
          </article>
          
        

      </div>
    </section>
  )
}

export default Project
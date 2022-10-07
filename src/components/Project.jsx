import React from 'react'
import './Project.css'
import IMG1 from '../assets/project1.png'
import IMG2 from '../assets/project2.png'


const Project = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project_container">

      <article className='project_item'>
          <div className="project_item_wrap">
            <div className="project_item_image">
                <img src = {IMG2}></img>
            </div>
            <h4 className='project_description'>Weather Search Application</h4>
            <div className='project_btn'>
              <a href='https://github.com/alswl92/Weather_App' className='btn' target= '_blank' rel="noopener noreferrer">Github</a>
              <a href = 'https://alswl92.github.io/Weather_App/' className='btn btn-primary' target= '_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
          </article>

        <article className='project_item'>
          <div className="project_item_wrap">
            <div className="project_item_image">
                <img src = {IMG1} alt=''/>
            </div>
            <h4 className='project_description'>Calculator Web Application</h4>
            <div className='project_btn'>
              <a href='https://github.com/alswl92/MyCalculator' className='btn' target= '_blank' rel="noopener noreferrer">Github</a>
              <a href = 'https://alswl92.github.io/MyCalculator/' className='btn btn-primary' target= '_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
          </article>

          <article className='project_item'>
          <div className="project_item_wrap">
            <div className="project_item_comingsoon">
                Something Exciting
            </div>
            <h4 className='project_description'>Coming Soon...</h4>
            <div className='project_btn'>
              <a href='https://github.com/alswl92/' className='btn' target= '_blank' rel="noopener noreferrer">Github</a>
              <a href = 'https://github.com/alswl92/' className='btn btn-primary' target= '_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
          </article>

          <article className='project_item'>
          <div className="project_item_wrap">
            <div className="project_item_comingsoon">
                Something Exciting
            </div>
            <h4 className='project_description'>Coming Soon...</h4>
            <div className='project_btn'>
              <a href='https://github.com/alswl92/' className='btn' target= '_blank' rel="noopener noreferrer">Github</a>
              <a href = 'https://github.com/alswl92/' className='btn btn-primary' target= '_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
          </article>

          <article className='project_item'>
          <div className="project_item_wrap">
            <div className="project_item_comingsoon">
                Something Exciting
            </div>
            <h4 className='project_description'>Coming Soon...</h4>
            <div className='project_btn'>
              <a href='https://github.com/alswl92/' className='btn' target= '_blank' rel="noopener noreferrer">Github</a>
              <a href = 'https://github.com/alswl92/' className='btn btn-primary' target= '_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
          </article>

          <article className='project_item'>
          <div className="project_item_wrap">
            <div className="project_item_comingsoon">
                Something Exciting
            </div>
            <h4 className='project_description'>Coming Soon...</h4>
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
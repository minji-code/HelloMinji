import React from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import Project from './components/Project'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'

const App: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <Home />
      <Nav />
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App 
import React from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import Project from './components/Project'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <Home />
      <Nav />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App 
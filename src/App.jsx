import React from 'react'
import Navbar from './sections/navbar/Navbar'
import Background from '../src/assets/images/background.svg'
import Banner from './sections/banner/Banner'
import About from './sections/about/About'
import Skills from './sections/skills/skills'
import Projects from './sections/projects/Projects'

const App = () => {
  return (
    <>
    <section>
        <div className="container" style={{backgroundImage: `url(${Background})`}}>
            <Navbar/>
            <Banner/>
            <About/>
            <Skills/>
            <Projects/>
        </div>
    </section>
    </>
  )
}

export default App
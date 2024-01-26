import React from 'react'
import Navbar from './sections/navbar/Navbar'
import Background from '../src/assets/images/background.svg'
import Banner from './sections/banner/Banner'
import About from './sections/about/About'
import Skill from './sections/skill/Skill'
import Projects from './sections/projects/Projects'

const App = () => {
  return (
    <>
    <section>
        <div className="container" style={{backgroundImage: `url(${Background})`}}>
            <Navbar/>
            <Banner/>
            <About/>
            <Skill/>
            <Projects/>
        </div>
    </section>
    </>
  )
}

export default App
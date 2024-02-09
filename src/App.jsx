import React, { useEffect, useState } from 'react'
import Navbar from './sections/navbar/Navbar'
import Background from '../src/assets/images/background.svg'
import Banner from './sections/banner/Banner'
import About from './sections/about/About'
import Skill from './sections/skill/Skill'
import Projects from './sections/projects/Projects'
import Contact from './sections/contacts/Contact'
import Education from './sections/education/Education'
import Footer from './sections/footer/Footer'
import { FaAngleUp } from "react-icons/fa6";

const App = () => {
  let [isShow, setIsShow] = useState(false)
  let handleTop = ()=>{
    window.scrollTo({top: 0, left: 0, behavior:'smooth'})
  }
  let scrollTop =()=>{
    let scrollToHidden = 250;
    let scrollCondition = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollCondition > scrollToHidden) {
      setIsShow(true)
    }else{
      setIsShow(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', scrollTop);
    return ()=> window.removeEventListener('scroll', scrollTop)
  },[])
  return (
    <>
    <section>
        <div className="container" style={{backgroundImage: `url(${Background})`}}>
            <Navbar/>
            <Banner/>
            <About/>
            <Skill/>
            <Projects/>
            <Education/>
            <Contact/>
            <Footer/>
        </div>
        {
          isShow &&
          <a onClick={handleTop} className='to_top' href="#">
            <FaAngleUp className='scroll_icon' />
          </a>
        }
    </section>
    </>
  )
}

export default App
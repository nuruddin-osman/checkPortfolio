import React from 'react'
import Navbar from './sections/navbar/Navbar'
import Background from '../src/assets/images/background.svg'
import Banner from './sections/banner/Banner'

const App = () => {
  return (
    <>
    <section>
        <div className="container" style={{backgroundImage: `url(${Background})`}}>
            <Navbar/>
            <Banner/>
        </div>
    </section>
    </>
  )
}

export default App
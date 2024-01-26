import React from 'react'
import Navbar from './sections/navbar/Navbar'
import Background from '../src/assets/images/background.svg'

const App = () => {
  return (
    <>
    <section>
        <div className="container" style={{backgroundImage: `url(${Background})`}}>
            <Navbar/>
        </div>
    </section>
    </>
  )
}

export default App
import React from 'react'
import './education.css'

const Education = () => {
  return (
    <section id='education'>
        <div className="education">
            <h2 className='section_heading'>education</h2>
            <div className="education_wrapper">
                <div className="education_civil">
                    <h3 className='education_year'>2016-2020</h3>
                    <h3 className='education_department'>diploma in civil engineering</h3>
                    <span className='education_institute'>chandpur polytechnic institute</span>
                    <article className='education_description'>I completed a 4-year diploma in civil engineering. I can fully explain engineering drawings and  I can do all the creative design of construction drawings, structural design. I can fully explain construction engineering estimate </article>
                </div>
                <div className="education_fdr">
                    <h3 className='education_year'>2023-2024</h3>
                    <h3 className='education_department'>front-end develpoment</h3>
                    <span className='education_institute'>Creative IT Institute</span>
                    <article className='education_description'>I am a certified Creative IT Institute Junior Front-End Developer. As usual, I started practicing code in 2018 due to my increased interest in coding. Currently, I am working with well-known front-end frameworks like React. Using HTML, CSS, JavaScript, Bootstrap, ReactJs, and TailwindCss I have expertise in creating responsive websites</article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education
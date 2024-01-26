import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section id='skill'>
        <div className="skils">
            <div className="section_heading">
                <h2>Skills</h2>
                <p className='skill_title'>I am mentioning  my conception of the following topics</p>
            </div>
            
            <div className="skill_description">
                <div className="progress_wrapper">
                    <div className="progress_item">
                        <h3>HTML</h3>
                        <div className="progress">
                            <div className="progress_bar progress_html">

                            </div>
                        </div>
                    </div>
                    <div className="progress_item">
                        <h3>JavaScript</h3>
                        <div className="progress">
                            <div className="progress_bar progress_javaScript">

                            </div>
                        </div>
                    </div> 
                    <div className="progress_item">
                        <h3>ReactJs</h3>
                        <div className="progress">
                            <div className="progress_bar progress_react">

                            </div>
                        </div>
                    </div> 
                    <div className="progress_item">
                        <h3>ReduxJs</h3>
                        <div className="progress">
                            <div className="progress_bar progress_redux">

                            </div>
                        </div>
                    </div> 
                </div>
                <div className="progress_wrapper">
                    <div className="progress_item">
                        <h3>CSS</h3>
                        <div className="progress">
                            <div className="progress_bar progress_css">

                            </div>
                        </div>
                    </div>
                    <div className="progress_item">
                        <h3>Bootstrap</h3>
                        <div className="progress">
                            <div className="progress_bar progress_bootstrap">

                            </div>
                        </div>
                    </div> 
                    <div className="progress_item">
                        <h3>TailwindCss</h3>
                        <div className="progress">
                            <div className="progress_bar progress_tailwind">

                            </div>
                        </div>
                    </div> 
                    <div className="progress_item">
                        <h3>AutoCad 2D & 3D Design</h3>
                        <div className="progress">
                            <div className="progress_bar progress_autoCad">

                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
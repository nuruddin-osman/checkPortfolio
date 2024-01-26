import React from 'react'
import './about.css'
import { FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import AboutImage from '../../assets/images/aboutImage.png'

const About = () => {
  return (
    <section>
        <div className="about">
          <h2 className='section_heading'>About me</h2>
          <div className="about_wrapper">
            <div className="about_media">
              <div className="about_image">
                <img src={AboutImage} alt="About Image" />
                <div className="about_social">
                  <FaFacebookF className='about_icon'/>
                  <FaTwitter className='about_icon' />
                  <FaInstagram className='about_icon'/>
                  <FaLinkedinIn className='about_icon'/>
                </div>
              </div>
            </div>
            <div className="about_content">
              <article>I'm a junior front-end developer and I love to code whenever I can. I have a clear understanding of this Frameworks and Libraries, Responsive Web Design, CSS and Styling, JavaScript, Cross-Browser Compatibility, Accessibility. Currently I am working with well known frontend framework like React. Using HTML, CSS, and JavaScript, I have expertise in creating responsive websites</article>
              <a href="#">contact me</a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About
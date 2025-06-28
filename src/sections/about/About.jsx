import React from "react";
import "./about.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import AboutImage from "../../assets/images/aboutImage.jpg";
import { FiGithub, FiTwitter } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <div className="about">
        <h2 className="section_heading">About me</h2>
        <div className="about_wrapper">
          <div className="about_media">
            <div className="about_image">
              <img src={AboutImage} alt="About Image" />
              <div className="about_social">
                <a href="https://www.facebook.com/mnos365/">
                  <FaFacebookF className="about_icon facebook" />
                </a>
                <a href="https://twitter.com/NuruddinDev">
                  <FiTwitter className="about_icon twitter" />
                </a>
                <a href="https://github.com/nuruddin-osman">
                  <FiGithub className="about_icon github" />
                </a>
                <a href="https://www.linkedin.com/in/md-nuruddin-osman-b78334209/">
                  <FaLinkedinIn className="about_icon linkedin" />
                </a>
              </div>
            </div>
          </div>
          <div className="about_content">
            <article>
              I'm a junior front-end developer and I love to code whenever I
              can. I have a clear understanding of this Frameworks and
              Libraries, Responsive Web Design, CSS and Styling, JavaScript,
              Cross-Browser Compatibility, Accessibility. Currently I am working
              with well known frontend framework like React. Using HTML, CSS,
              and JavaScript, I have expertise in creating responsive websites
            </article>
            <a href="#contact">contact me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

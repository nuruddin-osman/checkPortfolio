import React from "react";
import "./projects.css";
import Agency from "../../assets/projectGallary/agency.png";
import ChattingApp from "../../assets/projectGallary/chattingApp.png";
import Naturemade from "../../assets/projectGallary/naturemade.png";
import GreenAmbassador from "../../assets/projectGallary/greenAmbassador.png";
import Crypto from "../../assets/projectGallary/crypto.png";
import Orebi from "../../assets/projectGallary/orebi.png";

const Projects = () => {
  return (
    <section id="project">
      <div className="projects">
        <h2 className="section_heading">my projects</h2>
        <div className="project">
          {/* ====================Chatting======================== */}
          <div className="project_wrapper">
            <div className="project_image_wrapper">
              <div className="projectImage">
                <img src={ChattingApp} alt="Blog Picture" />
              </div>
              <div className="liveDemo">
                <div className="links">
                  <a href="https://neon-kheer-a6e3c7.netlify.app/">Live Demo</a>
                  <a href="https://github.com/nuruddin-osman/chatting-application">
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div className="description">
              <h4>
                Chatting-Application
                <br />
                build with Redux and Firebase
              </h4>
            </div>
          </div>
          {/* ====================Naturemade ecommerce======================== */}
          <div className="project_wrapper">
            <div className="project_image_wrapper">
              <div className="projectImage">
                <img src={Naturemade} alt="Naturemade Picture" />
              </div>
              <div className="liveDemo">
                <div className="links">
                  <a href="https://naturmade.netlify.app/">Live Demo</a>
                  <a href="https://github.com/nuruddin-osman/naturmade-ecommerce">
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div className="description">
              <h4>
                Naturemade ecommerce
                <br />
                build with Next.js and all content are dynamic
              </h4>
            </div>
          </div>
          {/* ====================Crypto======================== */}
          <div className="project_wrapper">
            <div className="project_image_wrapper">
              <div className="projectImage">
                <img src={Crypto} alt="Crypto Picture" />
              </div>
              <div className="liveDemo">
                <div className="links">
                  <a href="https://crypto1project.netlify.app/">Live Demo</a>
                  <a href="https://github.com/nuruddin-osman/crypto-1">
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div className="description">
              <h4>
                Crypto project build on ReactJs and reduxJs with Responsive
              </h4>
            </div>
          </div>

          {/* ====================GreenAmbassador======================== */}
          <div className="project_wrapper">
            <div className="project_image_wrapper">
              <div className="projectImage">
                <img src={GreenAmbassador} alt="FoodTime Picture" />
              </div>
              <div className="liveDemo">
                <div className="links">
                  <a href="https://dazzling-shortbread-062827.netlify.app/">
                    Live Demo
                  </a>
                  <a href="https://github.com/nuruddin-osman/greenambassador">
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div className="description">
              <h4>Corporate wibsite</h4>
            </div>
          </div>

          {/* ====================Orebi======================== */}
          <div className="project_wrapper">
            <div className="project_image_wrapper">
              <div className="projectImage">
                <img src={Orebi} alt="Orebi Picture" />
              </div>
              <div className="liveDemo">
                <div className="links">
                  <a href="https://orebie.netlify.app/">Live Demo</a>
                  <a href="https://github.com/mnosumon/orebi">Github</a>
                </div>
              </div>
            </div>
            <div className="description">
              <h4>
                Orebi project build with HTML React.Js JavaScript tailwindCss
                Responsive
              </h4>
            </div>
          </div>
          {/* ====================Agency======================== */}
          <div className="project_wrapper">
            <div className="project_image_wrapper">
              <div className="projectImage">
                <img src={Agency} alt="Agency Picture" />
              </div>
              <div className="liveDemo">
                <div className="links">
                  <a href="https://agencybts.netlify.app/">Live Demo</a>
                  <a href="https://github.com/nuruddin-osman/agency">Github</a>
                </div>
              </div>
            </div>
            <div className="description">
              <h4>Agency project build with HTML CSS Bootstrap Responsive</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import "../assets/styles/home.css";
import "../assets/fonts/fonts.css";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import myImg from "../assets/images/githubprofile.jpg";



import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Home() {
  const typedElement = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: [
        "React Development",
        "Full Stack Development",
        "MERN Stack Development",
        "Frontend Developement",
        "Backend Developement"
      ],
      typeSpeed: 60,
      backSpeed: 50,
      loop: true,
    };

    // Pass the ref to Typed.js
    const typed = new Typed(typedElement.current, options);

    // Cleanup function to destroy Typed.js instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="main" id="home-main">

        <div className="container" id="home">
          <div className="textFields">
            <h2>Hey,</h2>
            <h2>I'm Shantanu Bhadane</h2>
            <h4>Full Stack Web Developer</h4>
            <h5>
              - I'm interested in <span id="typedText" ref={typedElement}></span>{" "}
            </h5>

            <div className="bottom">
              <a href="/shatanuresume.pdf" download>
                <button id="resumeBtn">Resume</button>
              </a>
            </div>
            <h3 className="icon-heading">Available On: </h3>
            <div className="icons">

              <a href="https://www.linkedin.com/in/shantanu-bhadane/" target="_blank">
                <FaLinkedin className="icon" />
              </a>
              <a href="https://github.com/ShantanuBhadane" target="_blank">
                <FaGithub className="icon" />
              </a>
              <a href="https://www.instagram.com/shantanu_bhadane_" target="_blank">
                <FaInstagram className="icon" />
              </a>
            </div>
           


          </div>

          <div className="imageDiv">
            <img src={myImg} alt="img" draggable="false" />
          </div>
        </div>

      </div>
      <hr className='partision' />
    </>
  );
}

export default Home;

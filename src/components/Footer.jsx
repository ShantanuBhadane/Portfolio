import React from 'react'
import "../assets/styles/footer.css"


import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <>
      <hr className="footer-divider" />
      <footer className="footer">
        <h3 className='heading'>Follow me here:</h3>
        <div className="footer-container">
          <div className="footer-content">
            <div className="social-icons">
            <a href="https://www.linkedin.com/in/shantanu-bhadane/" target='_blank'>
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/ShantanuBhadane" target='_blank'>
          <FaGithub className="icon" />
        </a>
        <a href="https://www.instagram.com/shantanu_bhadane_" target='_blank'>
          <FaInstagram className="icon" />
        </a>
      
            </div>
            <div className="footer-bottom">
            
              <p className="footer-text">Created By ❤️ Shantanu.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

import React from 'react'
import "../assets/styles/about.css"
import education from "../assets/images/education.png"

const myTech = ["C/C++", "ReactJS", "Java", "Express.JS", "Git/GitHub", "NodeJS", "MongoDb", "HTML", "CSS", "JavaScript"]

function About() {
    return (
        <div className='about-main'>
            <div className="aboutContainer">
                <h1 className='aboutHeading'>ABOUT ME</h1>

                <div className="aboutSection">
                    <p className="aboutPara">
                        Hey there, <br />
                        I am Shantanu Bhadane. I'm currently working on Full stack Web Development and have interests in other technologies too.
                    </p>
                    <p className="aboutPara">
                        I like to solve problems and develop innovative solutions.
                    </p>

                    <p id='contactText'>Contact me at <a href="mailto:shantanubhadane672@gmail.com" id='emailText'>shantanubhadane672@gmail.com</a></p>


                    <div className="resume" >
                        <header>
                            <h2 className="article-title">Education</h2>
                        </header>
                        <img src={education} alt="education img" className="education-img" />
                        <div className="timeline">
                        
                            <ol className="timeline-list">
                           
                                <li className="timeline-item">
                                    <h4 className="timeline-item-title">
                                        BE in Computer Science

                                    </h4>
                                    <span className="year">2022 — 2026</span>
                                    <p className="timeline-text">
                                        Shri. Jaykumar Raval Institute Of Technology Dondaicha, Dhule
                                    </p>
                                    <p className="timeline-text">
                                        CGPA : 7.00 / 10
                                    </p>
                                </li>

                                <li className="timeline-item">
                                    <h4 className="timeline-item-title">
                                        Higher Secondaary Education

                                    </h4>
                                    <span className="edu-year">2020 — 2022</span>
                                    <p className="timeline-text">
                                        Muktangan Jr. Science College Borkund, Dhule, Maharastra
                                    </p>
                                    <p className="timeline-text">
                                        Percentage : 85 / 100
                                    </p>
                                </li>

                                <li className="timeline-item">
                                    <h4 className="timeline-item-title">
                                        Secondary School Education
                                    </h4>
                                    <span className="edu-year">2014 — 2020</span>
                                    <p className="timeline-text">
                                        Nutan Vidyalay Borkund, Dhule, Maharastra
                                    </p>
                                    <p className="timeline-text">
                                        Percentage : 83 / 100
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="technologies">
                        <h3>Technologies I've worked with</h3>
                        <div className="tech-badges">
                            <img
                                alt="C++"
                                src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"
                                height="25"
                            />
                            <img
                                alt="Java"
                                src="https://img.shields.io/badge/java-1572B6?style=for-the-badge&logo=java"
                                height="25"
                            />
                            <img
                                alt="Javascript"
                                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                                height="25"
                            />
                            <img
                                alt="React"
                                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                                height="25"
                            />
                            <img
                                alt="MongoDB"
                                src="https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white"
                                height="25"
                            />
                            <img
                                alt="Nodejs"
                                src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white"
                                height="25"
                            />
                            <img
                                alt="npm"
                                src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"
                                height="25"
                            />
                            <img
                                alt="Express"
                                src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                                height="25"
                            />
                            <img
                                alt="Tailwidcss"
                                src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                                height="25"
                            />
                            <img
                                alt="Material UI"
                                src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"
                                height="25"
                            />
                            <img
                                alt="Python"
                                src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white"
                                height="25"
                            />
                            <img
                                alt="HTML5"
                                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                                height="25"
                            />
                            <img
                                alt="Css3"
                                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                                height="25"
                            />
                            <img
                                alt="Jquery"
                                src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white"
                                height="25"
                            />
                            <img
                                alt="git"
                                src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white"
                                height="25"
                            />
                            <img
                                alt="github actions"
                                src="https://img.shields.io/badge/-Github_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white"
                                height="25"
                            />
                            <img
                                alt="postman"
                                src="https://img.shields.io/badge/-Postman-00C7B7?style=flat-square&logo=postman&logoColor=white"
                                height="25"
                            />
                        </div>
                    </div>
                </div>
            </div>
          <hr className='partision' />
        </div>
        
    )
}

export default About
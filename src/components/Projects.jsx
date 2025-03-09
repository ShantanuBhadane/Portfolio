import React from 'react'
import "../assets/styles/projects.css";
import "../assets/fonts/fonts.css";
import ProjectCard from './ProjectCard';

import rockPaper from "../assets/images/rockpaper.png"
import weatherAppImg from  "../assets/images/weatherapp.png"
import todoImg from  "../assets/images/todo.png"


const projects = [
    {
        image: todoImg,
        name: "TO-DO list",
        description: "• A TODO app to track your TODOs with LocalStorage functionality to store the TODOs",
        githubLink: "https://github.com/ShantanuBhadane/Todo-app",
        techStack: ["ReactJs" ,"LocalStorage"]
    },
    {
        image: rockPaper,
        name: "Rock, Paper and Scissor game ",
        description: "• A Rock paper and scissor. The user can play that game with Computer.",
        githubLink: "https://github.com/ShantanuBhadane/Rockpapaergame",
        techStack: [, "HTML", "CSS", "JavaScript"]
    },
    {
        image: weatherAppImg,
        name: "Weather App using  OpenWeatherMap API",
        description: "• A weather app  which  displays  the weather data of a particular location using OpenWeatheMap  API",
        githubLink: "https://github.com/ShantanuBhadane/Weatherapp",
        techStack: ["ReactJs","API"]
    }
]

function Projects() {
  return (
    <>
    <div className="main" id='projects-main'>
        <div className="cardContainer" id='projects'>
            <h1>My Projects</h1>
            <div className="cardsSection">
                {
                    projects.map((project, index) => (
                        <ProjectCard 
                            key={index}
                            image={project.image}
                            name={project.name}
                            description={project.description}
                            githubLink={project.githubLink}
                            techStack={project.techStack}
                        />
                    ))
                }
            </div>

            <div className="buttonSection">
                <button className='viewAllProjectsButton'><a href="https://github.com/ShantanuBhadane?tab=repositories" target='_blank'>View all Projects</a></button>
            </div>
        </div>
        <hr className='partision' />
    </div>
    </>
  )
}

export default Projects
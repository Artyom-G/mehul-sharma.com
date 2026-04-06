import React from "react";
import { useParams } from "react-router-dom";
import projectData from "./ProjectData";
import "./ProjectsPage.scss"

export const ProjectsPage = () => {
    const {id} = useParams(); //this retrieves the ID from the URL
    const project = projectData.find(p => p.id === id);//now we find the exact project related to the url
    //not certain about line above
    return (   
    <div className = "ProjectsPage">
        <div className="content">
            <div className="image">
                <div className = "overlay">
                    <h1> 
                        {project.name}
                    </h1>
                </div>
                <img src={project.banner} alt={project.name} />
            </div>
            
            <h4 className="skill-title">Technical Skills:</h4>
            <div className="skills">
                {project.technicalskills.map((skill, index) => (
                    <span key={index} className="skilli">{skill}</span>
                ))}
            </div>
            <h4 className="skill-title">Soft Skills:</h4>
            <div className="skills">
                {project.softskills.map((skill, index) => (
                    <span key={index} className="skilli">{skill}</span>
                ))}
            </div>
            <h4 className="description-title"> Description:</h4>
            
            {project.description.map(([question, answer], index) => (
                <div key={index}>
                    <strong>{question}</strong><br />
                    {answer}<br /><br />
                </div>
            ))}
            <iframe className="link" src={project.link} title={project.name}></iframe>
        </div>
    </div>
    )

}
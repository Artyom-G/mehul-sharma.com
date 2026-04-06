
import React from "react";
import "./Internship.scss"
import { useNavigate } from "react-router-dom";
import image from './WLU-Hero.png';

const InternshipData = [
     { id: "Blueprint", 
      name: "Software Developer", 
      description: "I did ................", 
      mainskills: [" Consutlancy ", " excel "], 
      image: image, link:"fjf",  
      softskills: ["Excel", "Gmail API", "Automation"],
      technicalskills: ["Excel", "Gmail API", "Automation"]
    },
    { id: "DBM-Systems", 
      name: "Business Analyst", 
      description: "I did ................", 
      mainskills: [" Consutlancy ", " excel "], 
      image: image, link:"fjf",  
      softskills: ["Excel", "Gmail API", "Automation"],
      technicalskills: ["Excel", "Gmail API", "Automation"]
    },

    { id: "Arya-solutions", 
      name: "Data Analyst", 
      description: "I did ................", 
      mainskills: [" Consutlancy ", " excel "], 
      image: image, 
      link: "fkfk",  
      softskills: ["Excel", "Gmail API", "Automation"],
      technicalskills: ["Excel", "Gmail API", "Automation"]
    },
]

export default InternshipData;


export const Internship = () => {
    const navigate = useNavigate();
    return (  
        <div className="internship">
            <h1 className="title">My Internship Experiences!</h1>
            <div className="intern-layout">
                {InternshipData.map(internship => (//looping through the internships
                    <div key={internship.id} className="internship-box" onClick={() => navigate(`/Internship/${internship.id}`)}> 
                        <img src={internship.image} alt={internship.name} />
                        <div className="overlay">
                            <p className="title">{internship.name}</p>
                            <p className="description">{internship.description}</p>
                            <div className="skills">
                                {internship.mainskills.map((skill, index) => (
                                    <span key={index} className="skill">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
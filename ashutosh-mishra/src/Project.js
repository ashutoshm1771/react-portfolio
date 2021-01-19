import React from 'react';
import "./Project.css";

function Project(props) {
    return (
        <a href={props.link} target="_blank">
        <div className="project">
            
            <div className="project__info">
                <h1>{props.title}</h1>
                <span>[Cick to view]</span>
            </div>
            
        </div>
        </a>
    )
}

export default Project;



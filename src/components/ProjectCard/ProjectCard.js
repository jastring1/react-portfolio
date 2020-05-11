import React from 'react'
import './ProjectCard.css'

function ProjectCard(props) {
    return (
        <div class="card" >
            <div class="card-divider">
                {props.title}
            </div>
            <img src={props.imageSrc} alt={props.title}  ></img>
            <div class="card-section">
                <p>{props.summary}</p>
            </div>
        </div>

    )
}

export default ProjectCard;
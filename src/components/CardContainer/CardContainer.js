import React from 'react'
import './CardContainer.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import data from '../../data.json'

function CardContainer() {
    return (
        <div class="card-container">
            <ProjectCard title={data.projects[0].title} imageSRC={data.projects[0].imageSRC} summary={data.projects[0].summary} />
            <ProjectCard title={data.projects[1].title} imageSRC={data.projects[1].imageSRC} summary={data.projects[1].summary} />
            <ProjectCard title={data.projects[2].title} imageSRC={data.projects[2].imageSRC} summary={data.projects[2].summary} />
        </div>

    )
}

export default CardContainer;
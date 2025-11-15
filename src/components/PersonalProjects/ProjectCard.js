import React from "react";
import TechStacks from "./TechStacks";
import TechLinks from "./TechLinks";
const ProjectCard = ({ projectDetails }) => {
    const { title, description, techStack, image, techLinks } = projectDetails
    console.log(6, techLinks)
    return (
        <div className="project-card">
            <div className="image-desc-wrapper">
                <div className="image-with-tech-stack">
                    <div className="project-image-wrapper">
                        <img src={image} alt='project' />
                    </div>
                    <div className="tech-wrapper">
                        <div>
                            <TechLinks values={techLinks} />
                        </div>
                        <div><TechStacks values={techStack} /></div>
                    </div>
                </div>

            </div>
            <div className="project-details">
                <div className="project-title">{title}</div>
                <div className="project-desc">{description}</div>
            </div>
        </div>
    )
}

export default ProjectCard;

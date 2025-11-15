import React from "react";
import ProjectCard from "./ProjectCard";
import './index.css'
export const personalProjects = [
    {
        id: 1,
        title: "Package Version Tracker",
        description:
            "A dashboard tool that tracks package versions across your apps and detects updates easily.",
        techStack: ["React", "JavaScript", "npm"],
        image: "../assets/package-tracker-app.png",
        techLinks: {
            live: "https://pkg-json-trails.vercel.app",
            github: "https://github.com/warmachine7733/pkg-json-trails",
        },
    },
    {
        id: 2,
        title: "Newsletter App",
        description:
            "A simple newsletter system with subscription, email storage, and delivery workflow.",
        techStack: ["React", "Redux"],
        image: "../assets/news-lister-app.png",
        techLinks: {
            live: "https://newsletter-pagination-news.vercel.app",
            github: "https://github.com/warmachine7733/newsletter--pagination-news",
        },
    },
    {
        id: 3,
        title: "Portfolio Website",
        description:
            "Personal developer portfolio showcasing career, blogs, and personal projects.",
        techStack: ["React", "JavaScript", "Redux", "Node.js"],
        image: "../assets/portfolio.png",
        techLinks: {
            live: "https://prateekio.vercel.app",
            github: "https://github.com/warmachine7733/prateek.io.frontend",
        },
    },
    {
        id: 4,
        title: "wp-react-cli",
        description:
            "A fast CLI tool to scaffold React apps with Webpack.",
        techStack: ["Npm", "JavaScript"],
        image: "../assets/wp-react-cli.png",
        techLinks: {
            live: "https://www.npmjs.com/package/wp-react-cli",
            github: "https://github.com/warmachine7733/wp-react-cli",
        },
    },
];


const PersonalProjects = () => {
    return (
        <div className="personal-projects-wrapper">
            <h4>Personal Projects</h4>
            <div className="projects-wrapper">
                {personalProjects.map(projectDetails => <ProjectCard projectDetails={projectDetails} />)}
            </div>
        </div>
    );
};

export default React.memo(PersonalProjects)

import React from 'react';

const TechLinks = ({ values }) => {
    const { live, github } = values
    return (
        <div className='tech-links-wrapper'>
            <div className='project-links'>
                <a href={live} target="_blank">live</a>
            </div>
            <div className='project-links'>
                <a href={github} target="_blank">github</a>
            </div>
        </div>
    )
}

export default TechLinks;

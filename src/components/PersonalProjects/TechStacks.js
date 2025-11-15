import React from 'react';

const TechStacks = ({ values }) => {
    return (
        <div className='tech-stacks-wrapper'>
            <div className='project-tech'>
                {values.join(' | ')}
            </div>
        </div>
    )
}

export default TechStacks;

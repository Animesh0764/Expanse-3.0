import React from 'react';
import "../assets/css/MeetingsCard.css";

const ProjectsCard = ({name, description, budget}) => {
    return (
        <div className="meetings-card">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Budget Sanctioned: {budget}</p>
        </div>
    )
}

export default ProjectsCard
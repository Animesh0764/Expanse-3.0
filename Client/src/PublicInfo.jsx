import React from 'react'
import MeetingsCard from './components/MeetingsCard'
import {meetings} from "./data/meetings.json"
import { projects } from "./data/projects.json"
import ProjectsCard from './components/ProjectsCard'

const PublicInfo = () => {
    return (
        <div className="public-info">
            <h1>Public Info</h1>
            
            <h3>Minutes of the meetings</h3>
            <div className="meetings-cards">
                {meetings.map((meeting, index) => (
                    <MeetingsCard
                        key={index}
                        title={meeting.title}
                        date={meeting.date}
                        time={meeting.time}
                        location={meeting.location}
                        description={meeting.description}
                    />
                ))}
            </div>

            <h3>Projects sanctioned</h3>
            <div className="meetings-cards">
                {projects.map((project, index) => (
                    <ProjectsCard
                        key={index}
                        name={project.name}
                        description={project.description}
                        budget={project.budget}
                    />
                ))}
            </div>
        </div>
    )
}

export default PublicInfo
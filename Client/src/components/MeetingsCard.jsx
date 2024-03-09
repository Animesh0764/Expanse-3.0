import React from 'react';
import "../assets/css/MeetingsCard.css";

const MeetingsCard = ({title, date, time, location, description}) => {
    return (
        <div className="meetings-card">
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{time}</p>
            <p>{location}</p>
            <p>{description}</p>
        </div>
    )
}

export default MeetingsCard
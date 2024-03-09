import React from 'react'
import "../assets/css/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <Link to="/" className='hyperlinks'><li>Home</li></Link>
                <li>Public Info</li>
                <li>Complaints</li>
                <Link to="/auth" className='hyperlinks'><li>Sign up</li></Link>
            </ul>
        </div>
    )
}

export default Navbar
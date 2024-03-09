import React from 'react'
import "../assets/css/Navbar.css";
import { Link } from 'react-router-dom';
import Logo from "../assets/images/logoapp.png";

const Navbar = () => {
    return (
        <div className="navbar">
            
            <ul>
                <Link to="/" className='hyperlinks'><img src={Logo} alt="" srcset="" /></Link>
                <Link to="/public-info" className='hyperlinks'><li>Public Info</li></Link>
                <Link to="/complaints" className='hyperlinks'><li>Complaints</li></Link>
                <Link to="/auth" className='hyperlinks'><li>Sign up</li></Link>
            </ul>
        </div>
    )
}

export default Navbar
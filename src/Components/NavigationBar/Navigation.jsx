import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return(
        <nav className="navbar">
            <h2 className="logo">Anti-Boredom Hub</h2>

            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
                <li><Link to="/activities">Activities</Link></li>
                <li><Link to="/task">Tasks</Link></li>
            </ul>
        </nav>
    )
}
export default Navigation;
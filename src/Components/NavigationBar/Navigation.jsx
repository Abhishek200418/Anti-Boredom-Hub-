import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";

function Navigation(){

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"); // ❌ remove token
        navigate("/login"); // 🔁 redirect to login
    };

    return(
        <nav className="navbar">
            <h2 className="logo">Anti-Boredom Hub</h2>

            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
                <li><Link to="/activities">Activities</Link></li>
                <li><Link to="/task">Tasks</Link></li>
            </ul>

            {/* ✅ Logout Button */}
            <button className="logout-btn" onClick={handleLogout}>
                Logout
            </button>
        </nav>
    )
}

export default Navigation;
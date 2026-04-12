import React from "react";
import "./Home.css";

function Home(){
    return(
        <div className="home-container">

            <h1 className="home-title">Anti-Boredom Hub 🎯</h1>

            <p className="home-subtitle">
                Stay productive, organized, and never feel bored again!
            </p>

            <div className="home-cards">

                <div className="card">
                    <h2>📋 Tasks</h2>
                    <p>Manage your daily tasks and stay productive.</p>
                </div>

                <div className="card">
                    <h2>🎯 Activities</h2>
                    <p>Explore fun and useful activities.</p>
                </div>

                <div className="card">
                    <h2>⭐ Favorites</h2>
                    <p>Save your favorite activities for quick access.</p>
                </div>

            </div>

        </div>
    );
}

export default Home;
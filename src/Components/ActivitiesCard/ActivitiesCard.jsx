import React from "react";
import useAddFavorite from "../../hooks/Favoriteshooks/useAddFavorite";
import "./ActivitiesCard.css";

function ActivitiesCard({ activity, handleDelete }) {
    const handleAddFavorite = useAddFavorite();

    return (
        <div className="activity-card">

            <p className="activity-title">{activity.title}</p>
            <p className="activity-category">{activity.category}</p>
            <p className="activity-status">
                {activity.completed ? "✅ Completed" : "❌ Not Completed"}
            </p>

            <div className="activity-buttons">
                <button 
                    className="delete-btn"
                    onClick={()=>handleDelete(activity.id)}
                >
                    Delete
                </button>

                <button 
                    className="fav-btn"
                    onClick={() => handleAddFavorite(activity)}
                >
                    Add to Favorite ⭐
                </button>
            </div>

        </div>
    );
}

export default ActivitiesCard;
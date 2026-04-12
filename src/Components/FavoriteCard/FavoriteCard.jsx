import React from "react";
import "./FavoriteCard.css";

function FavoriteCard({ fav, handleDeletefav }){
   return(
    <div className="favorite-card">

        <p className="favorite-title">{fav.title}</p>

        <button 
            className="favorite-delete-btn"
            onClick={() => handleDeletefav(fav.id)}
        >
            Delete ⭐
        </button>

    </div>
   );
}

export default FavoriteCard;
import React from "react";
import useFavorite from "../../hooks/Favoriteshooks/useFavorite";
import FavoriteCard from "../../Components/FavoriteCard/FavoriteCard";
import "./Favorites.css";

function Favorites(){
    const {favorite,handleDeletefav} = useFavorite();

    return(
        <div className="favorites-container">

            <h1 className="favorites-title">⭐ Favorite Activities</h1>

            <div className="favorites-list">
                {favorite.map((F)=>(
                    <FavoriteCard 
                        key={F.id} 
                        fav={F} 
                        handleDeletefav={handleDeletefav}
                    />
                ))}
            </div>

        </div>
    );
}

export default Favorites;
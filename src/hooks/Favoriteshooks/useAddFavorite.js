import { AddFavorite } from "../../Services/FavoriteService";

function AdduseFavorite(){

    const handleAddFavorite = (activity) => {

        const addFav = {
            title: activity.title,
            activities: {
                id: activity.id  
            }
        };

        AddFavorite(addFav)
        .then(()=>{
            console.log("added to fav");
        })
        .catch((err)=>{
            console.log(err);
        });
    };

    return handleAddFavorite;
}

export default AdduseFavorite;
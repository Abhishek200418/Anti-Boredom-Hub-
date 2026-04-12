import React, { useEffect, useState } from "react";
import { GetAllFavorite } from "../../Services/FavoriteService";
import { deleteFavorite } from "../../Services/FavoriteService";

function useFavorite(){
    const [favorite,setFavorite]=useState([])
    useEffect(()=>{
        GetAllFavorite()
        .then((res)=>{
            setFavorite(res.data)
        })
    },[])

    const handleDeletefav=(id)=>{
        deleteFavorite(id).
        then(()=>{
            GetAllFavorite()
            .then((res)=>{
                setFavorite(res.data)
            })
        })
    }

    return {favorite,handleDeletefav};
}
export default useFavorite;
import axios from "axios";

import { Favorite_Api_url } from "./Api";


export const GetAllFavorite=()=>{
    return axios.get(`${Favorite_Api_url}`)
}
export const AddFavorite=(favorite)=>{
    return axios.post(`${Favorite_Api_url}`,favorite)
}

export const deleteFavorite=(id)=>{
    return axios.delete(`${Favorite_Api_url}/${id}`)
}
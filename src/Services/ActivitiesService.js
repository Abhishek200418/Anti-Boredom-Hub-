import axios from "axios";
import { Activities_Api_url } from "./Api";

export const GetAllActivitiesDetails=()=>{
    return axios.get(`${Activities_Api_url}`)
}

export const AddActivities=(activities)=>{
    return axios.post(`${Activities_Api_url}`,activities)
}

export const DeleteActivities=(id)=>{
    return axios.delete(`${Activities_Api_url}/${id}`)
}
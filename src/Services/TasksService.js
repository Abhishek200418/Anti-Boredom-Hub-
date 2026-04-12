import axios from "axios";
import { Tasks_Api_url } from "./Api";

export const GetAllTasks=()=>{
    return axios.get(`${Tasks_Api_url}`)
}

export const AddTasks=(tasks)=>{
    return axios.post(`${Tasks_Api_url}`,tasks)
}

export const UpdateTask=(id,tasks)=>{
    return axios.put(`${Tasks_Api_url}/${id}`,tasks)
}
export const DeleteTask=(id)=>{
    return axios.delete(`${Tasks_Api_url}/${id}`)
}
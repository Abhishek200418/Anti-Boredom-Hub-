import React, { useEffect, useState } from "react";
import { GetAllTasks } from "../../Services/TasksService";
import { DeleteTask } from "../../Services/TasksService";

function useTasks(){
const[Tasks,setTasks]=useState([])
useEffect(()=>{
    GetAllTasks()
    .then((res)=>{
        setTasks(res.data)
    })
},[])

const handleDeleteTask=(id)=>{
DeleteTask(id).
then(()=>{
    console.log("deleted...")
    GetAllTasks().
    then((res)=>{
        setTasks(res.data)
    })
})
.catch((err)=>{
    console.log(err);
})
}
return {Tasks,handleDeleteTask};
}
export default useTasks;
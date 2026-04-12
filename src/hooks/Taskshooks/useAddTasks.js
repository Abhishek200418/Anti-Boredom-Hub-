import React, { useState } from "react";
import { AddTasks } from "../../Services/TasksService";

function useAddTasks(){
    const [name,setname]=useState("")
    const [status,setStatus]=useState("")

    const handleAddTask=(e)=>{
        e.preventDefault();

        const newTask={
            name,
            status
        }
    
AddTasks(newTask)
.then(()=>{
    console.log("added...")
})
.catch((err)=>{
    console.log(err)
})
    }
    return {name,status,setname,setStatus,handleAddTask}
}
export default useAddTasks;
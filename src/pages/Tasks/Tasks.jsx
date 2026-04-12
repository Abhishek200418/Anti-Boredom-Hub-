import React from "react";
import useTasks from "../../hooks/Taskshooks/useTasks";
import TaskCard from "../../Components/TaskCard/TaskCard";
import TasksForm from "../../Components/TaskForm/TasksForm";
import "./Tasks.css";

function Tasks(){
    const {Tasks,handleDeleteTask}=useTasks();

    return(
        <div className="tasks-container">

            <h1 className="tasks-title">📋 Tasks</h1>

            <TasksForm/>

            <div className="tasks-list">
                {Tasks.map((t)=>(
                    <TaskCard 
                        key={t.id} 
                        task={t} 
                        handleDeleteTask={handleDeleteTask}
                    />
                ))}
            </div>

        </div>
    )
}
export default Tasks;
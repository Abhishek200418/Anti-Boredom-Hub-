import React from "react";
import useAddTasks from "../../hooks/Taskshooks/useAddTasks";
import "./TaskForm.css";

function TasksForm(){

    const {
        name,
        status,
        setname,
        setStatus,
        handleAddTask
    } = useAddTasks();

    return(
        <form className="tasks-form" onSubmit={handleAddTask}>

            <input
                className="tasks-input"
                type="text"
                placeholder="Enter Task Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
            />

            <select
                className="tasks-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>

            <button className="tasks-btn" type="submit">
                Add Task
            </button>

        </form>
    );
}

export default TasksForm;
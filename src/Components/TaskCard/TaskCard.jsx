import React, { useState } from "react";
import useUpdateTasks from "../../hooks/Taskshooks/useUpdateTasks";
import "./TaskCard.css";

function TaskCard({ task ,handleDeleteTask}){

    const handleUpdate = useUpdateTasks();

    const [editName, setEditName] = useState(task.name);
    const [editStatus, setEditStatus] = useState(task.status);

    return(
        <div className="task-card">

            <input
                className="task-input"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
            />

            <select
                className="task-select"
                value={editStatus}
                onChange={(e) => setEditStatus(e.target.value)}
            >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>

            <div className="task-buttons">

                <button
                    className="update-btn"
                    onClick={() =>
                        handleUpdate({
                            ...task,
                            name: editName,
                            status: editStatus
                        })
                    }
                >
                    Update
                </button>

                <button 
                    className="delete-btn"
                    onClick={() => handleDeleteTask(task.id)}
                >
                    Delete
                </button>

            </div>

        </div>
    );
}

export default TaskCard;
import { UpdateTask } from "../../Services/TasksService";

function useUpdateTasks(){

    const handleUpdate = (task) => {

        const updatedTask = {
            name: task.name,
            status: task.status
        };

        UpdateTask(task.id, updatedTask)
        .then(()=>{
            console.log("Updated successfully");
        })
        .catch((err)=>{
            console.log(err);
        });
    };

    return handleUpdate;
}

export default useUpdateTasks;
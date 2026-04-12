import { useState } from "react";
import { AddActivities } from "../../Services/ActivitiesService";

function useAddActivities(){
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [completed, setCompleted] = useState(false);

    const handleAdd = (e) => {
        e.preventDefault();

        const newActivity = {
            title,
            category,
            completed
        };

        AddActivities(newActivity)
        .then(() => {
            console.log("Added new Activity...");
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return {
        title,
        category,
        completed,
        setTitle,
        setCategory,
        setCompleted,
        handleAdd
    };
}

export default useAddActivities;
import { useEffect, useState } from "react";
import { GetAllActivitiesDetails, DeleteActivities } from "../../Services/ActivitiesService";

function useActivities(){

    const [activities, setActivities] = useState([]);

    useEffect(()=>{
        GetAllActivitiesDetails()
        .then((res)=>{
            setActivities(res.data);
        });
    }, []);

    const handleDelete = (id) => {
        DeleteActivities(id)
        .then(() => {
            GetAllActivitiesDetails()
            .then((res) => {
                setActivities(res.data);
            });
        })
        .catch((err) => {
            console.error(err);
        });
    };

    return { activities, handleDelete };
}

export default useActivities;
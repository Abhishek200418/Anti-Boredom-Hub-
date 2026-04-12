import React from "react";
import useActivities from "../../hooks/Activitieshooks/useActivities";
import ActivitiesCard from "../../Components/ActivitiesCard/ActivitiesCard";
import ActivitiesForm from "../../Components/ActivitiesFrom/ActivitiesFrom";
import "./Activities.css";

function Activities(){
    const {activities, handleDelete} = useActivities();

    return (
        <div className="activities-container">

            <h1 className="activities-title">🎯 Activities</h1>

            <div className="activities-form">
                <ActivitiesForm/>
            </div>

            <div className="activities-list">
                {activities.map((activity)=>(
                    <ActivitiesCard 
                        key={activity.id} 
                        activity={activity} 
                        handleDelete={handleDelete}
                    />
                ))}
            </div>

        </div>
    );
}

export default Activities;
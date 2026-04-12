import React from "react";
import useAddActivities from "../../hooks/Activitieshooks/useAddActivities";
import "./ActivitiesForm.css";

function ActivitiesForm(){

    const {
        title,
        category,
        completed,
        setTitle,
        setCategory,
        setCompleted,
        handleAdd
    } = useAddActivities();  

    return(
        <form className="activity-form" onSubmit={handleAdd}>

            <input
                className="activity-input"
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                className="activity-input"
                type="text"
                placeholder="Enter Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />

            <label className="activity-checkbox">
                Completed:
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                />
            </label>

            <button className="activity-btn" type="submit">
                Add Activity
            </button>

        </form>
    );
}

export default ActivitiesForm;
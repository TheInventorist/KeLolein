import React from "react";
import './TaskList.css'

const TaskList = props => {
    return (
        <ul className='task-list'>
            {
                props.tasks.map((task) => {
                    return <li key={task.id}>{task.text}</li>;
                } )
            }
        </ul>
    );
};

export default TaskList;
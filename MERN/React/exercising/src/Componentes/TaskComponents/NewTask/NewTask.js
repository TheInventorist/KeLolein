import { useState } from "react";

const NewTask = props => {

    const [enteredTaskText, setEnteredTaskText] = useState("");
    const taskTextChange = event => {
        setEnteredTaskText(event.target.value);
    }

    const submitTaskHandler = event => {
        event.preventDefault();
        const newTask = {
            id: Math.random().toString,
            text: enteredTaskText,
        };
        setEnteredTaskText("");
        props.onAddTask(newTask)
    }

    return(
        <form onSubmit={submitTaskHandler}>
            <input type="text" value={enteredTaskText} onChange={taskTextChange}/>
            <button type="submit">Add Task</button>
        </form>
    );
} 

export default NewTask;
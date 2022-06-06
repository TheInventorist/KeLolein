const TaskList = props => {
    return(
        <ul>
            {
                props.tasks.map((item) => {
                    return(
                        <li key={item.id}>{item.text}</li>
                    );
                })
            }
        </ul>
    );
}

export default TaskList;
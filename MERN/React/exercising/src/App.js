
import React, {useState} from 'react';
import './App.css';
import NewTask from './Componentes/TaskComponents/NewTask/NewTask';
import TaskList from './Componentes/TaskComponents/TaskList/TaskList';

function App() {

  const [TasksTodo, setTasks] = useState([
          {id: '1', text: 'Finish Course'},
          {id: '2', text: 'Learn more'},
          {id: '3', text: 'Help others'}
        ]);

      const addNewTaskHandler = (newTask) => {
        setTasks(TasksTodo.concat(newTask));
        console.log(TasksTodo);
        }

    return (
      <div className='course-goals'>
        <h2>Course Tasks</h2>
          <NewTask onAddTask={addNewTaskHandler}/>
          <TaskList tasks={TasksTodo}/>
      </div>
    
  );
}

export default App;

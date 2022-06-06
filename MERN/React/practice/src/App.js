import './App.css';
// import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

// import TaskList from './components/TaskList/TaskList';
// import NewTask from './components/NewTask/NewTask';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';

const App = () => {

  // const [TasksTodo, setTasks] = useState([
  //     {id: '1', text: 'Finish Course'},
  //     {id: '2', text: 'Learn more'},
  //     {id: '3', text: 'Help others'}
  //   ]);
  
  // const addNewTaskHandler = (newTask) => {
  //   setTasks(TasksTodo.concat(newTask));
  // }

  return <Router>
    <Switch>
      <Route path="/" exact>
          <Page1/>
        </Route>
        <Route path='/newplace'>
          <Page2/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </Router>;

  // return (
  // <div className='course-goals'>
  //   <h2>Course Tasks</h2>
  //     <NewTask onAddTask={addNewTaskHandler}/>
  //     <TaskList tasks={TasksTodo}/>
  // </div>
  // );
};

export default App;

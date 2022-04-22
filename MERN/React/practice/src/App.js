import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React, {useState} from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {

  const [courseGoals, setCourseGoals] = useState([
      {id: 'cg1', text: 'Finish Course'},
      {id: 'cg2', text: 'Learn more'},
      {id: 'cg3', text: 'Help others'}
    ]);
  
  const addNewGoalHandler = (newGoal) => {
    setCourseGoals(courseGoals.concat(newGoal));
  }

  return <div className='course-goals'>
    <h2>Course goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals}/>
  </div>;
}

// Componente React retornando llamada React.createElement
// const App = () => {
//   return React.createElement('h1', {title: 'funciona!'}, HOLA);
// }

// // Componente React mediante clase javascript y renderizando JSX
// class App extends React.Component{
//   render(){
//     return <h1 title='funciona!'> HOLA </h1>;
//   }
// }

export default App;

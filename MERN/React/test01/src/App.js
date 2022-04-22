import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import React, {useState} from 'react';

const App = () => {

  const [courseGoals, setCourseGoals]  = useState([
    {id: '0', text: 'Jean Moussiaux'},
    {id: '1', text: 'Sergio Barria'},
    {id: '2', text: 'Nicoles Torres'},
    {id: '3', text: 'Roberto Jeria'},
    {id: '4', text: 'Vincent Depassier'}
  ]);

  const addNewGoalHanlder = (newGoal) => {
    setCourseGoals(courseGoals.concat(newGoal));
  }

  return (
    <div>
      <h2>Courses</h2>
      <NewGoal onAddGoal={addNewGoalHanlder}/>
      <GoalList goals={courseGoals}/>
    </div>
  );
  
}

export default App;

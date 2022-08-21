import { Fragment } from 'react';
import AddItem from './components/AddItem/AddItem';
import Labels from './components/Labels/Labels';
import TodosList from './components/TodosList/TodosList';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.container}>
      <AddItem />
      <Labels />
      <TodosList />
    </div>
  );
}

export default App;

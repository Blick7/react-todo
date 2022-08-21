import Title from '../UI/Title';
import InputForm from '../UI/InputForm';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

import classes from './TodosList.module.css';
import { useEffect, useState } from 'react';

const DUMMY_DATA = [
  { title: 'have a nice day', label: 'fun', done: false },
  { title: 'RAMONRA', label: 'uncategorized', done: false },
  { title: 'FUN', label: 'fun', done: true },
];

const TodosList = () => {
  const todoItems = useSelector((state) => state.todo.items);
  const [searchState, setSearchState] = useState(todoItems);

  useEffect(() => {
    setSearchState(todoItems);
  }, [todoItems]);

  const onChangeHandler = (value) => {
    const search = todoItems.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchState(search);
    console.log(searchState);
  };

  return (
    <div>
      <Title>Todos List</Title>
      <InputForm
        type="text"
        id="add-label"
        placeholder="Type name to search"
        selectOptions={['all', 'uncategorized', 'fun']}
        onChangeIsActive={true}
        onChange={onChangeHandler}
      />
      <ul>
        {searchState.map((item) => (
          <ListItem
            key={item.title}
            title={item.title}
            label={item.label}
            done={item.done}
          />
        ))}
        {searchState.length === 0 && <p>Task not found</p>}
      </ul>
    </div>
  );
};

export default TodosList;

import Title from '../UI/Title';
import InputForm from '../UI/InputForm';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

import classes from './TodosList.module.css';

const DUMMY_DATA = [
  { title: 'have a nice day', label: 'fun', done: false },
  { title: 'RAMONRA', label: 'uncategorized', done: false },
  { title: 'FUN', label: 'fun', done: true },
];

const TodosList = () => {
  const todoItems = useSelector((state) => state.todo.items);
  console.log(todoItems);

  return (
    <div>
      <Title>Todos List</Title>
      <InputForm
        type="text"
        id="add-label"
        placeholder="Type name to search"
        selectOptions={['all', 'uncategorized', 'fun']}
      />
      <ul>
        {todoItems.map((item) => (
          <ListItem
            key={item.title}
            title={item.title}
            label={item.label}
            done={item.done}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
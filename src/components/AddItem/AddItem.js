import { useDispatch, useSelector } from 'react-redux';
import { todosActions } from '../../store/todoSlice';

import Title from '../UI/Title';
import InputForm from '../UI/InputForm';

import classes from './AddItem.module.css';

const AddItem = () => {
  const dispatch = useDispatch();
  const labelsSelector = useSelector((state) => state.todo.labels);

  const onSubmitHandler = (title, label) => {
    dispatch(
      todosActions.addItem({
        title,
        label,
        done: false,
        date: new Date().toLocaleString(),
      })
    );
  };

  return (
    <div className={classes['add-todos']}>
      <Title>Todos App</Title>
      <InputForm
        type="text"
        id="add-todo"
        placeholder="Type 'Todo' and press enter"
        selectOptions={labelsSelector}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default AddItem;

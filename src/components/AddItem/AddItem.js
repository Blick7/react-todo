import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todosActions } from '../../store/todoSlice';

import Title from '../UI/Title';
import InputForm from '../UI/InputForm';
import ModalAlert from '../UI/ModalPopup';

import classes from './AddItem.module.css';

const AddItem = () => {
  const dispatch = useDispatch();
  const labelsSelector = useSelector((state) => state.todo.labels);
  const [showPopUp, setShowPopUp] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');

  useEffect(() => {
    const time = setTimeout(() => {
      setShowPopUp(false);
    }, 1000);
    return () => {
      clearTimeout(time);
    };
  }, [showPopUp]);

  const onSubmitHandler = (title, label) => {
    setTaskTitle(title);
    dispatch(
      todosActions.addItem({
        title,
        label,
        done: false,
        date: new Date().toLocaleString(),
      })
    );
    setShowPopUp(true);
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
      {showPopUp && <ModalAlert text={`${taskTitle} added successfully! `} />}
    </div>
  );
};

export default AddItem;

import { useState, useEffect } from 'react';
import LabelItem from './LabelItem';
import Title from '../UI/Title';
import InputForm from '../UI/InputForm';
import { useDispatch, useSelector } from 'react-redux';
import { todosActions } from '../../store/todoSlice';

import classes from './Labels.module.css';

const Labels = () => {
  const dispatch = useDispatch();
  const labelsSelector = useSelector((state) => state.todo.labels);

  const [labelsState, setLabelsState] = useState(labelsSelector);
  const formSubmitHandler = (label) => {
    dispatch(todosActions.addLabel(label));
  };

  useEffect(() => {
    setLabelsState(labelsSelector);
  }, [labelsSelector]);

  const deleteLabelHandler = (title) => {
    dispatch(todosActions.removeLabel(title));
    dispatch(todosActions.removeItemWithLabel(title));
    setLabelsState(labelsSelector.filter((item) => item !== title));
  };

  return (
    <div className={classes.labels}>
      <Title>Labels</Title>
      <InputForm
        type="text"
        id="add-label"
        placeholder="add custom label and press enter"
        onSubmit={formSubmitHandler}
      />
      <ul>
        {labelsState.map((item) => (
          <LabelItem key={item} label={item} onDelete={deleteLabelHandler} />
        ))}
      </ul>
    </div>
  );
};

export default Labels;

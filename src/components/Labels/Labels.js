import LabelItem from './LabelItem';
import Title from '../UI/Title';
import InputForm from '../UI/InputForm';
import { useDispatch, useSelector } from 'react-redux';
import { todosActions } from '../../store/todoSlice';

const DUMMY_ITEMS = ['uncategorized', 'fun'];

const Labels = () => {
  const dispatch = useDispatch();
  const labelsSelector = useSelector((state) => state.todo.labels);
  const formSubmitHandler = (label) => {
    dispatch(todosActions.addLabel(label));
  };

  return (
    <div>
      <Title>Labels</Title>
      <InputForm
        type="text"
        id="add-label"
        placeholder="add custom label and press enter"
        onSubmit={formSubmitHandler}
      />
      <ul>
        {labelsSelector.map((item) => (
          <LabelItem key={item} title={item} />
        ))}
      </ul>
    </div>
  );
};

export default Labels;

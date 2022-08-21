import Title from '../UI/Title';
import InputForm from '../UI/InputForm';

import classes from './AddItem.module.css';

const AddItem = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes['add-todos']}>
      <Title>Todos App</Title>
      <InputForm
        type="text"
        id="add-todo"
        placeholder="Type 'Todo' and press enter"
        selectOptions={['uncategorized', 'fun']}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default AddItem;

import { useRef, useState } from 'react';

import classes from './InputForm.module.css';

const InputForm = (props) => {
  const inputRef = useRef();
  const [selectState, setSelectState] = useState('uncategorized');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    props.onSubmit(inputRef.current.value, selectState);
  };

  const selectChangeHandler = (event) => {
    setSelectState(event.target.value);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        ref={inputRef}
      ></input>
      {props.selectOptions && ( // check if select exists
        <select onChange={selectChangeHandler}>
          {props.selectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </form>
  );
};

export default InputForm;

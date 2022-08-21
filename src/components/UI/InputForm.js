import { useRef, useState } from 'react';

import classes from './InputForm.module.css';

const InputForm = (props) => {
  const inputRef = useRef();
  const [selectState, setSelectState] = useState('uncategorized');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (props.onSubmit) {
    }
    props.onSubmit(inputRef.current.value, selectState);
  };

  const selectChangeHandler = (event) => {
    setSelectState(event.target.value);
    props.onCategoryChange(event.target.value);
  };

  const onChangeHandler = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        ref={inputRef}
        onChange={props.onChangeIsActive && onChangeHandler}
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

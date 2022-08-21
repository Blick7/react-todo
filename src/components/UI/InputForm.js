import classes from './InputForm.module.css';

const InputForm = (props) => {
  console.log(props);
  return (
    <form className={classes.form} onSubmit={props.onSubmit}>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
      ></input>
      {props.selectOptions && ( // check if select exists
        <select>
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

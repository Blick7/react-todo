import classes from './ModalPopup.module.css';

const ModalAlert = (props) => {
  return (
    <div className={classes['modal-content']}>
      <div className={classes.text}>
        <h2>{props.text}</h2>
      </div>
      <div className={classes.progress}></div>
    </div>
  );
};

export default ModalAlert;

import classes from './ListItem.module.css';
import { BsFillTrashFill } from 'react-icons/bs';
import { todosActions } from '../../store/todoSlice';
import { useDispatch } from 'react-redux';

const ListItem = (props) => {
  const isDone = props.done ? classes.isDone : classes.isUndone;
  const classTitleIsDone = props.done ? classes.title : '';

  const dispatch = useDispatch();

  const removeItemHandler = () => {
    console.log(props.title);
    dispatch(todosActions.removeItem(props.title));
  };

  const taskIsDoneHandler = () => {
    dispatch(todosActions.toggleTaskStatus(props.title));
  };

  return (
    <li className={classes['todo-item']}>
      <div className={classTitleIsDone}>{props.title}</div>
      <span className={classes.label}>{props.label}</span>
      <span className={isDone} onClick={taskIsDoneHandler}>
        {props.done ? 'done(click to change)' : 'undone(click to change)'}
      </span>
      <div className={classes.removeBtn} onClick={removeItemHandler}>
        <BsFillTrashFill />
      </div>
      <div className={classes.timeStamp}>02/04/2022, 5:24:40 PM</div>
    </li>
  );
};

export default ListItem;

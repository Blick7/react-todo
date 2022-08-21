import classes from './LabelItem.module.css';
import { BsFillTrashFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const LabelItem = (props) => {
  const itemsSelector = useSelector((state) => state.todo.items);

  const deleteLabelHandler = () => {
    props.onDelete(props.title);
  };

  let count = 0;
  for (let item of itemsSelector) {
    if (item.label === props.label) count++;
  }

  if (count > 1 || count === 0) {
    count = `${count} items`;
  } else {
    count = `${count} item`;
  }

  return (
    <li className={classes.label}>
      <h3>{props.label}</h3>
      <div>
        <div>{count}</div>
        <div onClick={deleteLabelHandler}>
          <BsFillTrashFill />
        </div>
      </div>
    </li>
  );
};

export default LabelItem;

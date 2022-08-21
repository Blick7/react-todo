import classes from './LabelItem.module.css';
import { BsFillTrashFill } from 'react-icons/bs';

const LabelItem = (props) => {
  const deleteLabelHandler = () => {
    props.onDelete(props.title);
  };

  return (
    <li className={classes.label}>
      <h3>{props.title}</h3>
      <div>
        <div>1 item</div>
        <div onClick={deleteLabelHandler}>
          <BsFillTrashFill />
        </div>
      </div>
    </li>
  );
};

export default LabelItem;

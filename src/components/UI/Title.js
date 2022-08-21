import classes from './Title.module.css';

const Title = (props) => {
  return <h2 className={classes.title}>{props.children}</h2>;
};

export default Title;

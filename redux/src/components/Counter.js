import { Fragment } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)

  const incrementHandler = () => {

    dispatch({ type: 'increment' })

  }
  const decrementHandler = () => {

    dispatch({ type: 'decrement' })

  }

  return (

    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <button onClick={incrementHandler} >increment</button>
      <button onClick={decrementHandler} >Decrement</button>
    </main>

  );
};

export default Counter;

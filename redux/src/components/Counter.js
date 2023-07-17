import { Fragment } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux'
import { counterActions } from '../store';
const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  const showCounter = useSelector(state => state.showCounter)


  const toggleCounter = () => {
    
    dispatch({ type: counterActions.toggleCounter })

  }

  const incrementHandler = () => {

    dispatch({ type: counterActions.increment })

  }
  const decrementHandler = () => {

    dispatch({ type: counterActions.decrementHandler})

  }
  const increase = () => {

    dispatch({ type: counterActions.increase(5)})// Pass additional param called payload

  }

  return (

    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showCounter && counter}</div>
      <button onClick={toggleCounter} >toggleCounter</button> 
      <button onClick={incrementHandler} >increment</button> 
      <button onClick={increase} >increase by x</button>
      <button onClick={decrementHandler} >Decrement</button>
    </main>

  );
};

export default Counter;

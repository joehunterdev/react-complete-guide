import { Fragment } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux'

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  const showCounter = useSelector(state => state.showCounter)


  const toggleCounter = () => {
    
    dispatch({ type: 'toggle' })

  }

  const incrementHandler = () => {

    dispatch({ type: 'increment' })

  }
  const decrementHandler = () => {

    dispatch({ type: 'decrement' })

  }
  const increaseBy5 = () => {

    dispatch({ type: 'increase' , amount: 5})

  }

  return (

    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showCounter && counter}</div>
      <button onClick={toggleCounter} >toggleCounter</button> 
      <button onClick={incrementHandler} >increment</button> 
      <button onClick={increaseBy5} >increase by 5</button>
      <button onClick={decrementHandler} >Decrement</button>
    </main>

  );
};

export default Counter;

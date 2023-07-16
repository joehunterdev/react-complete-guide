import { useState } from 'react';
import classes from './Counter.module.css';
// import { Provider } from 'react-redux'
//import { createStore } from 'redux'


const  redux = require('redux');
// import store from '../store/store'

const counterReducer = (state = {counter:0},action) => {

  if(action.type === 'increment'){
      return {counter:state.counter +1}
  }

  if(action.type === 'decrement'){
      return {counter:state.counter -1}
  }

}


const Counter = () => {
  const [counter,setCounter]  = useState(false);
  const store = redux.createStore(counterReducer) // default action

  let latestState = []

  const counterSubscriber = () => {
    latestState = store.getState()
    console.log(latestState)
    setCounter(latestState.counter)

  }
  store.subscribe(counterSubscriber)

  const toggleCounterHandler = () => { 

    store.dispatch({ type: 'increment' })

  };

  return (
  // <Provider store={store}>
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE {counter} --</div>
      <button onClick={toggleCounterHandler} >Toggle Counter</button>
    </main>
  // </Provider>
  );
};

export default Counter;

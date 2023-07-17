import {createSlice, configureStore} from '@reduxjs/toolkit'
const initialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment(state) {
        state.counter++;
      },
      decrement(state) {
        state.counter--;
      },
      increase(state, action) {
        state.counter = state.counter + action.payload; //payload is passed
      },
      toggleCounter(state) {
        state.showCounter = !state.showCounter;
      },
    },
  });
 

// const store = configureStore(counterSlice.reducer) // default action

const store = configureStore({
    reducer: counterSlice.reducer
}
    
) // default action

export const counterActions = counterSlice.actions;
export default store

// export default counterReducer

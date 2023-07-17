import { createSlice } from '@reduxjs/toolkit'
const initialCounterState = { counter: 0, showCounter: true }
// const initialAuthState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            console.log("incrementing")
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            console.log("increasing")
            state.counter = state.counter + action.payload; //payload is passed
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer 
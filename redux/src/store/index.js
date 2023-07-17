import { createSlice, configureStore } from '@reduxjs/toolkit'
const initialCounterState = { counter: 0, showCounter: true }
// const initialAuthState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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

const intialAuthState = { isAuthenticated: false }

const authSlice = createSlice({
    name: 'auth',
    initialState: intialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        console.log("logging in")
        },
        logout(state) {
            state.isAuthenticated = false
            console.log("logging out")
        }
    },
});

// const store = configureStore(counterSlice.reducer) // default action

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
}

) // default action

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions; 

export default store

// export default counterReducer

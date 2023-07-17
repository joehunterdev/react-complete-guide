
import authReducer from "./auth";
import counterReducer from "./counter";
import { configureStore } from "@reduxjs/toolkit";
// const store = configureStore(counterSlice.reducer) // default action

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
}
) // default action


export default store

// export default counterReducer

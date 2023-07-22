
// import authReducer from "./auth";
import cartReducer from "./cart-slice";
import uiReducer from "./ui-slice";

import { configureStore } from "@reduxjs/toolkit";
// const store = configureStore(counterSlice.reducer) // default action

const store = configureStore({
    reducer: {
        cart: cartReducer,
        ui: uiReducer
    }
}
) // default action


export default store

 
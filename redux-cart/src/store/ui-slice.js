
import { createSlice } from '@reduxjs/toolkit'
 
const uiSlice = createSlice({
    name: 'ui',
    initialState:  { isShown: false },
    reducers: {
        toggleCart(state) {
            state.isShown = !state.isShown
        },
        // hideCart(state) {
        //     state.isShown = false
        // }
    },
});

export const uiActions = uiSlice.actions; 
export default uiSlice.reducer
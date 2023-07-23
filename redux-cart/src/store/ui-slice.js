
import { createSlice } from '@reduxjs/toolkit'
 
const uiSlice = createSlice({
    name: 'ui',
    initialState:  { isShown: false },
    reducers: {
        toggleCart(state) {
            state.isShown = !state.isShown
        },
        showNotification(state, action) {
            state.notification = {
              status: action.payload.status,
              title: action.payload.title,
              message: action.payload.message,
            };
          },
    },
});

export const uiActions = uiSlice.actions; 
export default uiSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

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

export const authActions = authSlice.actions; 

export default authSlice.reducer
// Store for authentication
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status : false, // to check authentication : default value should be false
    userData : null, // initially no user, hence null
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login : (state, action) => {
            state.status = true,
            state.userData = action.payload.userData
        },
        logout : (state) => {
            state.status = false,
            state.userData = null
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer
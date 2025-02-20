import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: {},
    username: "",
    submit: false,
    isAuthenticated: false,
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addLogInCredentials(state, action) {
            state.isAuthenticated = true
            state.currentUser = action.payload 
        },
        logOutUser(state) {
            state.isAuthenticated = false ; 
            state.currentUser = {}
        },
        updateUser(state,action){
            state.currentUser = action.payload
        },
        deleteUser(state){
            state.isAuthenticated = false 
            state.currentUser = {}
        },
        addUsername(state, action) {
            state.username = action.payload,
            state.submit = true
        },
    }
})
export const { addUsername, addLogInCredentials, updateUser, logOutUser,deleteUser} = userSlice.actions
export default userSlice.reducer;
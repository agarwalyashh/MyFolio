import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: {},
    username: {},
    submit: false,
    isAuthenticated: false,
    userDetails: {}
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
            state.submit = false 
        },
        addUsername(state, action) {
            state.username = action.payload,
            state.submit = true
        },
        updateUsername(state,action){
            state.username = action.payload
        },
        addUserDetails(state,action){
            state.userDetails=action.payload
        }
    }
})
export const { addUsername, addLogInCredentials, updateUser, logOutUser,deleteUser,addUserDetails,updateUsername} = userSlice.actions
export default userSlice.reducer;
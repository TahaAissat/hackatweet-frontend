import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : {username : null , firstname : null , token : null}
}

export const usersSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {
        addUser : (state,action) => {
            state.value.username = action.payload.username
            state.value.token = action.payload.token
            state.value.firstname = action.payload.firstname
        },
        logout : (state) => {
            state.value.username = null
            state.value.token = null
            state.value.firstname = null
        }
    }
})

export const {addUser,logout} = usersSlice.actions
export default usersSlice.reducer
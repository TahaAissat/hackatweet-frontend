import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : {username : null , token : null}
}

export const usersSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {
        addUser : (state,action) => {
            state.value.username = action.payload.username
            state.value.token = action.payload.token
        },
        logout : (state,action) => {
            state.value = {}
        }
    }
})

export const {addUser,logout} = usersSlice.actions
export default usersSlice.reducer
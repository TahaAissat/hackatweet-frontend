import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : []
}

export const tweetsSlice = createSlice({
    name : 'tweets',
    initialState,
    reducers : {
        defineList : (state,action) => {
            state.value = action.payload
        }
    }
})

export const {defineList} = tweetsSlice.actions;
export default tweetsSlice.reducer
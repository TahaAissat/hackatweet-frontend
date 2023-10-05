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
        },
        deleteTweet : (state,action) => {
           state.value = state.value.filter(e => e.texte === action.payload.texte)
        }
    }
})

export const {defineList,deleteTweet} = tweetsSlice.actions;
export default tweetsSlice.reducer
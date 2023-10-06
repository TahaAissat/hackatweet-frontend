
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : []
}

export const hashtagSlice = createSlice({
    name : 'hashtagtweets',
    initialState,
    reducers : {
        defineHashtagTweets : (state,action) => {
            state.value = action.payload
        }
    }
})

export const {defineHashtagTweets} = hashtagSlice.actions ;
export default hashtagSlice.reducer ;
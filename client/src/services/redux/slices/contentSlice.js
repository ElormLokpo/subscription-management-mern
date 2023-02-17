import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: {
        content: null
    }
};

const contentSlice = createSlice({
    name : 'Content Slice',
    initialState,
    reducers:{
        storeContentId(state, action){
            state.value.contentID = action.payload
        }
    }
})





export const {storeContentId} = contentSlice.actions;
export default contentSlice.reducer;
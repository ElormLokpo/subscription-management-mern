import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    value: {
        token: null
    }
}

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers:{
        storeToken(state, action){
            state.value.token = action.payload;
        }
    }
})


export const {storeToken} = loginSlice.actions;
export default loginSlice.reducer;
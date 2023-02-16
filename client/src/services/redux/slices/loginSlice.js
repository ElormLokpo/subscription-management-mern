import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    value: {
        token: null,
        userData: null
    }
}

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers:{
        storeToken(state, action){
            state.value.token = action.payload;
        },
        storeUserData(state, action){
            state.value.userData = action.payload;
        }
    }
})


export const {storeToken, storeUserData} = loginSlice.actions;
export default loginSlice.reducer;
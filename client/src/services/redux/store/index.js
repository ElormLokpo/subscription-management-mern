import {configureStore} from '@reduxjs/toolkit';
import loginSlice from '../slices/loginSlice';
import contentSlice from '../slices/contentSlice';

export const store = configureStore({
    reducer:{
        loginS : loginSlice,
        contentS: contentSlice
    }
});
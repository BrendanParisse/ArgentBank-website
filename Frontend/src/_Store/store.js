// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../_Slices/UserSlice.js';
import LoginReducer from '../_Slices/AuthSlice.js'
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        user: userReducer,
        authentification: LoginReducer,
    },
    middleware: [thunk],
});

export default store;
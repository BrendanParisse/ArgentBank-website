import { createSlice } from '@reduxjs/toolkit';

const LoginSlice = createSlice({
    name: 'authentification',
    initialState: {
        isAuth: localStorage.getItem('token') ? true : false,
        token: localStorage.getItem('token') || null,
        error: null,
    },
    reducers: {
        loginUserSuccess: (state, action) => {
            state.isAuth = true;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
            state.error = null;
        },
        loginUserFailure: (state, action) => {
            state.isAuth = false;
            state.token = null;
            state.error = action.payload;
        },
        logoutUser: (state) => {
            state.isAuth = false;
            state.token = null;
            localStorage.removeItem('token');
            state.error = null;
        },
    },
});

export const { loginUserSuccess, loginUserFailure, logoutUser } = LoginSlice.actions;
export default LoginSlice.reducer



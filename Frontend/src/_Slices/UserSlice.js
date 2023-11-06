import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        error: null,
    },
    reducers: {
        getUserProfileSuccess: (state, action) => {
            state.user = action.payload;
            state.error = null;
        },
        getUserProfileFailure: (state, action) => {
            state.user = null;
            state.error = action.payload;
        },
        updateUserProfileSuccess: (state, action) => {
            state.user.userName = action.payload.userName;
            state.error = null;
        },

        updateUserProfileFailure: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { getUserProfileSuccess, getUserProfileFailure, updateUserProfileSuccess, updateUserProfileFailure } = userSlice.actions;
export default userSlice.reducer;
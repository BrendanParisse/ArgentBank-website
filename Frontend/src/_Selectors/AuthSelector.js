export const selectAuth = (state) => state.authentification;
export const selectAuthAuthToken = (state) => {
    const token = selectAuth(state).token;
    return token;
};
export const selectAuthError = (state) => selectAuth(state).error;
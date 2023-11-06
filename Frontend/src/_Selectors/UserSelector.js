export const selectUser = (state) => state.user;
export const selectUserName = (state) => selectUser(state).user?.userName;
export const selectUserError = (state) => selectUser(state).error;
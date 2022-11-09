import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: '', token: null },
    reducers: {
        setCredentials: (state, action) => {
            const { name, email, token } = action.payload;
            state.user = {
                name: name,
                email: email
            }
            state.token = token;
        },
        logOut: (state, action) => {
            state.user = null;
            state.token = null;
        }
    },

});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;



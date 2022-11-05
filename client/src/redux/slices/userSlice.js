import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCurrentUser = createAsyncThunk('user/getUser', async () => {

    const { data } = await axios.get(`http://localhost:8000/api/user?token=${sessionStorage.getItem('jwt')}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('jwt')
        }
    })
    return data.name;
})

export const getUsersAsync = createAsyncThunk('user/getUsers', async () => {

    const { data } = await axios.get(`http://localhost:8000/api/getall`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('jwt')
        }
    })
    return data;
})

const initialState = {
    status: 'loading',
    username: '',
    email: '',
    users: [],
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserName(state, action) {
            state.username = action.payload;
        },
        removeUser(state) {
            state.username = null;
        },
    }, extraReducers: {
        [getUsersAsync.pending]: (state) => {
            console.log('Идет отправка asd');

        },
        [getUsersAsync.fulfilled]: (state, action) => {
            console.log('Данные получены');
            state.status = 'success';
            state.users = action.payload;

        },
        [getUsersAsync.rejected]: (state) => {
            console.log('Error');
            state.status = 'error';
        },
        [getCurrentUser.pending]: (state) => {
            console.log('Идет отправка');

        },
        [getCurrentUser.fulfilled]: (state, action) => {
            console.log('Данные получены');
            state.username = action.payload;
        },
        [getCurrentUser.rejected]: (state) => {
            console.log('Error');
            state.status = 'error';
        }
    }
})

export const { setUserName, removeUser } = userSlice.actions;
export default userSlice.reducer;
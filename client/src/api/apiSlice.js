import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../redux/slices/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        console.log('token', token);
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    }
});


export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: builder => ({})
});
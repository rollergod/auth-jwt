import { buildCreateApi } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "../../api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/getall'
        })
    })
})

export const {
    useGetUsersQuery
} = usersApiSlice
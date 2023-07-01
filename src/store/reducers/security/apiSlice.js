import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:8098"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    endpoints: (builder) => ({
        getUsers:builder.query({
            query: () => '/users',
            providesTags: ["Users"]
        }),
        createUser: builder.mutation({
            query: (newUser) => ({
                url: '/users',
                method: 'POST',
                body: newUser,
            })
        })
    })
})

export const {useGetTasksQuery, useCreateTaskMutation} = apiSlice
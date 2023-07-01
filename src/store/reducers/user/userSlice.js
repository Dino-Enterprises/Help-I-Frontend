import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const baseUrl = "http://localhost:8098/users"

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: [],
        isSuccess: false,
        message: "",
        loading: false
    }
    ,
    reducers: {
        loginUser: (state, action) => {
            state.push(action.payload);
        },
        registerUser: (state,action) => {
            console.log("action payload", action.payload)
            const dataUser = action.payload
            //securityServices(dataUser)
        },
    }
})

export const {loginUser, registerUser} = userSlice.actions
export default userSlice.reducer

/*
export const createUser = createUserAsync(async(values) => {
    return axios.post(baseUrl, {
        method: "POST",
        headers: {Accept: "application/json", "Content-Type": "aplication/json"},
        body: JSON.stringify({
            username: values.username,
            password: values.password,
            email: values.email,
            name: values.name,
            number:values.number,
            lastName: values.lastName,
            createdDate: values.createdDate,
            birthday: values.birthday
        })
    }).then((res) => res.data)
});*/
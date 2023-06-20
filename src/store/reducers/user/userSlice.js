import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.push(action.payload);
        },
        registerUser: (state, action) => {
            const foundTask = state.find((task) => task.id === action.payload);
            if (foundTask) {
                state.splice(state.indexOf(foundTask), 1);
            }
        },
    }
})

export default userSlice.reducer
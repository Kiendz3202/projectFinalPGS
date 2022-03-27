import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name:'login',
    initialState:{loginSuccess:false},
    reducers:{
        login(state){
            state.loginSuccess = !state.loginSuccess
        }
    }
})
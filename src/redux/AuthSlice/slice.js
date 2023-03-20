import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { login, register,logout, refreshUser } from "./operations";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:{name:null,email:null},
        token:null,
        isLoggedIn:false,
        isRegistered:false,
        isRefreshing:false,
    },
    extraReducers: (builder) =>
        builder
        .addCase(register.pending,(state,action) => {})
        .addCase(register.fulfilled,(state,{payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isRegistered = true;
            state.isLoggedIn = true;
            toast.success('User created successfuly!')
        })
        .addCase(register.rejected,(state,action) =>{})
        .addCase(login.pending,(state,action) =>{})
        .addCase(login.fulfilled,(state,{payload}) =>{
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            state.isRegistered = false;
            toast.success('You are Logged In!')
        })
        .addCase(login.rejected,(state,action) =>{
            toast.error('No such a user!')
        })
        .addCase(logout.pending,(state,{payload}) => {})
        .addCase(logout.fulfilled,(state,{payload}) => {
            state.isLoggedIn = false;
            state.user = {};
            state.token = null;
        })
        .addCase(refreshUser.pending,(state,{payload})=>{
            state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled,(state,{payload})=>{
            console.log('userRefresh',payload)
            state.user = payload;
            state.isLoggedIn = true;
            state.isRefreshing= false;
            
        })
        .addCase(refreshUser.rejected,(state,{payload})=>{
            state.isRefreshing = false;
        })

})

export const authReducer = authSlice.reducer;
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

// utility to add JSON web token (JWT)
const setAuthHeaderToken = token =>{
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
// cleare Auth token JWT
const clearAuthToken = () =>{
    axios.defaults.headers.common.Authorization = '';
}

//POST users sign up
//{name,email,password}
export const register  = createAsyncThunk(
    'auth/register',
    async(credentials,thunkAPI) =>{
        try {
            const {data}= await axios.post('users/signup',credentials);
            console.log('registration',data)
            setAuthHeaderToken(data.token)
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//POST users sign in 
//{name,password}
export const login  = createAsyncThunk(
    'auth/login',
    async(credentials,thunkAPI) =>{
        try {
            const {data} = await axios.post('users/login',credentials);
            setAuthHeaderToken(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logout  = createAsyncThunk(
    'auth/logout',
    async(_,thunkAPI) =>{
        try {
            await axios.post('users/logout');
            clearAuthToken();
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
// users/current
// headers:Authorization:Bearer token 
export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async(_,thunkAPI)=>{
        const {token} = thunkAPI.getState().auth;
        console.log('token',token)
        if(token === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        setAuthHeaderToken(token);
        try {
            const {data} = await axios.get('users/current');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)


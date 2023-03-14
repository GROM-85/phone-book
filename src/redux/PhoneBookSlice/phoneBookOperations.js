import { createAsyncThunk } from '@reduxjs/toolkit';


import axios from "axios";

axios.defaults.baseURL = 'https://63df7dffa76cfd4105834f36.mockapi.io/contacts/contacts'


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
        const {data} = await axios.get();
       
        return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async(contact,{rejectWithValue}) =>{
        try {
            const {data} = await axios.post('',{...contact})
            
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async(id,{rejectWithValue})=>{
        try {
            const {data} = await axios.delete(`/${id}`);
            
            return data;
        } catch (error) {
            
        }
    }
)

console.dir(fetchContacts)


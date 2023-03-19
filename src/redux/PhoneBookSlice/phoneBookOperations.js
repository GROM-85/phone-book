import { createAsyncThunk } from '@reduxjs/toolkit';


import axios from "axios";

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
        const {data} = await axios.get('contacts');
       
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
            const {data} = await axios.post('contacts',{...contact})
            
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
            const {data} = await axios.delete(`contacts/${id}`);
            
            return data;
        } catch (error) {
            
        }
    }
);

export const updateContact = createAsyncThunk(
    'contacts/updateContacts',
    async(id,{rejectWithValue})=>{
        try {
            const {data} = await axios.patch(`contacts/${id}`);
            return data;
        } catch (error) {
            
        }
    }
)



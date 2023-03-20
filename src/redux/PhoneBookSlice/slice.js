import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from './phoneBookOperations';

const handleError = (state, { payload }) => {
  state.error = payload.message;
  state.isLoading = false;
};
const handlePending = (state,{payload})=>{
  state.isLoading = true;
}

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    contacts:[],
    isLoadingForm: false,
    isLoadingDelete: false,
    isLoading:false,
    error: null,
    filter: '',
    activeId :[],
    isTabletWidth:false,
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setActiveId:(state,{payload})=>{
      state.activeId.push(payload);
    },
    setIsTablet:(state,{payload})=>{
      state.isTabletWidth = payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending,handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
         state.contacts = payload;
         state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, handleError)

      .addCase(addContact.pending, (state) => {
        state.isLoadingForm = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        return {...state,contacts:[...state.contacts,payload],isLoadingForm:false}
       
      })
      .addCase(addContact.rejected, (state,{payload})=>{
        state.error = payload;
        state.isLoadingForm = false;
      })

      .addCase(deleteContact.pending, (state) =>{
         state.isLoadingDelete = true;
        })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          ({ id }) => id !== payload.id
        );
        state.activeId = state.activeId.filter(activeId => activeId !== payload.id)
        state.isLoadingDelete = false;
      })
      .addCase(deleteContact.rejected, (state,{payload})=>{
        state.error = payload;
        state.isLoadingDelete = false;
      });
  },
});

export const phoneBookReducer = phoneBookSlice.reducer;
export const phoneBookActions = phoneBookSlice.actions;
export const {setFilter,setActiveId,setIsTablet} = phoneBookSlice.actions;
export default phoneBookSlice;



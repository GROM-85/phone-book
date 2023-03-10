import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

const phoneBook = createSlice({
  name: 'phoneBook',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: {
      prepare(payload) {
        return { payload: { ...payload, id: shortid.generate() } };
      },
      reducer(state, { payload }) {
        state.contacts.unshift(payload);
      },
    },
    removeContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const phoneBookReducer = phoneBook.reducer;
export const { addContact, removeContact, setFilter } = phoneBook.actions;

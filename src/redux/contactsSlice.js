import { createSlice } from '@reduxjs/toolkit';

const contactsInitState = () => {
  if (JSON.parse(localStorage.getItem('contacts')) === null) {
    return [];
  }
  return JSON.parse(localStorage.getItem('contacts'));
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState(),
  reducer: {
    addContact: {},
    deleteContact: {},
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

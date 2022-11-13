import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage';

const initialState = { value: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.value.push(action.payload);
    },
    removeContact(state, action) {
      return state.value.filter(item => item.id !== action.payload);
    },
  },
});

const contactsReducer = contactsSlice.reducer;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['value'],
};

export const { addContact, removeContact } = contactsSlice.actions;

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);

export const getContacts = state => {
  return state.contacts;
};

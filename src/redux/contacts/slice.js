import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    removeContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

const contactsReducer = contactsSlice.reducer;

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, removeContact } = contactsSlice.actions;

export const persistedContactsReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const getContacts = state => {
  return state.contacts;
};

import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import * as contactsNetworks from '../network/ContactsNetworks.js';


export const addContactsSlice  = createSlice({
    name: 'add_contact',
   initialState: {
     contacts: [],
     isFetching: false,
     isSuccess: false,
     isError: false,
     errorMessage: '',
   },
   reducers: {
   },
   extraReducers: {
     [contactsNetworks.addContact.fulfilled]: (state, { payload }) => {
       // console.log('getContacts_payload', payload.contacts);
       state.contacts = payload.contacts;
       state.isFetching = false;
       state.isSuccess = true;
       return state;
     },
     [contactsNetworks.addContact.rejected]: (state, { payload }) => {
       // console.log('getContacts_payload', payload);
       state.isFetching = false;
       state.isError = true;
       state.errorMessage = payload.message;
     },
     [contactsNetworks.addContact.pending]: (state) => {
       state.isFetching = true;
     },
   },
   });

   export default addContactsSlice.reducer;

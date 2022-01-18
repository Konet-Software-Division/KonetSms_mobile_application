import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import * as contactsNetworks from '../network/ContactsNetworks.js';


const getContactsSlice  = createSlice({
   name: 'get_contact',
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
    [contactsNetworks.getContacts.fulfilled]: (state, { payload }) => {
      console.log('getContacts_payload', payload.contacts);
      state.contacts = payload.contacts;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [contactsNetworks.getContacts.rejected]: (state, { payload }) => {
      console.log('getContacts_payload', payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [contactsNetworks.getContacts.pending]: (state) => {
      state.isFetching = true;
    },
  },
  });
  

export default getContactsSlice.reducer;



// export const userSelector = (state) => state.logi;
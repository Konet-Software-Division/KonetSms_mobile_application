import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import * as loginNetworks from '../network/LoginNetworks';
import EncryptedStorage from 'react-native-encrypted-storage';


const loginSlice  = createSlice({
   name: 'logi',
  initialState: {
    fullName: '',
    email: '',
    access_token:'',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    },
  },
  extraReducers: {
    [loginNetworks.loginUser.fulfilled]: (state, { payload }) => {
      storeUserSession("Bearer "+payload.access_token)
      state.email = payload.email;
      state.fullName = payload.fullName;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [loginNetworks.loginUser.rejected]: (state, { payload }) => {
      console.log(payload.message)
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [loginNetworks.loginUser.pending]: (state) => {
      state.isFetching = true;
    },
  },
  });
  
  async function storeUserSession(token) {
    try {
        await EncryptedStorage.setItem(
            "user_token",token            
        );
      } catch (error) {
        // There was an error on the native side
    }
  }

export default loginSlice.reducer;


export const { clearState } = loginSlice.actions;

// export const userSelector = (state) => state.logi;
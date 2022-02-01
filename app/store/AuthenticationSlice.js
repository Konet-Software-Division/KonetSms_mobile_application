import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import * as authenticationNetworks from '../network/AuthenticationNetworks';
import EncryptedStorage from 'react-native-encrypted-storage';


const authenticationSlice  = createSlice({
   name: 'authentication_slice',
  initialState: {
    fullName: '',
    email: '',
    access_token:'',
    isFetching: false,
    isSuccess: false,
    isError: false,
    Message: '',

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
    [authenticationNetworks.loginUser.fulfilled]: (state, { payload }) => {
      storeUserSession("Bearer "+payload.access_token)
      state.email = payload.email;
      state.fullName = payload.fullName;
      state.isFetching = false;
      state.isSuccess = true;
      state.Message = payload.message;

      return state;
    },
    [authenticationNetworks.loginUser.rejected]: (state, { payload }) => {
      console.log(payload.message)
      state.isFetching = false;
      state.isError = true;
      state.Message = payload.message;
    },
    [authenticationNetworks.loginUser.pending]: (state) => {
      state.isFetching = true;
      
    },




    // Forgot password Extra reducer
    [authenticationNetworks.forgotPassword.fulfilled]: (state, { payload }) => {
      console.log(payload.message)

      state.isFetching = false;
      state.isSuccess = true;
      state.Message = payload.message;

      return state;
    },
    [authenticationNetworks.forgotPassword.rejected]: (state, { payload }) => {
      console.log(payload.message)

      state.isFetching = false;
      state.isError = true;
      state.Message = payload.message;
    },
    [authenticationNetworks.forgotPassword.pending]: (state) => {
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

export default authenticationSlice.reducer;


export const { clearState } = authenticationSlice.actions;

// export const userSelector = (state) => state.logi;
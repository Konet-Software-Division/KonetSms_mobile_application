import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import * as loginNetworks from '../network/LoginNetworks';


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

      state.email = payload.email;
      state.fullName = payload.fullName;
      state.access_token = "Bearer "+payload.access_token;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [loginNetworks.loginUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [loginNetworks.loginUser.pending]: (state) => {
      state.isFetching = true;
    },
  },
  });
  

export default loginSlice.reducer;


export const { clearState } = loginSlice.actions;

// export const userSelector = (state) => state.logi;
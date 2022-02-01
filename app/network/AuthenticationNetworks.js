import { createAsyncThunk } from '@reduxjs/toolkit';
import Axiosclient from '../HttpClient'



export const loginUser = createAsyncThunk(
  'login',
  async (values, thunkAPI) => {
    try {
       const response = await Axiosclient.post('user_service/api/v1/auth/login',{
                    "email": values.email,
                    "password": values.password                   
                  });
   
      // if (!response.data.status=="error") {
      //   return thunkAPI.rejectWithValue(data);
      // }

      
      // localStorage.setItem('token', data.token);
      // return { ...data, username: name, email: email };

      return response.data;
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'forgot_password ',
  async (email, thunkAPI) => {
    try {
      console.log(email)
       const response = await Axiosclient.post('user_service/api/v1/auth/forgot-pin',{
                    "email": email,
                  });
   
      // if (!response.data.status=="error") {
      //   return thunkAPI.rejectWithValue(data);
      // }

      
      // localStorage.setItem('token', data.token);
      // return { ...data, username: name, email: email };

      return response.data;
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const checkToken = createAsyncThunk(
  'check_token',
  async (values, thunkAPI) => {
    try {
       const response = await Axiosclient.post('user_service/api/v1/auth/check-token',{
                    "email": values.email,
                    "token" : values.token
                  });
   
      // if (!response.data.status=="error") {
      //   return thunkAPI.rejectWithValue(data);
      // }

      
      // localStorage.setItem('token', data.token);
      // return { ...data, username: name, email: email };

      return response.data;
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
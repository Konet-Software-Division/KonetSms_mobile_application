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
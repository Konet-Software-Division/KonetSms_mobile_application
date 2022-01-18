import Constant from '../constants/constant'
import { createAsyncThunk } from '@reduxjs/toolkit';


export const smsTransactions = createAsyncThunk(
  'transactions',
  async ({access_token}, thunkAPI) => {
    try {
      const response = await fetch(Constant.baseUrl+'sms_service/api/v1/sms/get-sms-transactions',
      {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer "+access_token
          },
         
        }
      );

      let data = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(data);
      }
      // localStorage.setItem('token', data.token);
      // return { ...data, username: name, email: email };
      return data ;
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const paymentTransactions = createAsyncThunk(
  'paymentTransactions',
  async ({access_token}, thunkAPI) => {
    try {
      const response = await fetch(Constant.baseUrl+'sms_service/api/v1/payment/transactions',
      {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer "+access_token
          },         
        }
      );

      let data = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(data);
      }
      console.log('payload_transaction', data.transactions.transactionId);
      // localStorage.setItem('token', data.token);
      // return { ...data, username: name, email: email };
      return data ;
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);



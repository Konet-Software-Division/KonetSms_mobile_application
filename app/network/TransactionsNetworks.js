import Constant from '../constants/constant'
import { createAsyncThunk } from '@reduxjs/toolkit';
import Axiosclient from '../HttpClient'


export const smsTransactions = createAsyncThunk(
  'transactions',
  async ( {thunkAPI}) => {
    try {
      const response = await Axiosclient.get('sms_service/api/v1/sms/get-sms-transactions');
  
      return response.data ;
    } catch (e) {
      console.log('Error', e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const paymentTransactions = createAsyncThunk(
  'paymentTransactions',
  async ({thunkAPI}) => {
    try {
      const response = await Axiosclient.get('sms_service/api/v1/payment/transactions');

      return response.data ;
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);



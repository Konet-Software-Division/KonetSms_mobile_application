import Constant from '../constants/constant'
import { createAsyncThunk } from '@reduxjs/toolkit';
import Axiosclient from '../HttpClient'



export const smsSchedule = createAsyncThunk(
  'smsSchedule',
  async (thunkAPI) => {
    try {
      const response = await Axiosclient.get('sms_service/api/v1/sms/fetch-scheduled-messages');

      return response.data ;
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);



import Constant from '../constants/constant'
import { createAsyncThunk } from '@reduxjs/toolkit';





export const getContacts = createAsyncThunk(
  'getContacts',
  async ({access_token}, thunkAPI) => {
    try {
      const response = await fetch(Constant.baseUrl+'contact_service/api/v1/contacts/fetch-contacts',
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

      return data ;
      
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);



// async function storeUserSession(token) {
//   try {
//       await EncryptedStorage.setItem(
//           "user_token","Bearer "+token
          
//       );

//       // Congrats! You've just stored your first value!
//   } catch (error) {
//       // There was an error on the native side
//   }
// }
import Constant from '../constants/constant'
import { createAsyncThunk } from '@reduxjs/toolkit';
import Axiosclient from '../HttpClient'





export const getContacts = createAsyncThunk(
  'getContacts',
  async (thunkAPI) => {
    try {
      const response = await Axiosclient.get(Constant.baseUrl+'contact_service/api/v1/contacts/fetch-contacts' );

    
      return response.data ;
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
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
import Constant from '../constants/constant'
import { createAsyncThunk } from '@reduxjs/toolkit';
import Axiosclient from '../HttpClient'





export const getGroups = createAsyncThunk(
  'getgroups',
  async ( thunkAPI) => {
    try {
 
      const response = await Axiosclient.get('contact_service/api/v1/groups/fetch-all-groups');

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
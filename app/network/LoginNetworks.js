import Constant from '../constants/constant'
import { createAsyncThunk } from '@reduxjs/toolkit';



export const loginUser = createAsyncThunk(
  'login',
  async ({email, password }, thunkAPI) => {
    try {
      const response = await fetch(Constant.baseUrl+'user_service/api/v1/auth/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
          
        }
      );
      let data = await response.json();
      // console.log('data', data);

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
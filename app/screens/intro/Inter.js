// import Constant from '../constants/constant'
// import { createAsyncThunk } from '@reduxjs/toolkit';
// // import {fetchWithTimeout} from '../Util/utils'
// import Axiosclient from '../HttpClient'




// export const loginUser = createAsyncThunk(
//   'login',
//   async ({email, password }, thunkAPI) => {
//     try {
//                   const resp = await Axiosclient.post('user_service/api/v1/auth/login',{
//                       email: email,
//                       password: password
                      
//                     });
//                     return resp.data;
                   
            
//     // try {
  
//     //   const response = await Axiosclient.post('user_service/api/v1/auth/login',      
//     //     {
//     //       email: email,
//     //       password: password
          
//     //     }
//     //   );
//     //   // console.log('data', data);

//     //   console.log(response)
//       // if (!response.ok) {
//       //   return thunkAPI.rejectWithValue(data);
//       // }

      
//       // localStorage.setItem('token', data.token);
//       // return { ...data, username: name, email: email };

//       // return data ;
      
//     } catch (e) {
    
//       console.log('Error', e.response.data);
//       return thunkAPI.rejectWithValue(e.response.data);
//     }
//   }
// );



// // async function storeUserSession(token) {
// //   try {
// //       await EncryptedStorage.setItem(
// //           "user_token","Bearer "+token
          
// //       );

// //       // Congrats! You've just stored your first value!
// //   } catch (error) {
// //       // There was an error on the native side
// //   }
// // }
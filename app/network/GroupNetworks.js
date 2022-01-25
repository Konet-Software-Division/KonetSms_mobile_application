import Constant from '../constants/constant'
import { createAsyncThunk } from '@reduxjs/toolkit';
import Axiosclient from '../HttpClient'


export const createGroup = createAsyncThunk(
  'createGroups',
  async ( {group_name}, thunkAPI) => {
    try {
 
      const response = await Axiosclient.post('contact_service/api/v1/groups/create',{
        name: group_name
     });

      return response.data ;
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

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

export const deleteGroup = createAsyncThunk(
  'deleteGroup',
  async ( {GROUP_ID},thunkAPI) => {
    try {
 
      const response = await Axiosclient.delete('contact_service/api/v1/groups/'+GROUP_ID+'/delete-group');

      return response.data ;
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const updateGroup = createAsyncThunk(
  'updateGroup',
  async ( {GROUP_ID}, thunkAPI) => {
    try {
 
      const response = await Axiosclient.post('contact_service/api/v1/groups/'+GROUP_ID+'/update-group',{
        name: group_name
     });

      return response.data ;
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
)

export const getGroupContacts = createAsyncThunk(
  'getGroupContacts',
  async ( {GROUP_ID},thunkAPI) => {
    try {
 
      const response = await Axiosclient.get('contact_service/api/v1/groups/'+GROUP_ID+'/fetch-group-contacts');

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
import Constant from '../constants/constant'
import { createAsyncThunk } from '@reduxjs/toolkit';
import Axiosclient from '../HttpClient'



export const addContact = createAsyncThunk(
  'addContact',
  async ( values, thunkAPI) => {
    console.log("values")
    console.log(values)
    try {
    
      const response = await Axiosclient.post('contact_service/api/v1/contacts/create',
      {
        "firstName" : values.firstName,
        "lastName" : values.lastName,
        "dob" : values.dob,
        "gender" : values.gender,
        "phone" : values.phone,
        "groups" : values.groups,
    }
     );

      return response.data ;
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);


// export const getGroups = createAsyncThunk(
//   'getgroups',
//   async ( thunkAPI) => {
//     try {
 
//       const response = await Axiosclient.get('contact_service/api/v1/contacts/fetch-all-groups');

//       return response.data ;
      
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e);
//     }
//   }
// );

export const deleteContact= createAsyncThunk(
  'deleteContact',
  async ( {CONTACT_ID},thunkAPI) => {
    try {
 
      const response = await Axiosclient.delete('contact_service/api/v1/contacts/'+CONTACT_ID+'/delete-contact');

      return response.data ;
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const updateContact = createAsyncThunk(
  'updateContact',
  async ( {CONTACT_ID}, thunkAPI) => {
    try {
 
      const response = await Axiosclient.put('contact_service/api/v1/contacts/'+CONTACT_ID+'/update-contact',{
        name: group_name
     });

      return response.data ;
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
)


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




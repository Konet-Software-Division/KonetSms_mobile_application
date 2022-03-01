import Constant from '../constants/constant'
import { createAsyncThunk } from '@reduxjs/toolkit';
import Axiosclient from '../HttpClient'



export const addContact = createAsyncThunk(
  'addContact',
  async ( values, thunkAPI) => {
    console.log("values")
    console.log(values.phonenumber)
    try {
    
      const response = await Axiosclient.post('contact_service/api/v1/contacts/create',
      {
        "firstName" : values.firstname,
        "lastName" : values.lastname,
        "dob" : values.dob,
        "gender" : values.gender,
        "phone" : values.phonenumber,
        "groups" : ["60c8905c41cfe8eeaa17a183"]
        // "firstName" : "Something 2",
        // "lastName" : "Honest",
        // "dob" : "2019-12-01",
        // "gender" : "male",
        // "phone" : "08177171791",
        // "groups" : ["60b9ec2841cfe8608217a181"]
    }
     );
      console.log(response.data)
      return response.data ;
      
    } catch (e) {
      console.log(e)
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




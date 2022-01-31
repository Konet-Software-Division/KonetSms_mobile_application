import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import * as groupNetworks from '../network/GroupNetworks';
import {PayloadAction}  from "@reduxjs/toolkit";


const getGroupSlice  = createSlice({
   name: 'get_group',
  initialState: {
    groups: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    },
    updateDeletedGroup: (state,name) => {
      state.groups = state.groups.filter(item => item._id !==  name.payload) 
      return state;
    },
  },
  extraReducers: {
    [groupNetworks.getGroups.fulfilled]: (state, { payload }) => {
      // console.log('payload', payload.groups);
      state.groups = payload.groups;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [groupNetworks.getGroups.rejected]: (state, { payload }) => {
      // console.log('payload', payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [groupNetworks.getGroups.pending]: (state) => {
      state.isFetching = true;
    },



    [groupNetworks.deleteGroup.fulfilled]: (state, { payload }) => {
      console.log('GroupSlice_payload', payload.message);
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [groupNetworks.deleteGroup.rejected]: (state, { payload }) => {
      console.log('GroupSlice_payload', "paylosermhsgad");
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [groupNetworks.deleteGroup.pending]: (state) => {
      // state.isFetching = true;
    },

  },
  });
  
export const { updateDeletedGroup ,clearState} = getGroupSlice.actions;


export default getGroupSlice.reducer;



// export const userSelector = (state) => state.logi;
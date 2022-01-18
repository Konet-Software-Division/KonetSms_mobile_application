import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import * as groupNetworks from '../network/GroupNetworks';


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
  },
  });
  

export default getGroupSlice.reducer;



// export const userSelector = (state) => state.logi;
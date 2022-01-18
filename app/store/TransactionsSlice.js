import {createSlice} from '@reduxjs/toolkit'
import * as transactionsNetworks from '../network/TransactionsNetworks.js';


const getTransactions  = createSlice({
   name: 'get_Transactions ',
  initialState: {
    sms_transactions: [],
    transactions:[],  
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
  },
  extraReducers: {
    [transactionsNetworks.smsTransactions.fulfilled]: (state, { payload }) => {
      console.log('payload_transaction', payload.sms_transactions.cost);
      state.sms_transactions = payload.sms_transactions;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [transactionsNetworks.smsTransactions.rejected]: (state, { payload }) => {
      // console.log('payload', payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [transactionsNetworks.smsTransactions.pending]: (state) => {
      state.isFetching = true;
    },

    [transactionsNetworks.paymentTransactions.fulfilled]: (state, { payload }) => {
      console.log('payload_transaction', payload);
      state.transactions = payload.transactions;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [transactionsNetworks.paymentTransactions.rejected]: (state, { payload }) => {
      // console.log('payload', payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [transactionsNetworks.paymentTransactions.pending]: (state) => {
      state.isFetching = true;
    },
  },
  });
  

export default getTransactions.reducer;


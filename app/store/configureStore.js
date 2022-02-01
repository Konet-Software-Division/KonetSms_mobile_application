import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';

import authenticationSlice from './AuthenticationSlice';
import getGroupSlice from './GroupSlice';
import getContactsSlice from './ContactsSlice';
import smsScheduleSlice from './SmsScheduleSlice';
import transactionsSlice from './TransactionsSlice';
import EncryptedStorage from 'react-native-encrypted-storage';


const persistConfig = {
  key: 'root',
  storage: EncryptedStorage,
  blacklist: ['access_token']

};

const rootReducer = combineReducers({
  authenticationSlice: persistReducer(persistConfig, authenticationSlice),
  getGroupSlice: getGroupSlice,
  getContactsSlice: getContactsSlice,
  smsScheduleSlice: smsScheduleSlice,
  transactionsSlice: transactionsSlice,
    // TempReducer:TempReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

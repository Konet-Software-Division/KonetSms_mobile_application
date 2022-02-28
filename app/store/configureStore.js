import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';

import authenticationSlice from './AuthenticationSlice';
import getGroupSlice from './GroupSlice';
import getContactsSlice from './ContactsSlice';
import addContactSlice from './AddContactSlice';

import smsScheduleSlice from './SmsScheduleSlice';
import transactionsSlice from './TransactionsSlice';
import EncryptedStorage from 'react-native-encrypted-storage';


const persistConfig = {
  key: 'root',
  storage: EncryptedStorage,
  blacklist: ['access_token']

};

const combinedReducer = combineReducers({
  authenticationSlice: persistReducer(persistConfig, authenticationSlice),
  getGroupSlice: getGroupSlice,
  getContactsSlice: getContactsSlice,
  addContactSlice: addContactSlice,
  smsScheduleSlice: smsScheduleSlice,
  transactionsSlice: transactionsSlice,
  
    // TempReducer:TempReducer
});

// const rootReducer = (state, action) => {
//   if (action.type === 'counter/logout') {
//     state = undefined;
//   }
//   return combinedReducer(state, action);
// };

export const store = createStore(combinedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';

import loginSlice from './LoginSlice';
import getGroupSlice from './GetGroupSlice';
import getContactsSlice from './GetContactsSlice';


import EncryptedStorage from 'react-native-encrypted-storage';


const persistConfig = {
  key: 'root',
  storage: EncryptedStorage,
  blacklist: ['access_token']

};

const rootReducer = combineReducers({
  loginSlice: persistReducer(persistConfig, loginSlice),
  getGroupSlice: getGroupSlice,
  getContactsSlice: getContactsSlice,

    // TempReducer:TempReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

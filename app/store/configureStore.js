import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import loginSlice from '../store/LoginSlice';

import EncryptedStorage from 'react-native-encrypted-storage';


const persistConfig = {
  key: 'root',
  storage: EncryptedStorage,
  blacklist: ['access_token']

};

const rootReducer = combineReducers({
  loginSlice: persistReducer(persistConfig, loginSlice),
    // TempReducer:TempReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

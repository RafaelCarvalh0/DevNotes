import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import listSliceReducer from '../features/counter/listSlice';
import AsyncStorage from '@react-native-community/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  list: listSliceReducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconcilier: hardSet
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
    //Posso incrementar quantos reducers eu quiser aqui
  
});



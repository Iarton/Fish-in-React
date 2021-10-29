import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import fish from './slices/fishSlice';

const reducer = combineReducers({
  fish
});
const store = configureStore({
  reducer,
});
export default store;
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import fishSlice from './slices/fishSlice';

const reducer = combineReducers({
    fishSlice
})
const store = configureStore({
  reducer,
})
export default store;
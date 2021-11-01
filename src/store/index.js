import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import fish from './fish/slice/index';

const reducer = combineReducers({
  fish
});
const store = configureStore({
  reducer,
});
export default store;
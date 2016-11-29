import { combineReducers } from 'redux';
import user from './user';
import expenses from './expenses';
import modal from './modal';
import date from './date';

export default combineReducers({
  user,
  expenses,
  modal,
  date
})

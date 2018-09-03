import { combineReducers } from 'redux';
import reposReducer from './reposReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  reposReducer,
  searchReducer
})
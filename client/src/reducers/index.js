import { combineReducers } from 'redux';
import fetchData from './fetchdata';

export default combineReducers({
  data: fetchData,
});

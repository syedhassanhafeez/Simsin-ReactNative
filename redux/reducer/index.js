import {combineReducers} from 'redux';
import hrReducer from './hr';
import academicsReducer from './academics';
import authReducer from './auth';

export default combineReducers({
  authReducer: authReducer,
  hrReducer: hrReducer,
  academicsReducer: academicsReducer,
});

import {combineReducers} from 'redux';
import hrReducer from './hr';
import academicsReducer from './academics';
import loaderReducer from './loader';
import accountsReducer from './accounts';
import authReducer from './auth';

export default combineReducers({
  authReducer: authReducer,
  hrReducer: hrReducer,
  academicsReducer: academicsReducer,
  accountsReducer: accountsReducer,
  loaderReducer: loaderReducer,
});

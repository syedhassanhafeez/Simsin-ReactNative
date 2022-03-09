import {combineReducers} from 'redux';
import hrReducer from './hr';
import academicsReducer from './academics';
import loaderReducer from './loader';
import accountsReducer from './accounts';
import authReducer from './auth';
import feeReducer from './fee';

export default combineReducers({
  authReducer: authReducer,
  hrReducer: hrReducer,
  academicsReducer: academicsReducer,
  accountsReducer: accountsReducer,
  loaderReducer: loaderReducer,
  feeReducer: feeReducer,
});

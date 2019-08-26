import accountReducers from './accountReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  account: accountReducers
});

export default rootReducer;

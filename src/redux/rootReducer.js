import { combineReducers } from 'redux';
import counter from './counter';
import dummy from './dummy';

const rootReducer = combineReducers({
  counter,
  dummy,
});

export default rootReducer;

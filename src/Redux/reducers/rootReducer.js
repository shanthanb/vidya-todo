import { combineReducers } from 'redux';

import mainReducer from './main.js';

const rootReducer = combineReducers({
  main: mainReducer,
});

export default rootReducer;
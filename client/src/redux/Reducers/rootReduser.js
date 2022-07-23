import { combineReducers } from 'redux';
import catReducer from './catReducer';

const rootReducer = combineReducers({
  cat: catReducer,
});

export default rootReducer;

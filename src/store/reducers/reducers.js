import { combineReducers } from 'redux';
import inputValueReducer from './inputValueReducer';
import countriesDataReducer from './countriesDataReducer';

const reducers = combineReducers({
  input: inputValueReducer,
  data: countriesDataReducer,
});

export default reducers;
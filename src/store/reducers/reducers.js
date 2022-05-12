import { combineReducers } from 'redux';
import inputValueReducer from './inputValueReducer';
import countriesDataReducer from './countriesDataReducer';
import toggleIsFetchingReducer from './toggleIsFetchingReducer';

const reducers = combineReducers({
	input: inputValueReducer,
	data: countriesDataReducer,
	fetching: toggleIsFetchingReducer,
});

export default reducers;

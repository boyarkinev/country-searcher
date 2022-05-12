import CHANGE_INPUT_VALUE_ACTION from '../actions/changeInputValueAction';
import initialState from '../initialState';

const inputValueReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_INPUT_VALUE_ACTION:
			return { ...state, inputValue: action.payload };

		default:
			return state;
	}
};

export default inputValueReducer;

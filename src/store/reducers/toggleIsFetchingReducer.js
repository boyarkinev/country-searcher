import TOGGLE_IS_FETCHING_ACTION from '../actions/toggleIsFetchingAction';
import initialState from '../initialState';

const toggleIsFetchingReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_IS_FETCHING_ACTION:
			return { ...state, isFetching: action.payload };

		default:
			return state;
	}
};

export default toggleIsFetchingReducer;

import TOGGLE_IS_FETCHING_ACTION from '../actions/toggleIsFetchingAction';

const toggleIsFetchingActionCreator = value => {
	return {
		type: TOGGLE_IS_FETCHING_ACTION,
		payload: value,
	};
};

export default toggleIsFetchingActionCreator;

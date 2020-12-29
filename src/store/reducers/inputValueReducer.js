import CHANGE_INPUT_VALUE_CATION from '../actions/changeInputValueAction';
import initialState from '../initialState';

const inputValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE_CATION:
      return { ...state, inputValue: action.payload };

    default:
      return state;
  }
};

export default inputValueReducer;

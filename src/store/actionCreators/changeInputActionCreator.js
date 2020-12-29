import CHANGE_INPUT_VALUE_CATION from '../actions/changeInputValueAction';

const changeInputActionCreator = inputValue => {
  return { 
    type: CHANGE_INPUT_VALUE_CATION,
    payload: inputValue
  };
}

export default changeInputActionCreator;
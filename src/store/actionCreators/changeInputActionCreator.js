import CHANGE_INPUT_VALUE_ACTION from '../actions/changeInputValueAction';

const changeInputActionCreator = inputValue => {
  return { 
    type: CHANGE_INPUT_VALUE_ACTION,
    payload: inputValue
  };
}

export default changeInputActionCreator;
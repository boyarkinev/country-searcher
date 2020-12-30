import CHANGE_COUNTRIES_DATA_ACTION from '../actions/changeCountriesDataAction';
import initialState from '../initialState';

const countriesDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COUNTRIES_DATA_ACTION:
      return { ...state, countriesData: action.payload };
              /* Взяли state целиком, раскукожили и заменили
              в нем значение countriesData значением
              из changeCountriesDataActionCreator */
    default:
      return state;
  }
};

export default countriesDataReducer;

import CHANGE_COUNTRIES_DATA from '../actions/changeCountriesData';

const changeCountriesDataActionCreator = data => {
  return { 
    type: CHANGE_COUNTRIES_DATA,
    payload: data
  };
}

export default changeCountriesDataActionCreator;
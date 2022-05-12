import CHANGE_COUNTRIES_DATA_ACTION from '../actions/changeCountriesDataAction';

const changeCountriesDataActionCreator = data => {
	return {
		type: CHANGE_COUNTRIES_DATA_ACTION,
		payload: data,
	};
};

export default changeCountriesDataActionCreator;

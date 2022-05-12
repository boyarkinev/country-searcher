import { bindActionCreators } from 'redux';
import changeInputActionCreator from './actionCreators/changeInputActionCreator';
import changeCountriesDataActionCreator from './actionCreators/changeCountriesDataActionCreator';
import toggleIsFetchingActionCreator from './actionCreators/toggleIsFetchingActionCreator';

const mapDispatchToProps = component => {
	switch (component) {
		case 'SearchForm': {
			return dispatch => {
				return {
					changeInputValue: bindActionCreators(
						changeInputActionCreator,
						dispatch
					),
					toggleIsFetching: bindActionCreators(
						toggleIsFetchingActionCreator,
						dispatch
					),
				};
			};
		}
		case 'CountrySearch': {
			return dispatch => {
				return {
					changeData: bindActionCreators(
						changeCountriesDataActionCreator,
						dispatch
					),
				};
			};
		}
		default:
			return undefined;
	}
};

export default mapDispatchToProps;

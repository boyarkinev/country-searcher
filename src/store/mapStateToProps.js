const mapStateToProps = (component) => {
	switch(component) {
		case 'SearchForm': {
			return state => {
				return {
					inputValue: state.input.inputValue,
					isFetching: state.fetching.isFetching,
				}
			};
		}
		case 'CountrySearch': {
			return state => {
				return {
					data: state.data.countriesData, // Пришло из reducers
				}
			};
		}
		default: return undefined;
	}
};

export default mapStateToProps;

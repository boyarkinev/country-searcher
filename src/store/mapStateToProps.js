const mapStateToProps = (component) => {
	switch(component) {
		case 'SearchForm': {
			return state => {
				return {
					inputValue: state.input.inputValue,
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

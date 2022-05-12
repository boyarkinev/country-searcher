import './CountrySearch.css';

import React, { useState } from 'react';

import SearchResult from '../SearchResult/SearchResult';
import SearchFormContainer from '../SearchForm/SearchFormContainer';

const CountrySearch = props => {
	const { data } = props;
	const [customSelectValue, setCustomSelectValue] = useState('50');

	const handleListClipping = event => {
		setCustomSelectValue(event.target.value);
		CountriesList.slice(0, `${event.target.value}`);
	};

	const CountriesList = data.map(country => (
		<SearchResult country={country} key={country.ccn3} />
	));

	return (
		<>
			<div className='search-items'>
				<h1 className='title'>Country Search Service</h1>

				<SearchFormContainer
					countriesData={props}
					handleListClipping={handleListClipping}
				/>
				<ul className='list'>
					{CountriesList.slice(0, `${customSelectValue}`)}
				</ul>
			</div>
		</>
	);
};

export default CountrySearch;

import './SearchResult.css';

import React, { useState } from 'react';
import CountryDetails from '../CountryDetails/CountryDetails';

const SearchResult = ({ country }) => {
	const { name, capital, flags } = country;
	const [isActive, setIsActive] = useState(false);

	const handleCleanSearch = event => {
		return !isActive
			? event.target && setIsActive(true)
			: event.target && setIsActive(false);
	};

	return (
		<>
			<li
				className='item-container'
				onClick={handleCleanSearch}
				onKeyPress={handleCleanSearch}
				tabIndex='0'>
				<p className='text'>{name.common}</p>
				<p className='text'>{capital}</p>
				<img src={flags.svg} alt='Flag' className='flag' />
			</li>
			{<CountryDetails country={country} isActive={isActive} />}
		</>
	);
};

export default SearchResult;

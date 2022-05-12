import './CountryDetails.css';

import React from 'react';
import cn from 'classnames';

const CountryDetails = ({ country, isActive }) => {
	console.log('🚀 ~ country', country);
	let formatter = new Intl.NumberFormat();

	return (
		<>
			<ul className={cn('search-result desktop', { isShown: isActive })}>
				<li className='search-result__header'>Region</li>
				<li className='search-result__header'>Population</li>
				<li className='search-result__header'>Area</li>
				<li className='search-result__header'>Time Zones</li>
				<li className='search-result__header'>Code</li>
				<li className='search-result__header'>Domain</li>
				<li className='search-result__text'>{country.region}</li>
				<li className='search-result__text'>
					{formatter.format(country.population)}
				</li>
				<li className='search-result__text'>
					{formatter.format(country.area)}
				</li>
				<li className='search-result__text'>
					{country.timezones.map(timezone => (
						<p className='search-result__text' key={timezone}>
							{timezone}
						</p>
					))}
				</li>
				<li className='search-result__text'>{country.ccn3}</li>
				<li className='search-result__text'>{country.tld}</li>
			</ul>

			<ul className={cn('search-result mobile', { isShown: isActive })}>
				<li className='search-result__header mobile'>Region</li>
				<li className='search-result__text mobile'>{country.region}</li>
				<li className='search-result__header mobile'>Population</li>
				<li className='search-result__text mobile'>
					{formatter.format(country.population)}
				</li>
				<li className='search-result__header mobile'>Area</li>
				<li className='search-result__text mobile'>
					{formatter.format(country.area)}
				</li>
				<li className='search-result__header mobile'>Time Zones</li>
				<li className='search-result__text mobile'>
					{country.timezones.map(timezone => (
						<p className='search-result__text' key={timezone}>
							{timezone}
						</p>
					))}
				</li>
				<li className='search-result__header mobile'>Code</li>
				<li className='search-result__text mobile'>{country.ccn3}</li>
				<li className='search-result__header mobile'>Domain</li>
				<li className='search-result__text mobile'>{country.tld}</li>
			</ul>
		</>
	);
};

export default CountryDetails;

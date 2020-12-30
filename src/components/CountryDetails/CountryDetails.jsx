import './CountryDetails.css'

import React from 'react';
import cn from 'classnames';

const CountryDetails = (props) => {

  const { country, isActive } = props;

  return (
    <>
      <ul className={cn('search-result', { isShown: isActive })}>
        <li className='search-result__header'>Region</li>
        <li className='search-result__header'>Population</li>
        <li className='search-result__header'>Area</li>
        <li className='search-result__header'>Time Zones</li>
        <li className='search-result__header'>Code</li>
        <li className='search-result__header'>Domain</li>
        <li className='search-result__text'>{country.region}</li>
        <li className='search-result__text'>{country.population}</li>
        <li className='search-result__text'>{country.area}</li>
        <li className='search-result__text'>
          {country.timezones.map(timezone => (
            <p className='search-result__text'>{timezone}</p>
          ))}
        </li>
        <li className='search-result__text'>{country.alpha2Code}</li>
        <li className='search-result__text'>{country.topLevelDomain}</li>
      </ul>
    </>
  );
}

export default CountryDetails;
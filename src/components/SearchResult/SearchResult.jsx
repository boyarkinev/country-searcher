import './SearchResult.css';

import React, { useState } from 'react';
import CountryDetails from '../CountryDetails/CountryDetails';

const SearchResult = (props) => {

  const { name, capital, flag } = props.country;
  const [ isActive, setIsActive ] = useState(false);
  
  const handleCleanSearch = (event) => {
    return !isActive
      ? event.target && setIsActive(true)
      : event.target && setIsActive(false);
  };

  return (
    <>
    <li className='item-container' onClick={handleCleanSearch} onKeyPress={handleCleanSearch} tabIndex='0'>
      <p className='text'>{name}</p>
      <p className='text'>{capital}</p>
      <img src={flag} alt='Flag' className='flag' />
    </li>
    {
      <CountryDetails country={ props.country } isActive={isActive} />
    }
    </>
  );
};

export default SearchResult;
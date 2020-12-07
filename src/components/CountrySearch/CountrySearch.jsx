import './CountrySearch.css';

import React, { useState } from 'react';

import getCountries from '../utils/get-countries';
import CountryList from './СountryList/CountryList';
import DropdownList from './DropdownList/DropdownList';

const CountrySearch = () => {
  const [input, setInput] = useState('');
  const [countriesData, setCountriesData] = useState([]);
  const [customSelectValue, setCustomSelectValue] = useState('50');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    !e.target.value
      ? setCountriesData([])
      : getCountries(e.target.value).then(res => setCountriesData(res));
  };
  
  const countriesList = countriesData.map((country, i) => (
    <CountryList
      name={country.name}
      capital={country.capital}
      flag={country.flag}
      key={i}
    />
  ));

  const handleSelectChange = (e) => {
    setCustomSelectValue(e.target.value);
    if (e.target.value) {
      countriesList.slice(0, `${e.target.value}`)
    }
  }

  return (
    <div>
      <h1 className='title'>Country Search Service</h1>
      <form className='form'>
        <input
          type='text'
          placeholder='Search...'
          onChange={handleInputChange}
          value={input}
          className='input'
        />
        <DropdownList value={customSelectValue} onChange={handleSelectChange} />
      </form>
      <ul className='list'>{countriesList.slice(0, `${customSelectValue}`)}</ul>
    </div>
  );
};

export default CountrySearch;

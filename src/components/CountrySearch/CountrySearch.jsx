import './CountrySearch.css';

import React, { useState } from 'react';

import Country from '../Сountry/Country';
import SearchFormContainer from '../SearchForm/SearchFormContainer';

const CountrySearch = (props) => {

  const { data } = props
  const [customSelectValue, setCustomSelectValue] = useState('50');
  
  const handleSelectChange = (event) => {
    setCustomSelectValue(event.target.value);
    CountriesList.slice(0, `${event.target.value}`);
  };
  
  const CountriesList = data.map(country => (
    <Country country={country} key={country.numericCode} />
  ));

  return (
    <>
      <div className='search-items'>
        <h1 className='title'>Country Search Service</h1>

        <SearchFormContainer
          countriesData={props}
          handleSelectChange={handleSelectChange}
        />

        <ul className='list'>
          {CountriesList.slice(0, `${customSelectValue}`)}
        </ul>
      </div>
    </>
  );
};

export default CountrySearch;

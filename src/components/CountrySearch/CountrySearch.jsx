import './CountrySearch.css';
import cn from 'classnames';

import React, { useState } from 'react';

import CountryList from './СountryList/CountryList';
import DropdownList from './DropdownList/DropdownList';
import isEng from '../../utils/validators';
import getCountries from '../../api/CountriesApi';
import Preloader from '../../commons/Preloader/Preloader';

const CountrySearch = () => {
  const [input, setInput] = useState('');
  const [countriesData, setCountriesData] = useState([]);
  const [customSelectValue, setCustomSelectValue] = useState('50');
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    if (!isEng(e.target.value || e.target.value === '')) {
      return e.target.value.trim() && setIsActive(true);
    } else {
      setIsActive(false);
    }

    setInput(e.target.value);
    !e.target.value
      ? setCountriesData([])
      : getCountries(e.target.value)
          .then(res => {
            setCountriesData(res);
          })
          .catch(err => console.log(err));
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
    countriesList.slice(0, `${e.target.value}`);
  };

  return (
    <div>
      <h1 className='title'>Country Search Service</h1>
      <p className={cn('message-rule', { warn: isActive })}>
        The text must be typed in Latin letters
      </p>
      <form className='form'>
        <input
          type='text'
          placeholder='Search...'
          onChange={handleInputChange}
          value={input}
          className='input'
        />
        <DropdownList onChange={handleSelectChange} />
      </form>

      <Preloader loading={isLoading} />

      <ul className='list'>{countriesList.slice(0, `${customSelectValue}`)}</ul>
    </div>
  );
};

export default CountrySearch;

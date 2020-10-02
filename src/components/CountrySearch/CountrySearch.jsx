import React, { useState } from 'react';
import CountriesApi from './../modules/CountriesApi';
import CountryList from './СountryList/CountryList';
import DropdownList from './DropdownList/DropdownList';
import classes from './CountrySearch.module.css';

const CountrySearch = () => {
  const countriesApi = new CountriesApi();

  const [input, setInput] = useState('');
  const [countriesData, setCountriesData] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    if (!e.target.value) {
      setCountriesData([]);
    } else {
      countriesApi.getCountries(e.target.value).then((res) => {
        setCountriesData(res);
      });
    }
  };

  const countriesList = countriesData.map((country, i) => (
    <CountryList
      name={country.name}
      capital={country.capital}
      flag={country.flag}
      key={i}
    />
  ));

  return (
    <div>
      <h1 className={classes.title}>Country Search Service</h1>
      <form className={classes.form}>
        <input
          type='text'
          placeholder='Search...'
          onChange={handleChange}
          value={input}
          className={classes.input}
        />
        <DropdownList />
      </form>
        <ul className={classes.list}>{countriesList}</ul>
    </div>
  );
};

export default CountrySearch;

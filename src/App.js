import React, { useState } from 'react';
import './App.css';
import CountryList from './components/countryList/CountryList';
import CountriesApi from './components/modules/CountriesApi';
import DropdownList from './components/DropdownList/DropdownList';

const countriesApi = new CountriesApi();

const App = () => {

  const [input, setInput] = useState('');
  const [countriesData, setCountriesData] = useState([])
  const [dropdown, setDropdown] = useState()

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    if (!e.target.value) {
      setCountriesData([])
    } else {
      countriesApi.getCountries(e.target.value).then((res) => {
        setCountriesData(res)
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
    <div className='App'>
      <div className='field'>
        <input
          type='text'
          placeholder='Search...'
          onChange={handleChange}
          value={input}
          className='input'
        />
        <DropdownList />
        <ul className='list'>
          {countriesList}
        </ul>
      </div>
    </div>
  );
};

export default App;

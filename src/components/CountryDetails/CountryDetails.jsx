import React from 'react';
import './CountryDetails.css'

const CountryDetails = (props) => {

  const {name, capital, flag, region, population, area, timezones, alpha2Code, topLevelDomain} = props.country;

  return (
    <>
      {/* <div className='item-container'>
        <p className='text'>{name}</p>
        <p className='text'>{capital}</p>
        <img src={flag} alt='Flag' className='flag' />
      </div> */}
      <ul className='search-result'>
        <li className='search-result_header'>Region</li>
        <li className='search-result_header'>Population</li>
        <li className='search-result_header'>Area</li>
        <li className='search-result_header'>Time Zones</li>
        <li className='search-result_header'>Code</li>
        <li className='search-result_header'>Domain</li>
        <li className='search-result-item'>{region}</li>
        <li className='search-result-item'>{population}</li>
        <li className='search-result-item'>{area}</li>
        <li className='search-result-item'>{timezones}</li>
        <li className='search-result-item'>{alpha2Code}</li>
        <li className='search-result-item'>{topLevelDomain}</li>
      </ul>
    </>
  )
}

export default CountryDetails;
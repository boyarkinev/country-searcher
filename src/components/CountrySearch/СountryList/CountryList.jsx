import './CountryList.css';

import React from 'react';

const CountryList = (props) => {
  return (
    <li className='itemContainer'>
      <p className='text'>{props.name}</p>
      <p className='text'>{props.capital}</p>
      <img src={props.flag} alt='Flag' className='flag' />
    </li>
  );
};

export default CountryList;
import './Country.css';

import React from 'react';

const Country = (props) => {

  const {name, capital, flag} = props.country;

  return (
    <li className='item-container'>
      <p className='text'>{name}</p>
      <p className='text'>{capital}</p>
      <img src={flag} alt='Flag' className='flag' />
    </li>
  );
};

export default Country;
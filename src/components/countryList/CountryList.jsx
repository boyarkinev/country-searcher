import React from 'react';
import classes from './CountryList.module.css';

const CountryList = (props) => {
  return (
    <li className={classes.itemContainer}>
      <p className={classes.text}>{props.name}</p>
      <p className={classes.text}>{props.capital}</p>
      <img src={props.flag} alt='Flag' className={classes.flag} />
    </li>
  );
};

export default CountryList;
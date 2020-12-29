import './SearchForm.css'

import React, { useState } from 'react';
import ResultList from '../ResultList/ResultList'
import isEng from '../../utils/validators';
import cn from 'classnames';
import countriesApi from '../../services/countriesApi';

const SearchForm = (props) => {

  const { inputValue, changeInputValue, countriesData } = props;
  const [ isActive, setIsActive ] = useState(false);

  const handleInputChange = (event) => {
    
    if (!isEng(event.target.value || event.target.value === '')) {
      return event.target.value.trim() && setIsActive(true);
    } else {
      setIsActive(false);
    }

    changeInputValue(event.target.value)

    event.target.value === ''
    ? countriesData.changeData([])
    : countriesApi(event.target.value)
        .then(res => {
          countriesData.changeData(res);
        })
        .catch(err => console.log(err));
  }

  return (
    <>
      <span className={cn('message-rule', { warn: isActive })}>
        The text must be typed in Latin letters
      </span>
      <form className='form'>
        <input
          type='text'
          placeholder='Search...'
          onChange={handleInputChange}
          value={inputValue}
          className='input'
        />
        <ResultList onChange={props.handleSelectChange} />
      </form>
    </>
  )
}
export default SearchForm;
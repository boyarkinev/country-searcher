import './SearchForm.css'

import React, { useState } from 'react';
import ListFilter from '../ListFilter/ListFilter'
import isEng from '../../utils/validators';
import cn from 'classnames';
import countriesApi from '../../services/countriesApi';
import Preloader from '../../commons/Preloader/Preloader';

const SearchForm = (props) => {

  const { inputValue, changeInputValue, countriesData, toggleIsFetching, isFetching } = props;
  const [ isActive, setIsActive ] = useState(false);

  const handleInputChange = (event) => {
    
    if (!isEng(event.target.value || event.target.value === '')) {
      return event.target.value.trim() && setIsActive(true);
    } else {
      setIsActive(false);
    }

    changeInputValue(event.target.value)

    toggleIsFetching(true);

    event.target.value === ''
    ? countriesData.changeData([])
    : countriesApi(event.target.value)
      .then(res => {
        countriesData.changeData(res);
        toggleIsFetching(false);
      })
      .catch(err => {console.log(err)});
  }

  return (
    <>
      <form className='form'>
      <span className={cn('message-rule', { warn: isActive })}>
        The text must be typed in Latin letters
      </span>
        <input
          type='text'
          placeholder='Search...'
          onChange={handleInputChange}
          value={inputValue}
          className='input'
        />
        <ListFilter onChange={props.handleListClipping} />
        <div className='preloader'>
          { isFetching && <Preloader /> }
        </div>
      </form>
    </>
  )
}
export default SearchForm;
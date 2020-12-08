import './DropdownList.css'

import React from 'react';

const DropdownList = (props) => {

  return (
    <select className='select' defaultValue="50" onChange={props.onChange}>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
    </select>
  );
};

export default DropdownList;
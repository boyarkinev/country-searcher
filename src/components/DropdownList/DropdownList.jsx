import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import classes from './DropdownList.module.css'

const DropdownList = () => {

  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Select className={classes.select} defaultValue="50" onChange={onChange}>
      <Option value="ten">10</Option>
      <Option value="twenty">20</Option>
      <Option value="fifty">50</Option>
    </Select>
  );
};

export default DropdownList;
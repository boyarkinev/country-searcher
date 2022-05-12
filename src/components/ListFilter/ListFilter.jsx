import './ListFilter.css';

import React from 'react';

const ListFilter = ({ onChange }) => {
	return (
		<select className='select' defaultValue='50' onChange={onChange}>
			<option value='10'>10</option>
			<option value='20'>20</option>
			<option value='50'>50</option>
		</select>
	);
};

export default ListFilter;

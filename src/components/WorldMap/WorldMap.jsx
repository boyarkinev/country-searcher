import './WorldMap.css';
import world from '../../images/world.svg';

import React from 'react';

const WorldMap = (props) => {

  return (
    <>
      <img src={world} alt="World Map" className='map-container'/>
    </>
  )
}

export default WorldMap;
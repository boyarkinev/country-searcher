import './WorldMap.css'

import React from 'react';

const WorldMap = (props) => {

  return (
    <>
      <img src={props.world} alt="World Map" className='map-container'/>
    </>
  )
}

export default WorldMap;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const MO = (props) => {
  const { module_data } = props
  return (
    <div
      style={{ padding: '20px', display: 'flex', flex: 1, background: 'green' }}
    >
      <div>
        <Link to="/ice_pages/home">HOME</Link>
        <Link to="/ice_pages/page15">page15</Link>
        <Link to="/ice_pages/ice_home">ice_home</Link>
        project1-------module one</div>
      <div>{JSON.stringify(module_data)} </div>
    </div>
  )
}

export default MO
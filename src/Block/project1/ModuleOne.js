import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const MO = (props) => {
  const { module_data } = props
  return (
    <div
      style={{ padding: '20px', display: 'flex', flex: 1, background: 'green' }}
    >
      <div>
        <Link to="/">HOME</Link>
        <Link to="/page15">page15</Link>
        <Link to="/get_item">get_item</Link>
        project1-------module one</div>
      <div>{JSON.stringify(module_data)} </div>
    </div>
  )
}

export default MO
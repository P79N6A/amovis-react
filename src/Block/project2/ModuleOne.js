import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


const MO = (props) => {
  const { module_data } = props
  return (
    <div 
      style={{ padding: '20px', display: 'flex', flex: 1, background: 'green'}}
    >
    <div>
    {/* <Link to="/page15">page15</Link> */}
      project2-------module one</div>
      <div>{ JSON.stringify(module_data) } </div>
    {/* <div style={{ padding: 18, border: '1px solid black'}}>子层{children}</div> */}
    </div>
  )
}

export default MO
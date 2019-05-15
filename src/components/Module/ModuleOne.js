import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const MO = ({ children }) => {
  
  return (
    <div 
      style={{ padding: '20px', display: 'flex', flex: 1, background: 'green'}}
    >
    <div>
    <Link to="/page15">page15</Link>
      module one</div>
    {/* <div style={{ padding: 18, border: '1px solid black'}}>子层{children}</div> */}
    </div>
  )
}

export default MO
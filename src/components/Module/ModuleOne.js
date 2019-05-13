import React, { Component } from 'react';


const MO = ({ children }) => {
  return (
    <div 
      style={{ padding: '20px', display: 'flex', flex: 1, background: 'green'}}
    >
    <div>module one</div>
    {/* <div style={{ padding: 18, border: '1px solid black'}}>子层{children}</div> */}
    </div>
  )
}

export default MO
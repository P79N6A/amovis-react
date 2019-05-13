import React, { Component } from 'react';



const MT = ({ children }) => {
  return (
    <div  
      style={{ padding: '20px', display: 'flex', flex: 2, background: 'red'}}>
      <div>module two</div>
      {/* <div style={{ padding: 18, border: '1px solid black'}}>子层{children}</div> */}
    </div>
  )
}

export default MT
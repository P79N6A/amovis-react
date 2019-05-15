import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const MT = (props) => {
  const { module_data } = props
  return (
    <div  
      style={{ padding: '20px', display: 'flex', flex: 2, background: 'red'}}>
      <Link to="/">首页</Link>
      <div>project1-------module two</div>
      <div>{ JSON.stringify(module_data) } </div>
      {/* <div style={{ padding: 18, border: '1px solid black'}}>子层{children}</div> */}
    </div>
  )
}

export default MT
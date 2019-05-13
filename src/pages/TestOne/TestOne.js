import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Test from '../../components/Test';
import {Button } from '@alifd/next';


@withRouter
export default class TestOne extends Component {

  // state = {
  //   slides: [
  //     { url: 'https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png', text: 'Tape Player Skin Design Competition' },
  //     { url: 'https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg', text: 'Mobile Phone Taobao Skin Call' },
  //   ],
  //   data: [
  //     {
  //       'field': 'jobid',
  //       'text': '工号',
  //       'errorMessage': '请输入工号',
  //       'required': true,
  //       'type': 'int',
  //       'value': 100
  //     }, {
  //       'field': 'username',
  //       'text': '用户名',
  //       'errorMessage': '请输入用户名',
  //       'required': true,
  //       'type': 'char',
  //       'value': 'hello world'
  //     },
  //   ]
  // }

  componentDidMount() {
    console.log(this.props)
  }

  // addSlider = () => {
  //   this.setState((prevState) => {
  //     return {
  //       slides: [
  //         ...prevState.slides,
  //         { url: 'https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg', text: 'Design Enabling Public Welfare' },
  //         { url: 'https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg', text: 'Amoy Doll Design Competition' }
  //       ]
  //       // slides: [
  //       //   { url: 'https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg', text: 'Design Enabling Public Welfare' },
  //       //   { url: 'https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg', text: 'Amoy Doll Design Competition' }
  //       // ]
  //     }
  //   })
  // }

  // changeData = () => {
  //   this.setState((prevState) => {
  //     return {
  //       data: prevState.data.concat({
  //         'field': 'password',
  //         'text': '密码',
  //         'errorMessage': '请输入密码',
  //         'required': true,
  //         'type': 'password',
  //         'value': 'hello world'
  //       })
  //     }
  //   })
  // }

  render() {
    let data = this.props.data
    return (
      <div>
        {/* <Button onClick={() => { this.addSlider() }}>更改Banner数据</Button> */}
        {/* <Button onClick={() => { this.changeData() }}>更改数据</Button> */}
        {/* <Test data={data} /> */}
      </div>
    );
  }
}

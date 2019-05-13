import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Checkbox, NumberPicker, Button } from '@alifd/next';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    fixedSpan: 10
  },
  wrapperCol: {
    span: 14
  }
};


@withRouter
export default class TestForm extends Component {

  state = {
    data: [
      {
        'field': 'jobid',
        'text': '工号',
        'errorMessage': '请输入工号',
        'required': true,
        'type': 'int',
        'value': 100
      }, {
        'field': 'username',
        'text': '用户名',
        'errorMessage': '请输入用户名',
        'required': true,
        'type': 'char',
        'value': 'hello world'
      },
    ]
  }

  changeData = () => {
    this.setState((prevState) => {
      return {
        data: prevState.data.concat({
          'field': 'password',
          'text': '密码',
          'errorMessage': '请输入密码',
          'required': true,
          'type': 'char',
          'value': 'hello world'
        })
      }
    })
  }

  handleSubmit = (values) => {
    console.log('Get form value:', values);
  }

  getItem = (item) => {
    switch (item.type) {
      case 'int':
        return <NumberPicker style={{ width: '100%' }} />;
        break;
      case 'char':
        return <Input />;
      case 'password':
        return <Input htmlType="password" />
        break;
    }
  }

  render() {
    return (
      <div>
        <Button onClick={() => { this.changeData() }}>更改数据</Button>
        <Form style={{ width: '60%' }} {...formItemLayout} >
          {
            this.state.data.map((item, index) => {
              return (
                <FormItem
                  key={index}
                  label={item.text}
                  hasFeedback
                  required={item.required}
                  requiredMessage={item.errorMessage}
                >
                  {this.getItem(item)}
                </FormItem>
              )
            })
          }
          <FormItem label=" ">
            <Form.Submit onClick={this.handleSubmit}>提交</Form.Submit>
          </FormItem>
          {/* <FormItem label="userName:">
            <p>Fixed Name</p>
          </FormItem>
          <FormItem label="password:">
            <Input htmlType="password" name="pass" placeholder="Please Enter Password" />
          </FormItem>
          <FormItem label="Note:" help="something">
            <Input.TextArea placeholder="something" name="remark" />
          </FormItem>
          <FormItem label="Agreement:">
            <Checkbox name="agreement" defaultChecked>Agree</Checkbox>
          </FormItem>
           */}
        </Form>
      </div>
    );
  }
}

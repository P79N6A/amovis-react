import React, { Component } from 'react';
var ICEC = require('@alifd/next');
// import { Form, Input, Checkbox, NumberPicker, Button, Slider } from '@alifd/next';
// const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    fixedSpan: 10
  },
  wrapperCol: {
    span: 14
  }
};

const cre = React.createElement

class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

export default class Test extends Component {

  componentDidMount() {
  }

  handleSubmit = (values) => {
    console.log('Get form value:', values);
  }

  getItem = (item) => {
    switch (item.type) {
      case 'int':
        return <NumberPicker name={item.field} style={{ width: '100%' }} />;
        break;
      case 'char':
        return <Input name={item.field} />;
      case 'password':
        return <Input htmlType="password" name={item.field} />
        break;
    }
  }


  getView = (data) => {
    return (
      <div>
        {
          data.sections.map((e, i) => {
            return (
              <div key={i}>
                {e.tag}
                {
                  cre(ICEC[e.tag], null, this.getChildren(e))
                }
              </div>
            )
          })
        }
      </div>
    )
  }

  getChildren = (el) => {
    
    return (
      <div>
      {
        el.child && el.child.length && el.child.map((c, i) => {
          let temp = ICEC[c.tag] ? temp = ICEC[c.tag] : temp = ICEC[el.tag][c.tag]
          if (!c.child || !c.child.length) {
            console.log(temp)
            return cre(temp, {key: i}, null)
            // React.createElement('input', { type: 'button', value: 'i am a button' }),
          }
          // if (c.tag === 'Input') {
          //   return <ICEC.Input key={`input-${i}`} {...c.props} />
          // }
          return (
            cre(temp, {key: i}, this.getChildren(c))
          )
        })
      }
    </div>
    )
  }

  getProps = (el) => {
    let obj = null
    return {
      dangerouslySetInnerHTML: { __html: "myHTML" }
    }
  }

  render() {
    // const itemNodes = this.props.slides.map((item, index) => <div key={item.url} className="slider-img-wrapper"><img src={item.url} alt={item.text} /></div>);
    return (

      // <Slider>
      // {itemNodes}
      // </Slider>
      <div>
        {
          this.getView(this.props.data)
        }
      </div>
      // <Form style={{ width: '60%' }} {...formItemLayout} >
      //   {
      //     this.props.data.part.map((item, index) => {
      //       return (
      //         <FormItem
      //           key={index}
      //           label={item.text}
      //           hasFeedback
      //           required={item.required}
      //           requiredMessage={item.errorMessage}
      //         >
      //           {this.getItem(item)}
      //         </FormItem>
      //       )
      //     })
      //   }
      //   <FormItem label=" ">
      //     <Form.Submit onClick={this.handleSubmit}>提交</Form.Submit>
      //   </FormItem>
      // </Form>
    )
  }
}

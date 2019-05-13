import React, { Component } from 'react';
import * as M from '../../components/Module';
import './test.scss'

const cre = React.createElement

export default class Page15 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getContent = (sectionItem) => {
    console.log(sectionItem)
    return(
      <React.Fragment>
        {
          Object.values(sectionItem).map((cn, j) => {
            return (
              cre(M[cn.module_name], {key: j}, null)
            )
          })
        }
      </React.Fragment>
    ) 
  }

  getSections= (sections) => {
    return (
      <React.Fragment>
      {
        sections.length && sections.map((section, i) => {
          let className = Object.keys(section)[i]
          return Object.values(section).map((sectionItem, j) => {
            return (
              <div key={`section-${j}`} className={`${className}`}>
                { this.getContent(sectionItem) }
              </div>
            )
          })
        })
      }
    </React.Fragment>
    )
  }

  setLayout = (data) => {
    return (
      <React.Fragment>
        {
          Object.keys(data).map((layout, i) => {
            return (
              <div className={layout} key={`layout-${i}`}>
              {
                data[layout].length ? this.getSections(data[layout]) : <div className={`${layout}`}></div>
              }
              </div>
            )
          })
        }
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className="page15-page">
        { this.setLayout(this.props.data)}
      </div>
    )
  }
}

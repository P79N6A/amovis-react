import React, { Component } from 'react';
import * as M from '../../components/Module';
import * as B from '../../Block';
import './test.scss'


console.log(B['project1'].ModuleOne)

const cre = React.createElement

export default class CommonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getDetail = (sectionItem) => {
    return(
      <React.Fragment>
        {
          Object.values(sectionItem).map((cn, j) => {
            let projectName = cn.project_name
            let moduleName = cn.module_name
            let moduleData = cn.module_data 
            return (
              cre(B[projectName][moduleName], { key: j, ...moduleData }, null)
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
          return (
            cre('div', { key: i }, null, this.getContent(section))
          )
        })
      }
    </React.Fragment>
    )
  }

  getContent = (section) => {
    return (
      <React.Fragment>
        {
          Object.values(section).map((sectionItem, j) => {
            let className = Object.keys(section)[j];
            return (
              <div key={`section-${j}`} className={`${className}`}>
                { this.getDetail(sectionItem) }
              </div>
            )
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
      <div className="page">
        { this.setLayout(this.props.data)}
      </div>
    )
  }
}

import React, { Component } from 'react';
import * as M from '../../components/Module';
import * as B from '../../Block';
import './test.scss'

const cre = React.createElement

export default class CommonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getDetail = (sectionItem) => {
    return (
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

  reduceBlockItem = (section) => {
    return Object.values(sections).map((sectionItem, j) => {
      let className = Object.keys(section)[j];
      return (
        <div key={`section-${j}`} className={`${className}`}>
          {this.getDetail(sectionItem)}
        </div>
      )
    });
  }
  getColContent = (section) => {
    return Object.values(section).map((sectionItem, j) => {
      let className = Object.keys(section)[j];
      return (
        <div key={`section-${j}`} className={`${className}`}>
          {this.getDetail(sectionItem)}
        </div>
      )
    });
  }
  getSections = (sections) => {
    return (
      <React.Fragment>
        {
          sections.length && sections.map((section, i) => {
            return this.getContent(section)
          })
        }
      </React.Fragment>
    )
  }

  colMain = (section) => {
    if (Object.values(section).length > 1) {
      return cre("div", { className: "col_main" }, this.getColContent(section));
    } else {
      return this.getColContent(section);
    }
  }

  getContent = (section) => {
    return (
      <React.Fragment>
        {
          this.colMain(section)
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
              <div id={layout} key={`layout-${i}`}>
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
      <div id="page">
        {this.setLayout(this.props.data)}
      </div>
    )
  }
}

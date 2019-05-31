import React, { Component } from 'react';
import * as M from '../../components/Module';
import * as B from '../../Block';
import UtilFetch from '../../utils/fetch';
import './test.scss'

const cre = React.createElement

export default class CommonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const fetchUrl = 'http://laravel.local.com/api/module_api/index/get_modules_data';
    var headers = new Headers();
    headers.append("Authenticate", 10001);
    headers.append("Content-Type", "application/json");
    var modules = [];
    Object.values(this.props.data).map(function (part_modules, page_part) {
      part_modules.map(function (items, type_key) {
        Object.values(items).map(function (json_items) {
          Object.values(json_items).map(function (json_item) {
            modules.push(json_item);
          });
        });
      });
    });
    const formData = {
      "modules": modules,
      "is_advance": 0
    };
    UtilFetch.post(fetchUrl, JSON.stringify(formData), headers).then(function (res) {
      console.log(res);
    });
  }
  getDetail = (sectionItem) => {
    return Object.values(sectionItem).map((cn, j) => {
      let projectName = cn.project_name
      let moduleName = cn.module_name
      let moduleData = cn.module_data
      return (
        cre(B[projectName][moduleName], { key: j, "data-key": j, ...moduleData }, null)
      )
    });
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
        <div key={`module-${className}`} className={`${className}`} data-key={`module-${className}`}>
          {this.getDetail(sectionItem)}
        </div>
      )
    });
  }
  getSections = (sections) => {
    return sections.length && sections.map((section, i) => {
      return this.colMain(section, i);
    });
  }

  colMain = (section, i) => {
    if (Object.values(section).length > 1) {
      return cre("div", { className: "col_main", key: "col_main-" + i, "data-key": "col_main-" + i }, this.getColContent(section));
    } else {
      return this.getColContent(section);
    }
  }
  setLayout = (data) => {
    return Object.keys(data).map((layout, i) => {
      return (
        <div id={layout} key={`layout-${layout}`} data-key={`layout-${layout}`}>
          {
            data[layout].length ? this.getSections(data[layout]) : null
          }
        </div>
      )
    });
  }
  render() {
    return (
      <div id="page">
        {this.setLayout(this.props.data)}
      </div>
    )
  }
}

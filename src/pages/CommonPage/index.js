import React, { Component } from 'react';
import * as M from '../../components/Module';
import * as B from '../../Block';
import UtilFetch from '../../utils/fetch';
import './test.scss';
var envJson = require("../../.env.json");

const cre = React.createElement

export default class CommonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page_module_data: {},
      moduleFetchUrl: envJson.moduleFetchUrl
    };
  }
  componentDidMount = () => {
    const fetchUrl = this.state.moduleFetchUrl;
    var headers = new Headers();
    headers.append("Authenticate", 10001);
    headers.append("Content-Type", "application/json");
    var modules = [];
    var self = this;
    Object.values(this.props.data).map(function (part_modules, page_part) {
      part_modules.map(function (items, i) {
        Object.values(items).map(function (json_items, type_key) {
          Object.values(json_items).map(function (json_item, j) {
            modules.push(json_item);
          });
        });
      });
    });
    const formData = {
      "modules": modules,
      "is_advance": 0
    };
    UtilFetch.post(fetchUrl, JSON.stringify(formData), headers).then((res) => {
      this.setState({ page_module_data: res.val });
      // 重新设计 this.props.data 中module_data数据，防止页面返回的时候读取的默认数据出现闪烁
      for (let page_part in this.props.data) {
        let part_modules = this.props.data[page_part];
        for (let i in part_modules) {
          let items = part_modules[i];
          for (let type_key in items) {
            let json_items = items[type_key];
            for (let j in json_items) {
              self.modProps(page_part, i, type_key, j, res.val);
            }
          }
        }
      }
    });
  }
  modProps = (page_part, i, type_key, j, val) => {
    var item = this.props.data[page_part][i][type_key][j];
    var key = item.project_name + "/" + item.module_name + "/" + item.page_name + "/" + item.position;
    this.props.data[page_part][i][type_key][j].module_data = val[key];
  }
  getDetail = (sectionItem) => {
    return Object.values(sectionItem).map((cn, j) => {
      let projectName = cn.project_name;
      let moduleName = cn.module_name;
      let key = cn.project_name + "/" + cn.module_name + "/" + cn.page_name + "/" + cn.position;
      let moduleData = cn.module_data;
      if (this.state.page_module_data[key]) {
        moduleData = this.state.page_module_data[key];
      }
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

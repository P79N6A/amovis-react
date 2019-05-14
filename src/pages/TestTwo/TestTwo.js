import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as M from '../../components/Module';

const cre = React.createElement

export default class TestTwo extends Component {

  getViews = (data) => {
    return (
      <div>
        {
          data.sections.map((e, i) => {
            return (
              <div key={i}>
                {
                  cre(M[e.name], null, this.getChildren(e))
                }
              </div>
            )
          })
        }
      </div>
    )
  }

  getChildren = (p) => {
    
    return (
      <div>
      {
        p.subModule && p.subModule.length && p.subModule.map((c, i) => {
          return (
            cre(M[c.name], {key: i}, null)
          )
        })
      }
    </div>
    )
  }

  render() {

    return (
      <div>
        {this.getViews(this.props.data)}

        
      </div>
    );
  }
}

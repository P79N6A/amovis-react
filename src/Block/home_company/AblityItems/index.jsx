import React, { Component } from 'react';

export default class AblityItems extends Component {
  static displayName = 'AblityItems';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const module_data = this.props;
    return (
      <div className="hy-ability" style={style.hyAbilityStyles}>
        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            alt=""
            src="http://front_public.local.com/ice_project/reactphp/public/images/aWimbMGxabytxrRqcnEU.svg"
            style={style.hyAbilityItemImgStyle}
          />
          <h3 style={style.hyAbilityItemTitleStyle}>{module_data.list[0].value}</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>
          {module_data.list[0].des}
          </p>
        </div>

        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            alt=""
            src="http://front_public.local.com/ice_project/reactphp/public/images/neNAdNbBxUbWpbUQIsJA.svg"
            style={style.hyAbilityItemImgStyle}
          />
          <h3 style={style.hyAbilityItemTitleStyle}>{module_data.list[1].value}</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>
          {module_data.list[1].des}
          </p>
        </div>

        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            alt=""
            src="http://front_public.local.com/ice_project/reactphp/public/images/SsStefBxcUWayMyktAwz.svg"
            style={style.hyAbilityItemImgStyle}
          />
          <h3 style={style.hyAbilityItemTitleStyle}>{module_data.list[2].value}</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>
          {module_data.list[2].value}
          </p>
        </div>
      </div>
    );
  }
}

const style = {
  hyAbilityStyles: {
    fontFamily: 'Microsoft YaHei',
    height: '223px',
    textAlign: 'center',
    background: '#fff',
  },
  hyAbilityItemStyle: {
    display: 'inline-block',
    width: '280px',
    margin: '38px 35px 0',
    verticalAlign: 'top',
  },
  hyAbilityItemImgStyle: {
    height: '62px',
  },
  hyAbilityItemTitleStyle: {
    fontSize: '20px',
    lineHeight: '26px',
    color: '#333',
    fontWeight: '400',
    margin: '18px 0 10px',
  },
  hyAbilityItemSubtitleStyle: {
    fontSize: '16px',
    color: '#999',
    lineHeight: '21px',
  },
};

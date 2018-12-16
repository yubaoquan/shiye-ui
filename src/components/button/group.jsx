import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class BtnGroup extends Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    prefix: PropTypes.string,
  }

  static defaultProps = {
    style: {},
    className: '',
    prefix: 'shiye',
  }


  render() {
    const { children, style, className, prefix } = this.props;
    const cn = classNames(`${prefix || 'shiye'}-btn-group`, className);
    return <span
      className={cn}
      style={style}
    >{children}</span>
  }
}
export default BtnGroup;

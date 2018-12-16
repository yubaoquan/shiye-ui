import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Base from '../base';

class BtnGroup extends Base {
  static propTypes = {
    style: PropTypes.object,
  }

  static defaultProps = {
    style: {},
  }


  render() {
    const { children, style, className } = this.props;
    const cn = classNames(this.prefixClass(`-btn-group`), className);
    return <span
      className={cn}
      style={style}
    >{children}</span>
  }
}
export default BtnGroup;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style';

const types = [
  'share-alt',
  'chevron-left',
  'chevron-right',
  'check',
  'wrong',
  'search',
  'download',
  'sqauare',
  'sqauare-o',
  'stop',
  'check-circle',
  'check-circle-o',
  'check-square',
  'check-square-o',
  'info',
  'info-circle',
  'alert',
  'alert-circle',
  'alert-circle-o',
  'alert-triangle',
  'cancel',
  'cancel-circle',
  'cancel-circle-o',
];

class Icon extends Component {
  static propTypes = {
    type: PropTypes.oneOf(types),
  }

  static defaultProps = {
    type: 'square-o',
  }

  render() {
    const { type, className: cn } = this.props;
    const realType = types.includes(type) ? type : 'square-o';
    const typeClass = 'icon-' + realType || Icon.iconClassMap.square;
    const className = classNames('shiye-icon', cn, typeClass);
    return <span className={className} />;
  }
}

export default Icon;

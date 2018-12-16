import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style';

class Icon extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'share',
      'previous',
      'next',
      'check',
      'wrong',
      'search',
      'download',
      'sqauare',
    ]),
  }

  static defaultProps = {
    type: 'square',
  }

  static iconClassMap = {
    share: 'icon-share-alt',
    previous: 'icon-chevron-left',
    next: 'icon-chevron-right',
    check: 'icon-check',
    wrong: 'icon-wrong',
    search: 'icon-search',
    download: 'icon-download',
    square: 'icon-square-o',
  }

  render() {
    const { type, className: cn } = this.props;
    const typeClass = Icon.iconClassMap[type] || Icon.iconClassMap.square;
    const className = classNames('shiye-icon', cn, typeClass);
    return <span className={className} />;
  }
}

export default Icon;

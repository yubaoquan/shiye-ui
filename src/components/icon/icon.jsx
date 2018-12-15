import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

class Icon extends Component {
  static propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = {
    type: 'square',
    classnames: null,
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import prefixer from 'utils/prefix';

class Row extends Component {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
  }

  static defaultProps = {
    className: null,
    prefix: 'shiye',
  }

  render() {
    const { className, prefix, children } = this.props;
    const cn = classNames(prefixer(prefix, '-row'), className);
    return <div className={cn}>{children}</div>
  }
}

export default Row;

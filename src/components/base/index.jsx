import { Component } from 'react';
import PropTypes from 'prop-types';


class Base extends Component {
  static propTypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = {
    prefix: 'shiye',
    className: '',
  }

  prefixClass(suffix) {
    const { prefix: pre } = this.props;
    if (pre && pre.trim && pre.trim()) {
      return `${pre}${suffix}`;
    }
    return `shiye${suffix}`;
  }

  safeCall(fn, args = []) {
    if (typeof fn === 'function') {
      fn.apply(null, args);
    }
  }

  static safeCall(fn, args = []) {
    if (typeof fn === 'function') {
      fn.apply(null, args);
    }
  }
}

export default Base;

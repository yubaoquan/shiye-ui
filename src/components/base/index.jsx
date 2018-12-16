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
}

export default Base;

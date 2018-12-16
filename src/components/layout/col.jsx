import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Base from '../base';

class Col extends Base {
  static propTypes = {
    span: PropTypes.number.isRequired,
    offset: PropTypes.number,
  }

  static defaultProps = {
    offset: 0,
  }

  render() {
    const { span, offset, className, children } = this.props;
    const cn = classNames(
      this.prefixClass('-col'),
      `span-${span}`,
      `offset-${offset}`,
      className
    );
    return <span className={cn}>{children}</span>
  }
}

export default Col;

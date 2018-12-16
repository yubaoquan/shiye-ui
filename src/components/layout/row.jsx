import React from 'react';
import classNames from 'classnames';
import Base from '../base';

class Row extends Base {

  render() {
    const { className, children } = this.props;
    const cn = classNames(this.prefixClass('-row'), className);
    return <div className={cn}>{children}</div>
  }
}

export default Row;

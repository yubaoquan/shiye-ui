import React from 'react';
import Base from '../base';
import PropTypes from 'prop-types';
import './style.less';

class Form extends Base {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

export default Form;

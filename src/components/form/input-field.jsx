import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputField extends Component {
  render() {
    return (
      <div>
        <span>form input field</span>
        {this.props.children}
      </div>
    )
  }
}

export default InputField;

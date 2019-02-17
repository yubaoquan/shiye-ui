import React from 'react';
import ReactDOM from 'react-dom';
import Base from '../base';
import Toast from './toast';
import PropTypes from 'prop-types';
import { removeById, getRoot } from './container';
import './style';

class Notify extends Base {

  static propTypes = {
    toast: PropTypes.shape({
      cb: PropTypes.func,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.node,
      type: PropTypes.oneOf(['success', 'error']),
      duration: PropTypes.number,
    }),
  }

  onAnimationEnd = (id) => {
    const { cb } = this.props.toast;
    removeById(id, () => Base.safeCall(cb));
  }

  render() {
    return ReactDOM.createPortal(
      <Toast {...this.props.toast} onAnimationEnd={this.onAnimationEnd} />,
      getRoot()
    );
  }
}

export default Notify;

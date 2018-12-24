import React from 'react';
import ReactDOM from 'react-dom';
import Base from '../base';
import Toast from './toast';
import classNames from 'classnames';
import { removeById, root } from './helper';
import './style';

class Notify extends Base {

  componentWillUnmount() {
    console.info('um')
  }

  render() {
    return ReactDOM.createPortal(
      <Toast {...this.props.toast} onAnimationEnd={removeById} />,
      root
    );
  }
}

export default Notify;

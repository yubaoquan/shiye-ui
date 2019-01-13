import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { removeById, getRoot } from './container';
import PropTypes from 'prop-types';

class SweetAlert extends Component {
  constructor(props) {
    super(props);
    const docEl = document.documentElement;
    this.screenMiddle = {
      x: docEl.clientWidth / 2,
      y: docEl.clientHeight / 2,
    };
    console.info('this position is ', props.position);
    const { x: sx, y: sy } = this.props.position;
    const { x: mx, y: my } = this.screenMiddle;

    console.info(sx, mx);
    this.state = {
      offset: {
        x: `${sx - mx}`,
        y: `${sy - my}`,
      },
      scale: {
        x: 0,
        y: 0,
      },
    };

    setTimeout(() => {
      this.setState({
        offset: { x: 0, y: 0 },
        scale: { x: 1, y: 1 },
      });
    }, 0);
  }
  render() {
    const {
      offset: { x, y },
      scale: { x: sx, y: sy }
    } = this.state;
    const style = {
      transform: `translate3d(${x}px, ${y}px, 0) scale3d(${sx}, ${sy}, 1)`,
    };
    console.info(style);

    return ReactDOM.createPortal(
      (<div className="shiye-sweetalert" style={style}>this is modal</div>),
      getRoot()
    );
  }
}

export default SweetAlert;

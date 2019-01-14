import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { removeById, getRoot } from './container';
import PropTypes from 'prop-types';

class SweetAlert extends Component {
  static propTypes = {
    onRemove: PropTypes.func,
    position: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
  }

  constructor(props) {
    super(props);
    const docEl = document.documentElement;
    this.screenMiddle = {
      x: docEl.clientWidth / 2,
      y: docEl.clientHeight / 2,
    };
    const { x: sx, y: sy } = this.props.position;
    const { x: mx, y: my } = this.screenMiddle;

    const offsetX = sx - mx;
    const offsetY = sy - my;
    this.state = {
      ready2Remove: false,
      outOffset: {
        x: offsetX,
        y: offsetY,
      },
      offset: {
        x: offsetX,
        y: offsetY,
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

  onTransitionEnd = () => {
    if (this.state.ready2Remove) {
      this.props.onRemove(this.props.id);
    } else {
      this.setState({ ready2Remove: true });
    }
  }

  /**
   * 提供给container调用
   */
  remove() {
    this.prepareRemove();
  }

  prepareRemove() {
    const { x, y } = this.state.outOffset;
    this.setState({
      offset: { x, y },
      scale: { x: 0, y: 0 },
    });
  }

  render() {
    const {
      offset: { x, y },
      scale: { x: sx, y: sy }
    } = this.state;
    const style = {
      transform: `translate3d(${x}px, ${y}px, 0) scale3d(${sx}, ${sy}, 1)`,
    };

    return ReactDOM.createPortal(
      (<div
        className="shiye-sweetalert"
        style={style}
        onTransitionEnd={this.onTransitionEnd}
      >this is modal</div>),
      getRoot()
    );
  }
}

export default SweetAlert;

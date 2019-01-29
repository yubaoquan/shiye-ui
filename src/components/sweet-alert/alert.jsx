import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { removeById, getRoot } from './container';
import Button from '../button';

import PropTypes from 'prop-types';

class SweetAlert extends Component {
  static propTypes = {
    onRemove: PropTypes.func,
    position: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
    title: PropTypes.string,
    confirmTitle: PropTypes.string,
    content: PropTypes.node,
  }

  static defaultProps = {
    title: '提示',
    confirmTitle: '我知道了',
    onRemove() {},
    content: '',
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
    this.ref = React.createRef();

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

  // 防止容器内其他元素的 transitionEnd 触发这里的逻辑
  onTransitionEnd = (e) => {
    if (e.target !== this.ref.current) {
      return;
    }

    // 第一次transitionEnd是进入的动画执行完
    // 第二次transitionEnd的退出的动画执行完
    if (this.state.ready2Remove) {
      this.props.onRemove(this.props.id);
    } else {
      this.setState({ ready2Remove: true });
    }
  }

  onConfirmBtnClick = () => {
    this.remove()
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
    const { title, confirmTitle, content } = this.props;

    return (
      <div
        className="shiye-sweetalert"
        style={style}
        onTransitionEnd={this.onTransitionEnd}
        ref={this.ref}
      >
        <div className="shiye-sweetalert__header">{title}</div>
        <div className="shiye-sweetalert__body">
          {content}
        </div>
        <div className="shiye-sweetalert__footer">
          <Button type="primary" onClick={this.onConfirmBtnClick}>{confirmTitle}</Button>
        </div>
      </div>
    );
  }
}

export default SweetAlert;

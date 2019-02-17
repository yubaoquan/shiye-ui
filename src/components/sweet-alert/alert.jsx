import React, { Component } from 'react';
import Button from '../button';
import Base from '../base';
import PropTypes from 'prop-types';
import Icon from '../icon';

const types = ['info', 'success', 'warning', 'error'];
class SweetAlert extends Component {
  static propTypes = {
    onRemove: PropTypes.func,
    position: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
    title: PropTypes.string,
    confirmTitle: PropTypes.string,
    cancelTitle: PropTypes.string,
    content: PropTypes.node,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    type: PropTypes.oneOf(['', ...types]),
  }

  static defaultProps = {
    title: '提示',
    confirmTitle: '确认',
    cancelTitle: '取消',
    onRemove() {},
    content: '',
    type: '',
  }

  static typeMap = {
    info: 'info-circle',
    warning: 'alert-circle-o',
    error: 'cancel-circle-o',
    success: 'check-circle-o',
  };

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

  onAlertConfirm = () => {
    this.remove()
  }

  onConfirm = () => {
    const ret = Base.safeCall(this.props.onConfirm);
    Promise.resolve(ret)
      .then(() => {
        this.remove();
      });
  }

  onCancel = () => {
    Base.safeCall(this.props.onCancel);
    this.remove();
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

  isValidType = (type) => {
    return types.includes(type);
  }

  render() {
    const {
      offset: { x, y },
      scale: { x: sx, y: sy }
    } = this.state;
    const style = {
      transform: `translate3d(${x}px, ${y}px, 0) scale3d(${sx}, ${sy}, 1)`,
    };
    const {
      type,
      title,
      confirmTitle,
      cancelTitle,
      content,
      onConfirm,
      onCancel,
    } = this.props;

    let header = title;

    if (type && this.isValidType(type)) {
      header = (
        <>
          <Icon type={SweetAlert.typeMap[type]} className={type} />
          {title}
        </>
      );
    }
    let footer = (
      <Button type="primary" onClick={this.onAlertConfirm} key="default-confirm">我知道了</Button>
    );
    if (onConfirm || onCancel) {
      footer = (
        <>
          <Button type="primary" onClick={this.onConfirm} key="confirm">{confirmTitle}</Button>
          <Button onClick={this.onCancel} key="cancel">{cancelTitle}</Button>
        </>
      )
    }

    return (
      <div
        className="shiye-sweetalert"
        style={style}
        onTransitionEnd={this.onTransitionEnd}
        ref={this.ref}
      >
        <div className="shiye-sweetalert__header shiye-sweetalert__header-{type}">{header}</div>
        <div className="shiye-sweetalert__body">{content}</div>
        <div className="shiye-sweetalert__footer">{footer}</div>
      </div>
    );
  }
}

export default SweetAlert;

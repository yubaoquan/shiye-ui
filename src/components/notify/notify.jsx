import React from 'react';
import ReactDOM from 'react-dom';
import Base from '../base';
import Toast from './toast';
import classNames from 'classnames';
import './style';

class Notify extends Base {

  state = {
    finished: false,
  }

  static createRootMountPoint() {
    const el = Notify.el = document.createElement('span');
    el.className = 'shiye-notify-container';
    document.body.appendChild(el);
  }

  static createMountPoint() {
    const el = document.createElement('span');
    Notify.el.appendChild(el);
    return el;
  }

  static createToast(
    text = Notify.config.text,
    duration = Notify.config.duration,
    cb,
    type = 'success',
  ) {
    if (!Notify.el) {
      Notify.createRootMountPoint();
    }

    const mountPoint = Notify.createMountPoint();
    const id = Math.random();
    const toast = {
      id,
      text,
      type,
      duration,
      cb,
      index: Notify.toasts.length,
    };

    Notify.toasts.push({ id, mountPoint });
    const instance = <Notify toast={toast} />;
    ReactDOM.render((<>{instance}</>), mountPoint);
  }

  static error(text, duration, cb) {
    Notify.createToast(text, duration, cb, 'error');
  }

  static success(text, duration, cb) {
    Notify.createToast(text, duration, cb, 'success');
  }

  static config(cfg) {
    Object.assign(Notify.config, cfg);
  }

  static clear() {
    Notify.toasts.forEach(({ mountPoint }) => {
      Notify.el.removeChild(mountPoint);
    });
    Notify.toasts = [];
  }

  static remove(id) {
    const item = Notify.toasts.find(item => item.id === id);
    Notify.el.removeChild(item.mountPoint);
    Notify.toasts = Notify.toasts.filter(item => item.id !== id);
  }

  onAnimationEnd = (id) => {
    Notify.remove(id);
    this.setState({ finished: true });
  }

  static instance = null
  static toasts = []

  static config = {
    duration: 2000,
  }

  render() {
    if (this.state.finished) {
      return null;
    }
    return ReactDOM.createPortal(
      <Toast {...this.props.toast} onAnimationEnd={this.onAnimationEnd} />,
      Notify.el
    );
  }
}

export default Notify;

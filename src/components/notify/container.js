import Popable from '../base/popable';
import Notify from './notify';
import React from 'react';
import ReactDOM from 'react-dom';
import Base from '../base';

class Helper extends Popable {
  cfg = { duration: 2000 };
  className = 'shiye-notify-container';

  /**
   *
   * @param { text, duration, cb } options
   */
  error = (
    text,
    duration = this.cfg.duration,
    cb
  ) => {
    this.createAndMount({ text, duration, cb, type: 'error' });
  }

  /**
   *
   * @param { text, duration, cb } options
   */
  success = (
    text,
    duration = this.cfg.duration,
    cb
  ) => {
    this.createAndMount({ text, duration, cb, type: 'success' });
  }

  createComponentInstance({ id, text, type, duration, cb }) {
    const toast = { id, text, type, duration, cb };

    return <Notify toast={toast} />;
  }

  config = (_cfg) => {
    Object.assign(this.cfg, _cfg);
  }

  clear = () => {
    this.instanceList.forEach((item) => {
      this.unmount(item);
      Base.safeCall(item.options.cb);
    });
    this.instanceList = [];
  }

  removeById = (id, cb) => {
    const item = this.instanceList.find(item => item.id === id);
    if (!item) {
      return;
    }
    this.unmount(item);
    this.instanceList = this.instanceList.filter(item => item.id !== id);

    Base.safeCall(item.options.cb);
  }

  unmount = (item) => {
    ReactDOM.unmountComponentAtNode(item.mountPoint);
    this.root.removeChild(item.mountPoint);
  }
}

const helper = new Helper();
const getRoot = helper.getRoot;
const removeById = helper.removeById;

export { getRoot, removeById }
export default helper;


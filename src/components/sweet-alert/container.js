import Popable from '../base/popable';
import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './alert';
import Base from '../base';
import './style';

class Container extends Popable {
  className = 'shiye-sweetalert-container';

  constructor(props) {
    super(props);
    document.addEventListener('click', Container.recordMousePosition)
  }

  static recordMousePosition(e) {
    const { clientX, clientY } = e;
    Container.x = clientX;
    Container.y = clientY;

  }

  createRootMountPoint() {
    super.createRootMountPoint();
    this.root.addEventListener('click', this.onClick);
    return this.root;
  }

  // close the alert
  onClick = (e) => {
    console.info('click happen');
  }

  alert = (options) => {
    this.createAndMount(options, 'alert');
  }

  confirm = (options) => {
    this.createAndMount(options, 'confirm');
  }

  createComponentInstance(options, mode) {
    const position = {
      x: Container.x,
      y: Container.y,
    };
    const props = { ...options, mode, position };
    return <Alert {...props} />;
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

const container = new Container();
const getRoot = container.getRoot;
const removeById = container.removeById;

export { getRoot, removeById }
export default container;


import PropTypes from 'prop-types';
import Popable from '../base/popable';
import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './alert';
import Base from '../base';
import './style';

class Container extends Popable {
  static visibleClassName = 'shiye-sweetalert-container';
  static disappearClassName = 'shiye-sweetalert-container--disappear';
  static hiddenClassName = 'shiye-sweetalert-container--hidden';
  static propTypes = {
    closeableMask: PropTypes.bool,
  };

  className = 'shiye-sweetalert-container';

  constructor(props) {
    super(props);
    document.addEventListener('click', Container.recordMousePosition);
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
    const id = this.instanceCount - 1;
    const item = this.instanceList.find(item => item.id === id);

    if (item && item.options.closeableMask) {
      item.ref.current.remove();
    }
  }

  alert = (options) => {
    const id = this.createAndMount(options, 'alert');
    return this.removeById.bind(this, id);
  }

  confirm = (options) => {
    const id = this.createAndMount(options, 'confirm');
    return this.removeById.bind(this, id);
  }

  createComponentInstance(options, mode) {
    const position = {
      x: Container.x,
      y: Container.y,
    };
    const props = {
      ...options,
      mode,
      position,
      onRemove: this.unmountById,
    };
    const ref = React.createRef();
    const instance = <Alert {...props} ref={ref} />;
    return { instance, ref };
  }

  createAndMount(options) {
    const mountPoint = this.createMountPoint({ className: 'shiye-sweetalert-mount-point' });
    this.root.className = Container.visibleClassName;
    const id = this.instanceCount++;

    const { instance, ref } = this.createComponentInstance({ id, ...options });
    this.instanceList.push({ id, mountPoint, instance, options, ref });
    ReactDOM.render((<>{instance}</>), mountPoint);
    return id;
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

    if (item ) {
      item.ref.current.remove();
    }
  }

  unmountById = (id) => {
    let itemIndex;
    this.instanceList.forEach((item, index) => {
      if (item.id === id) {
        itemIndex = index;
      }
    });
    if (itemIndex === -1) {
      return;
    }
    const item = this.instanceList.splice(itemIndex, 1)[0];

    this.unmount(item);
    Base.safeCall(item.options.cb);
  }

  unmount = (item) => {
    if (this.instanceList.length === 0) {
      this.root.className = Container.disappearClassName;
    }
    setTimeout(() => {
      if (this.instanceList.length === 0) {
        this.root.className = Container.hiddenClassName;
      }
    }, 500);
    ReactDOM.unmountComponentAtNode(item.mountPoint);
    this.root.removeChild(item.mountPoint);
  }
}

const container = new Container();
const getRoot = container.getRoot;
const removeById = container.removeById;

export { getRoot, removeById }
export default container;


/**
 * sweet-alert notify 组件继承了这个组件
 * 组件需要自己实现createComponentInstance 方法
 */
import React from 'react';
import ReactDOM from 'react-dom';


class Popable {
  root = null;
  instanceList = [];
  className = '';
  instanceCount = 0;

  createRootMountPoint() {
    this.root = document.createElement('span');
    this.root.className = this.className;
    document.body.appendChild(this.root);
    return this.root;
  }

  createMountPoint(options) {
    const el = document.createElement('span');
    if (options.className) {
      el.className = options.className;
    }
    this.getRoot().appendChild(el);
    return el;
  }

  getRoot = () => {
    return this.root || this.createRootMountPoint();
  }

  createAndMount(options) {
    const mountPoint = this.createMountPoint();
    const id = this.instanceCount++;

    const instance = this.createComponentInstance({ id, ...options });
    this.instanceList.push({ id, mountPoint, instance, options });
    ReactDOM.render((<>{instance}</>), mountPoint);
    return id;
  }
}

export default Popable;

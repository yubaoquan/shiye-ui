import ReactDOM from 'react-dom';
import React from 'react';
import Notify from './notify';

const cfg = { duration: 2000 };
let toasts = [];
let root;

function createRootMountPoint() {
  root = document.createElement('span');
  root.className = 'shiye-notify-container';
  document.body.appendChild(root);
}

function createMountPoint() {
  const el = document.createElement('span');
  root.appendChild(el);
  return el;
}

function createToast(
  text = cfg.text,
  duration = cfg.duration,
  cb,
  type = 'success',
) {
  if (!root) {
    createRootMountPoint();
  }

  const mountPoint = createMountPoint();
  const id = Math.random();
  const toast = {
    id,
    text,
    type,
    duration,
    cb,
    index: toasts.length,
  };

  const instance = <Notify toast={toast} />;
  toasts.push({ id, mountPoint, instance });
  ReactDOM.render((<>{instance}</>), mountPoint);
}

function error(text, duration, cb) {
  createToast(text, duration, cb, 'error');
}

function success(text, duration, cb) {
  createToast(text, duration, cb, 'success');
}

function config(_cfg) {
  Object.assign(cfg, _cfg);
}

function clear() {
  toasts.forEach(unmount);
  toasts = [];
}

function removeById(id) {
  const item = toasts.find(item => item.id === id);
  if (!item) {
    return;
  }
  unmount(item);
  toasts = toasts.filter(item => item.id !== id);
}

function unmount(item) {
  ReactDOM.unmountComponentAtNode(item.mountPoint);
  root.removeChild(item.mountPoint);
}

const helper = { success, error, config, clear };

export { helper, removeById, root };

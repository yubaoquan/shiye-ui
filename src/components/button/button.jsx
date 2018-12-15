import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import './style.less';

class Button extends Component {
  static propTypes = {
    outline: PropTypes.bool,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    bordered: PropTypes.bool,
    type: PropTypes.string,
    size: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    type: '',
    size: '',
    outline: false,
    loading: false,
    disabled: false,
    bordered: true,
    href: '',
    target: '',
    className: '',
    icon: '',
  }

  convertChildren() {
    const children = this.props.children;
    if (typeof children === 'string' && children.length === 2) {
      return children[0] + ' ' + children[1];
    }
    return children;
  }

  onClick = (e) => {
    this.props.onClick && this.props.onClick(e);
  }

  renderWrapper(className, inner) {
    const { href, target, icon } = this.props;
    if (icon) {
      inner = <><Icon type={icon} />{inner}</>;
    }
    if (href) {
      if (target) {
        return <a
          className={className}
          href={href}
          target={target}
        >{inner}</a>;
      }
      return <a className={className} href={href}>{inner}</a>;
    }
    return <div className={className} onClick={this.onClick}>{inner}</div>
  }

  render() {
    const props = this.props;
    const className = classNames('shiye-btn', props.className, {
      primary: props.type === 'primary',
      danger: props.type === 'danger',
      success: props.type === 'success',
      outline: props.outline,
      loading: props.loading,
      disabled: props.disabled,
      large: props.size === 'large',
      small: props.size === 'small',
      'no-border': !props.bordered,
      link: props.href,
    });
    const inner = <span className="shiye-btn__name">{props.children}</span>;
    return this.renderWrapper(className, inner);
  }
}

export default Button;

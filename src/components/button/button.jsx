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
    block: PropTypes.bool,
    type: PropTypes.oneOf(['default', 'primary', 'danger', 'success']),
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    href: PropTypes.string,
    target: PropTypes.oneOf(['_blank', '']),
    className: PropTypes.string,
    prefix: PropTypes.string,
    icon: PropTypes.string,
    htmlType: PropTypes.oneOf(Component.validHtmlTypes),
    onClick: PropTypes.func,
    style: PropTypes.object,
  }

  static validHtmlTypes = ['button', 'submit', 'reset']

  static defaultProps = {
    type: 'default',
    size: 'medium',
    outline: false,
    loading: false,
    disabled: false,
    block: false,
    bordered: true,
    href: '',
    target: '',
    className: '',
    icon: '',
    htmlType: 'button',
    prefix: 'shiye',
    style: {},
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
    const { href, target, icon, style } = this.props;
    let htmlType = this.props.htmlType;
    if (!Button.validHtmlTypes.includes(htmlType)) {
      htmlType = 'button';
    }
    if (icon) {
      inner = <><Icon type={icon} />{inner}</>;
    }
    if (href) {
      if (target) {
        return <a
          className={className}
          href={href}
          target={target}
          style={style}
        >{inner}</a>;
      }
      return <a className={className} href={href} style={style}>{inner}</a>;
    }
    return <button
      style={style}
      className={className}
      onClick={this.onClick}
      type={htmlType}
    >{inner}</button>
  }

  render() {
    const props = this.props;
    const { prefix, block, outline, loading, disabled } = props;
    const className = classNames(`${prefix || 'shiye'}-btn`, props.className, {
      block,
      outline,
      loading,
      disabled,
      primary: props.type === 'primary',
      danger: props.type === 'danger',
      success: props.type === 'success',
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

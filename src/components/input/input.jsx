import React from 'react';
import Base from '../base';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon';
import './style';
import { throttle } from 'lodash/function';

class Input extends Base {
  static propTypes = {
    placeholder: PropTypes.string,
    addonBefore: PropTypes.string,
    addonAfter: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'textarea']),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxLength: PropTypes.number,
    autoSize: PropTypes.bool,
    autoFocus: PropTypes.bool,
    autoSelect: PropTypes.bool,
    showCount: PropTypes.bool,
    showClear: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func,
    onPressEnter: PropTypes.func,
    onKeyDown: PropTypes.func,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  static defaultProps = {
    type: 'text',
    showCount: false,
    value: '',
    defaultValue: '',
  }

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    const value = props.value === undefined ? props.defaultValue : props.value;
    this.state = { value };
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.focus();
    }
    let { initSelectionStart, initSelectionEnd, value } = this.props;
    if (initSelectionEnd !== undefined && initSelectionStart !== undefined) {
      initSelectionStart = initSelectionStart || 0;
      initSelectionEnd = initSelectionEnd || value.length;
      this.select(initSelectionStart, initSelectionEnd);
    } else if (this.props.autoSelect) {
      this.select();
    }
  }

  onChange = (e) => {
    const { target: { value } } = e;
    if (this.props.autoSize && this.props.type === 'textarea') {
      this.autoSizeTextarea();
    }
    this.setState({ value });
    this.safeCall(this.props.onChange, [e]);
  }

  autoSizeTextarea = throttle(() => {
    const textarea = this.inputRef.current;
    textarea.style.height = '1px';
    textarea.style.height = (25 + textarea.scrollHeight) + 'px';
  }, 300)

  renderCount() {
    const { maxLength } = this.props;
    const currentLength = this.state.value.length;
    return (
      <span className={this.prefixClass('-textarea-count')}>
        {currentLength}/{maxLength}
      </span>
    )
  }

  onKeyDown = (e) => {
    this.safeCall(this.props.onKeyDown, [e]);
    if (e.keyCode === 13) {
      this.safeCall(this.props.onPressEnter, [e]);
    }
  }

  onClearClick = () => {
    this.setState({ value: '' });
  }

  focus() {
    this.inputRef.current.focus();
  }

  select(start, end) {
    this.focus();
    if (
      typeof start === 'number'
      && typeof end === 'number'
      && start >= 0
      && start <= end
    ) {
      this.inputRef.current.setSelectionRange(start, end);
    } else {
      this.inputRef.current.select();
    }
  }

  renderTextarea(commonProps, style = {}) {
    const cn = this.prefixClass('-textarea');
    const { className, showCount, autoSize } = this.props;
    const wrapperClass = classNames(
      this.prefixClass('-textarea-wrapper'),
      className,
      { disabled: commonProps.disabled, },
    );

    const textareaProps = {
      className: cn,
      style: {
        resize: autoSize ? 'none' : 'both',
      },
      ...commonProps,
    }

    return (
      <div className={wrapperClass} style={style}>
        <textarea {...textareaProps} />
        {showCount && this.renderCount()}
      </div>
    );
  }

  getStyle(width) {
    if (width !== undefined) {
      const widthStr = String(width).trim();
      const inputWidth = /^\d+$/.test(widthStr) ? `${widthStr}px` : widthStr;
      return { width: inputWidth };
    }
  }

  render() {
    const {
      className,
      placeholder,
      type,
      addonBefore,
      addonAfter,
      maxLength,
      showClear,
      disabled,
      readOnly,
      width,
    } = this.props;

    const cn = classNames(this.prefixClass('-input'), {
      'only-before': addonBefore && !addonAfter,
      'only-after': !addonBefore && addonAfter,
      'both-addon': addonBefore && addonAfter,
    });

    const addonBeforeCn = this.prefixClass('-input-addon-before');
    const addonAfterCn = this.prefixClass('-input-addon-after');
    const clearBtnCn = this.prefixClass('-input-clear');

    const {
      onChange,
      onKeyDown,
      inputRef,
      state: { value },
    } = this;

    const commonProps = {
      value,
      maxLength,
      placeholder,
      onChange,
      onKeyDown,
      ref: inputRef,
      disabled: disabled || readOnly,
    };
    const inputProps = {
      ...commonProps,
      type,
      className: cn,
    };

    const style = this.getStyle(width);
    if (type === 'textarea') {
      return this.renderTextarea(commonProps, style);
    }

    const wrapperClassName = classNames(
      this.prefixClass('-input-wrapper'),
      className,
      { disabled: commonProps.disabled }
    );

    const shouldShowClear = showClear && String(value).length > 0;

    return (
      <div className={wrapperClassName} style={style}>
        {addonBefore && <span className={addonBeforeCn}>{addonBefore}</span>}
        <input {...inputProps} />
        {addonAfter && <span className={addonAfterCn}>{addonAfter}</span>}
        {shouldShowClear &&
          <span className="icon-wrapper" onClick={this.onClearClick}>
            <Icon type="wrong" className={clearBtnCn} />
          </span>
        }
      </div>
    );
  }
}

export default Input;

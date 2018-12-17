import React from 'react';
import Base from '../base';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style';

class Input extends Base {
  static propTypes = {
    placeholder: PropTypes.string,
    addonBefore: PropTypes.string,
    addonAfter: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'textarea']),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxLength: PropTypes.number,
    onChange: PropTypes.func,
    showCount: PropTypes.bool,
  }

  static defaultProps = {
    type: 'text',
    addonBefore: '',
    addonAfter: '',
    onChange: () => {},
    showCount: false,
    value: '',
  }

  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  onChange = (e) => {
    const { target: { value } } = e;
    const { onChange } = this.props;
    this.setState({ value });
    // TODO Base 组件中实现一个 callFn(fn, args)
    onChange && onChange(e);
  }

  renderCount() {
    const { maxLength } = this.props;
    const currentLength = this.state.value.length;
    return (
      <span className={this.prefixClass('-textarea-count')}>
        {currentLength}/{maxLength}
      </span>
    )
  }

  renderTextarea() {
    const cn = this.prefixClass('-textarea');
    const { placeholder, className, showCount, maxLength } = this.props;
    const { value } = this.state;
    const wrapperClass = this.prefixClass('-textarea-wrapper', className);

    return (
      <div className={wrapperClass}>
        <textarea
          className={cn}
          placeholder={placeholder}
          value={value}
          onChange={this.onChange}
          maxLength={maxLength}
        />
        {showCount && this.renderCount()}
      </div>
    );
  }

  render() {
    const {
      className,
      placeholder,
      type,
      addonBefore,
      addonAfter,
      maxLength,
    } = this.props;

    if (type === 'textarea') {
      return this.renderTextarea();
    }

    const wrapperClassName = this.prefixClass('-input-wrapper', className);


    const cn = classNames(this.prefixClass('-input'), {
      'only-before': addonBefore && !addonAfter,
      'only-after': !addonBefore && addonAfter,
      'both-addon': addonBefore && addonAfter,
    });

    const addonBeforeCn = this.prefixClass('-input-addon-before');
    const addonAfterCn = this.prefixClass('-input-addon-after');

    const inputProps = {
      type,
      maxLength,
      placeholder,
      className: cn,
      onChange: this.onChange,
    };

    const { value } = this.state;

    return (
      <div className={wrapperClassName}>
        {addonBefore && <span className={addonBeforeCn}>{addonBefore}</span>}
        <input {...inputProps} value={value} />
        {addonAfter && <span className={addonAfterCn}>{addonAfter}</span>}
      </div>
    );
  }
}

export default Input;

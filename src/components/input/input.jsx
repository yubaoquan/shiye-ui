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
  }

  static defaultProps = {
    type: 'text',
    addonBefore: '',
    addonAfter: '',
  }

  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  renderTextarea() {
    const cn = this.prefixClass('-textarea');
    const { placeholder, className } = this.props;
    const { value } = this.props;
    const wrapperClass = this.prefixClass('-textarea-wrapper', className);

    return (
      <div className={wrapperClass}>
        <textarea className={cn} placeholder={placeholder}>{value}</textarea>
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
      placeholder,
      className: cn,
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

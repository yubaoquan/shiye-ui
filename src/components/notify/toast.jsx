import React from 'react';
import PropTypes from 'prop-types';
import Base from '../base';
import classNames from 'classnames';

class Toast extends Base {

  static propTypes = {
    text: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['success', 'error']),
    duration: PropTypes.number,
    cb: PropTypes.func,
    onAnimationEnd: PropTypes.func,
    id: PropTypes.string,
  }

  static defaultProps = {
    text: '',
    duration: 1000,
    type: 'success',
  }

  state = { goOut: false }

  componentDidMount() {
    this.timeout = setTimeout(this.markGoOut, this.props.duration);
  }

  onAnimationEnd = () => {
    if (this.state.goOut) {
      this.safeCall(this.props.onAnimationEnd, [this.props.id]);
    }
  }

  markGoOut = () => {
    this.setState({ goOut: true });
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const {
      text,
      type,
    } = this.props;
    const { goOut } = this.state;

    const cn = classNames(
      this.prefixClass('-notify-toast'),
      this.prefixClass(`-notify-toast-${type}`),
      {
        [this.prefixClass('-notify-toast-out')]: goOut,
      }
    );

    return (
      <div
        className={cn}
        onAnimationEnd={this.onAnimationEnd}
      >{text}</div>
    );
  }
}

export default Toast;

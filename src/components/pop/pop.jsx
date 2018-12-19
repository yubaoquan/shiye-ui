import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Base from '../base';
import './style';
import { debounce } from 'lodash/function';
import classNames from 'classnames';

class Pop extends Base {

  static propTyps = {
    trigger: PropTypes.oneOf(['hover', 'click', 'focus']),
    content: PropTypes.node,
    position: PropTypes.oneOf(['top-center']),
    centerArrow: PropTypes.bool,
    wrapperClassName: PropTypes.string,
  };

  static defaultProps = {
    trigger: 'none',
    position: 'top-center',
  };

  state = {
    show: false,
  };

  componentDidMount() {
    const { trigger } = this.props;
    if (trigger === 'click') {
      document.addEventListener('click', this.onDocumentClick);
    }
  }

  componentWillUnmount() {
    const { trigger } = this.props;
    if (trigger === 'click') {
      document.removeEventListener('click', this.onDocumentClick);
    }
  }

  onDocumentClick = debounce((e) => {
    console.info(`click hide`);
    this.setState({ show: false });
  }, 100, { leading: true });

  onMouseEnter = debounce(() => {
    this.setState({ show: true });
    console.info('show pop');
  }, 100, { leading: true });

  onMouseLeave = debounce(() => {
    this.setState({ show: false });
    console.info('hide pop');
  }, 100, { leading: true });

  onClick = debounce((e) => {
    console.info('click show');
    e.nativeEvent.stopImmediatePropagation();
    this.setState({ show: true });
  }, 100, { leading: true });


  renderContentWrapper() {
    const { wrapperClassName } = this.props;
    const cn = this.prefixClass('-pop-content-wrapper', wrapperClassName);

    return ReactDOM.createPortal(
      (<div className={cn}>this is content wrapper</div>),
      document.body,
    )
  }

  render() {
    const { trigger, className, children } = this.props;
    const { show } = this.state;
    const popProps = {

    };
    if (trigger === 'hover') {
      popProps.onMouseEnter = this.onMouseEnter;
      popProps.onMouseLeave = this.onMouseLeave;
    }

    if (trigger === 'click') {
      popProps.onClick = this.onClick;
    }

    let focusableChild = null;

    if (trigger === 'focus' && React.Children.count(children) === 1) {
      focusableChild = React.cloneElement(children, {
        onFocus: () => {console.info(`focus`)},
        onBlur: () => {console.info(`blur`)},
      });
    }

    const cn = classNames(this.prefixClass('-pop-wrapper'), className);
    return (
      <span
        className={cn}
        {...popProps}
      >
        {show && this.renderContentWrapper()}
        {focusableChild || this.props.children}
      </span>
    );
  }
}

export default Pop;

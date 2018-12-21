import React from 'react';
import PropTypes from 'prop-types';
import Base from '../base';
import './style';
import { debounce } from 'lodash/function';
import classNames from 'classnames';
import PopPortal from './pop-portal';

class Pop extends Base {

  static propTyps = {
    trigger: PropTypes.oneOf(['hover', 'click', 'focus']),
    content: PropTypes.node,
    // position: PropTypes.oneOf([
    //   'top-left',
    //   'top-center',
    //   'top-right',

    //   'left-top',
    //   'left-center',
    //   'left-bottom',

    //   'bottom-left',
    //   'bottom-center',
    //   'bottom-right',

    //   'right-top',
    //   'right-center',
    //   'right-bottom',
    // ]),
    centerArrow: PropTypes.bool,
    wrapperClassName: PropTypes.string,
  };

  static defaultProps = {
    trigger: 'none',
    // position: 'top-center',
  };

  state = {
    show: false,
    portalStyle: {},
  };

  constructor(props) {
    super(props);
    this.triggerRef = React.createRef();
    this.portalRef = React.createRef();
  }

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

  onDocumentClick = debounce(() => this.hidePop(), 100, { leading: true });

  onMouseEnter = debounce(() => this.showPop(), 100, { leading: true });

  onMouseLeave = debounce(() => this.hidePop(), 100, { leading: true });

  onClick = debounce((e) => {
    e.nativeEvent.stopImmediatePropagation();
    this.showPop();
  }, 100, { leading: true });

  showPop = (e) => {
    this.setState({ show: true });
  };

  hidePop = (e) => {
    // this.setState({ show: false });
  };

  render() {
    const { trigger, className, children, position } = this.props;
    const { show } = this.state;
    const popProps = {};
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
        ref={this.triggerRef}
        className={cn}
        {...popProps}
      >
        {show && <PopPortal triggerNode={this.triggerRef.current} position={position} />}
        {focusableChild || this.props.children}
      </span>
    );
  }
}

export default Pop;

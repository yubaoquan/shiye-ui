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
    position: PropTypes.oneOf([
      'top-left',
      'top-center',
      'top-right',

      'left-top',
      'left-center',
      'left-bottom',

      'bottom-left',
      'bottom-center',
      'bottom-right',

      'right-top',
      'right-center',
      'right-bottom',
    ]),
    centerArrow: PropTypes.bool,
    wrapperClassName: PropTypes.string,
  };

  static defaultProps = {
    trigger: 'none',
    position: 'top-center',
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
    this.adjustPosition();
    this.setState({ show: true });
  };

  adjustPosition = () => {
    const triggerNode = this.triggerRef.current;
    const boundingClientRect = triggerNode.getBoundingClientRect();

    const positionLeftPart = this.props.position.split('-')[0];
    const portalStyle = this.positionSetter[positionLeftPart](boundingClientRect)
    this.setState({ portalStyle });
  };

  // TODO all position use top and left
  positionSetter = {
    top: ({ left, top, width }) => {
      const docEle = document.documentElement;
      const x = docEle.scrollHeight - docEle.scrollTop - top;
      return {
        bottom: `${x + 10}px`,
        left: `${left + (width / 2)}px`,
      };
    },
    left: ({ left, top, height }) => {
      return {
        top: `${ top + (height / 2)}px`,
        right: `${window.innerWidth - left + 10}px`,
      };
    },
    right: ({ right, top, height }) => {
      return {
        top: `${ top + (height / 2)}px`,
        left: `${right + 10}px`,
      };
    },
    bottom: ({ left, bottom, width }) => {
      return {
        top: `${bottom + 10}px`,
        left: `${left + (width / 2)}px`,
      };
    },
  };

  hidePop = (e) => {
    // this.setState({ show: false });
  };

  renderContent() {
    const { wrapperClassName, position } = this.props;
    const { portalStyle } = this.state;
    console.info(position)
    const cn = classNames(this.prefixClass('-pop-content-wrapper'), wrapperClassName, position);
    console.info(portalStyle)
    return ReactDOM.createPortal(
      (<div
        className={cn}
        ref={this.portalRef}
        style={portalStyle}
      >this is content wrapper</div>),
      document.body,
    )
  }

  render() {
    const { trigger, className, children } = this.props;
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
        {show && this.renderContent()}
        {focusableChild || this.props.children}
      </span>
    );
  }
}

export default Pop;

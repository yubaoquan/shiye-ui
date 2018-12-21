import React from 'react';
import PropTypes from 'prop-types';
import Base from '../base';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class PopPortal extends Base {

  static propTypes = {
    triggerNode: PropTypes.node.isRequired,
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
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
  }

  static defaultProps = {
    position: 'top-center',
  }

  constructor(props) {
    super(props);
    this.state = {
      portalStyle: {},
      basePosition: props.position.split('-')[0],
    }
    this.portalRef = React.createRef();
  }

  componentDidMount() {
    this.adjustPosition();
  }

  adjustPosition = () => {
    const triggerRect = this.props.triggerNode.getBoundingClientRect();
    const portalRect = this.portalRef.current.getBoundingClientRect();

    const { scrollTop: baseTop, scrollLeft: baseLeft } = document.documentElement;
    const positionLeftPart = this.state.basePosition;
    const portalStyle = this.positionSetter[positionLeftPart]({
      baseTop,
      baseLeft,
    }, triggerRect, portalRect);
    this.setState({ portalStyle });
  };

  positionSetter = {
    top: (
      { baseTop, baseLeft },
      { left, top, width },
      { height: portalHeight, width: portalWidth },
    ) => {
      return {
        top: `${baseTop + top - portalHeight - 10}px`,
        left: `${baseLeft + left + (width / 2) - (portalWidth / 2)}px`,
      };
    },
    left: (
      { baseTop, baseLeft },
      { left, top, height },
      { height: portalHeight, width: portalWidth },
    ) => {
      return {
        top: `${ baseTop + top + (height / 2) - (portalHeight / 2)}px`,
        left: `${baseLeft + left - portalWidth - 10}px`,
      };
    },
    right: (
      { baseTop, baseLeft },
      { top, right, height },
      { height: portalHeight },
    ) => {
      return {
        top: `${ baseTop + top + (height / 2) - (portalHeight / 2)}px`,
        left: `${baseLeft + right + 10}px`,
      };
    },
    bottom: (
      { baseTop, baseLeft },
      { left, bottom, width },
      { width: portalWidth },
    ) => {
      return {
        top: `${baseTop + bottom + 10}px`,
        left: `${baseLeft + left + (width / 2) - (portalWidth / 2)}px`,
      };
    },
  }

  onMouseEnter = () => {
    this.safeCall(this.props.onMouseEnter);
  }

  onMouseLeave = () => {
    this.safeCall(this.props.onMouseLeave);
  }

  render() {
    const { wrapperClassName, position, content } = this.props;
    const { portalStyle, basePosition } = this.state;
    const cn = classNames(
      this.prefixClass('-pop-portal'),
      wrapperClassName,
      position,
      basePosition,
    );
    return ReactDOM.createPortal(
      (<div
        className={cn}
        ref={this.portalRef}
        style={portalStyle}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div className={this.prefixClass('-pop-portal-content-wrapper')}>
          {content}
        </div>
        <span className="pop-arrow" />
      </div>),
      document.body,
    )
  }
}

export default PopPortal;

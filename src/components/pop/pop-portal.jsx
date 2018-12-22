import React from 'react';
import PropTypes from 'prop-types';
import Base from '../base';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { pick } from 'lodash/object';

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
    const { position } = this.props;
    const posParams = {
      baseTop,
      baseLeft,
      ...pick(triggerRect, ['top', 'bottom', 'left', 'right', 'height', 'width']),
      portalWidth: portalRect.width,
      portalHeight: portalRect.height,
    };
    if (position.includes('center')) {
      const portalStyle = this.centerPositionSetters[position](posParams);
      this.setState({ portalStyle });
    } else {
      const [basePos, offsetPos] = this.props.position.split('-');
      const basePosStyle = this.basePositionSetters[basePos](posParams);
      const offsetPosStyle = this.offsetPositionSetters[offsetPos](posParams);
      this.setState({ portalStyle: { ...basePosStyle, ...offsetPosStyle} });
    }
  };

  // top-x left-x bottom-x right-x
  basePositionSetters = {
    top: ({ baseTop, top, portalHeight }) => {
      return { top: `${baseTop + top - portalHeight - 10}px` };
    },
    left: ({ baseLeft, left, portalWidth }) => {
      return { left: `${baseLeft + left - portalWidth - 10}px` };
    },
    right: ({ baseLeft, right }) => {
      return { left: `${baseLeft + right + 10}px` };
    },
    bottom: ({ baseTop, bottom }) => {
      return { top: `${baseTop + bottom + 10}px` };
    },
  }

  // x-top x-left x-right x-bottom
  offsetPositionSetters = {
    top: ({ baseTop, top }) => {
      return { top: `${baseTop + top}px` };
    },
    left: ({ baseLeft, left }) => {
      return { left: `${baseLeft + left}px`, };
    },
    right: ({ baseLeft, right, portalWidth }) => {
      return { left: `${baseLeft + right - portalWidth}px` };
    },
    bottom: ({ baseTop, bottom, portalHeight }) => {
      return { top: `${baseTop + bottom - portalHeight}px` };
    },
  }

  // x-center
  centerPositionSetters = {
    'top-center': (param) => {
      const { baseLeft, left, width, portalWidth } = param;
      return {
        ...this.basePositionSetters.top(param),
        left: `${baseLeft + left + (width / 2) - (portalWidth / 2)}px`,
      };
    },
    'left-center': (param) => {
      const { baseTop, top, height, portalHeight } = param;
      return {
        top: `${ baseTop + top + (height / 2) - (portalHeight / 2)}px`,
        ...this.basePositionSetters.left(param),
      };
    },
    'right-center': (param) => {
      const { baseTop, top, height, portalHeight } = param;
      return {
        top: `${ baseTop + top + (height / 2) - (portalHeight / 2)}px`,
        ...this.basePositionSetters.right(param),
      };
    },
    'bottom-center': (param) => {
      const { baseLeft, left, width, portalWidth } = param;
      return {
        ...this.basePositionSetters.bottom(param),
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

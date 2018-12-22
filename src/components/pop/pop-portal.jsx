import React from 'react';
import PropTypes from 'prop-types';
import Base from '../base';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { pick } from 'lodash/object';
import basePositionSetters from './position-setters/base';
import centerPositionSetters from './position-setters/center';
import offsetPositionSetters from './position-setters/offset';
import arrowPositionSetter from './position-setters/arrow';

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
      arrowPosStyle: {},
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
      const portalStyle = centerPositionSetters[position](posParams);
      this.setState({ portalStyle });
    } else {
      const [basePos, offsetPos] = this.props.position.split('-');
      const basePosStyle = basePositionSetters[basePos](posParams);
      const offsetPosStyle = offsetPositionSetters[offsetPos](posParams);
      const arrowPosStyle = arrowPositionSetter(position);
      this.setState({
        portalStyle: { ...basePosStyle, ...offsetPosStyle},
        arrowPosStyle,
      });
    }
  };

  onMouseEnter = () => {
    this.safeCall(this.props.onMouseEnter);
  }

  onMouseLeave = () => {
    this.safeCall(this.props.onMouseLeave);
  }

  render() {
    const { wrapperClassName, position, content } = this.props;
    const { portalStyle, basePosition, arrowPosStyle } = this.state;
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
        <span className="pop-arrow" style={arrowPosStyle} />
      </div>),
      document.body,
    )
  }
}

export default PopPortal;

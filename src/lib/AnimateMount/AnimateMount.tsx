import * as React from 'react';
import { findDOMNode } from 'react-dom';

type Props = {
  children: JSX.Element;
  show: boolean;
  onAnimateComplete?: () => void;
};

type State = {
  isMounted: boolean;
  style: React.CSSProperties;
  prevProps: Props;
};

export class AnimateMount2 extends React.Component<Props, State> {
  private wrapperRef = React.createRef<HTMLDivElement>();

  state: State = {
    isMounted: this.props.show,
    prevProps: this.props,
    style: {
      opacity: this.props.show ? 1 : 0,
    },
  };

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (nextProps.show !== prevState.prevProps.show) {
      return {
        isMounted: true,
        prevProps: nextProps,
        style: {
          opacity: nextProps.show ? 1 : 0,
          transform: `scale(${nextProps.show ? 1 : 0})`,
          transition: 'all 1s ease',
        },
      };
    }
    return null;
  }

  private handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    this.props.onAnimateComplete && this.props.onAnimateComplete();
    if (event.target === this.wrapperRef.current && !this.props.show) {
      this.setState({
        isMounted: false,
      });
    }
  };

  render() {
    return (
      <div
        ref={this.wrapperRef}
        style={{
          ...this.state.style,
          display: 'inline-flex',
        }}
        onTransitionEnd={this.handleTransitionEnd}
      >
        {this.state.isMounted && this.props.children}
      </div>
    );
  }
}

type AnimateMountProps = { children: React.ReactChild };
export default class AnimateMount extends React.Component<AnimateMountProps> {
  componentDidMount() {
    const node = findDOMNode(this) as HTMLElement;
    node.style.opacity = '0';
    node.style.transform = 'translateY(20px)';
    node.style.transition = 'transform .3s, opacity .3s linear';
    forceReflow(node);
    node.style.transform = '';
    node.style.opacity = '';
    node.addEventListener('transitionend', () => {
      node.style.transition = '';
    });
  }
  render() {
    return React.Children.only(this.props.children);
  }
}

type AnimateUnmountProps = { children: React.ReactChild; show: boolean };
type AnimateUnmountState = { unMounted: boolean };
export class AnimateUnmount extends React.Component<AnimateUnmountProps, AnimateUnmountState> {
  state = { unMounted: false };
  componentDidUpdate(prevProps: this['props']) {
    if (!this.state.unMounted && prevProps.show && !this.props.show) {
      const node = findDOMNode(this) as HTMLElement;
      node.style.transition = 'opacity .3s';
      forceReflow(node);
      node.style.opacity = '0';
      node.addEventListener('transitionend', () => {
        this.setState({ unMounted: true });
      });
    }
  }
  render() {
    return this.state.unMounted ? null : React.Children.only(this.props.children);
  }
}

function forceReflow(node: HTMLElement) {
  // eslint-disable-next-line no-unused-expressions
  getComputedStyle(node).opacity;
}

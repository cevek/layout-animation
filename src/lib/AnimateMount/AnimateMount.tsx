import * as React from 'react';

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

export default class AnimateMount extends React.Component<Props, State> {
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

  private handleTransitionEnd = (
    event: React.TransitionEvent<HTMLDivElement>
  ) => {
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
